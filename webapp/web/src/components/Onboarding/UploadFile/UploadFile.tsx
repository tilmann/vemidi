import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'

const UploadFile = (props) => {
  const [uploading, setUploading] = useState<boolean>(false)
  const { currentUser, client } = useAuth()
  const supabase = client
  const flatId = props.flatId
  const UPDATE_FLAT_MUTATION = gql`
    mutation UpdateFlatMutationWithUrl($id: String!, $input: UpdateFlatInput!) {
      updateFlat(id: $id, input: $input) {
        id
        rawDocUrl
      }
    }
  `

  const [updateFlat, { loading, error }] = useMutation(UPDATE_FLAT_MUTATION, {
    onCompleted: () => {
      setUploading(false)
      navigate(routes.dashboard())
    },
  })

  async function uploadFile(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length == 0) {
        throw 'You must select an image to upload.'
      }

      const user = supabase.auth.user()
      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${currentUser?.sub}-${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage
        .from('files')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      updateFlat({
        variables: { id: flatId, input: { rawDocUrl: filePath } },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Heizkostenabrechnung hochladen
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>
                        Heizkostenabrechnung{' '}
                        {uploading ? 'wird hochgeladen' : 'auswählen'}
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="*"
                        onChange={uploadFile}
                        disabled={uploading}
                      />
                    </label>
                    {/* <p className="pl-1">or drag and drop</p> */}
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, PNG oder JPG bis zu 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadFile

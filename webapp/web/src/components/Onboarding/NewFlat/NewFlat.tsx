import { useMutation } from '@redwoodjs/web'
import FlatForm from 'src/components/Onboarding/FlatForm/FlatForm'

const CREATE_FLAT_MUTATION = gql`
  mutation CreateFlatMutation($input: CreateFlatInput!) {
    createFlat(input: $input) {
      id
    }
  }
`

const NewFlat = (props) => {
  const [createFlat, { loading, error }] = useMutation(CREATE_FLAT_MUTATION, {
    onCompleted: (data) => {
      //toast.success('Flat created')
      props.success(data.createFlat.id)
      //navigate(routes.flats())
    },
  })

  const onSave = (input) => {
    createFlat({ variables: { input } })
  }

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Gebäudedaten
          </h2>
        </div>

        <div>
          <FlatForm onSave={onSave} loading={loading} error={error} />
        </div>
      </div>
    </div>
  )
}

export default NewFlat

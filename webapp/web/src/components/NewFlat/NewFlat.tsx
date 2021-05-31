import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FlatForm from 'src/components/FlatForm'

import { QUERY } from 'src/components/FlatsCell'

const CREATE_FLAT_MUTATION = gql`
  mutation CreateFlatMutation($input: CreateFlatInput!) {
    createFlat(input: $input) {
      id
    }
  }
`

const NewFlat = () => {
  const [createFlat, { loading, error }] = useMutation(CREATE_FLAT_MUTATION, {
    onCompleted: () => {
      toast.success('Flat created')
      navigate(routes.flats())
    },
  })

  const onSave = (input) => {
    createFlat({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Flat</h2>
      </header>
      <div className="rw-segment-main">
        <FlatForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFlat

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FlatForm from 'src/components/Flat/FlatForm'

export const QUERY = gql`
  query FindFlatById($id: String!) {
    flat: flat(id: $id) {
      id
      zipCode
      squareMeters
      rawDocUrl
      createdAt
      userId
    }
  }
`
const UPDATE_FLAT_MUTATION = gql`
  mutation UpdateFlatMutation($id: String!, $input: UpdateFlatInput!) {
    updateFlat(id: $id, input: $input) {
      id
      zipCode
      squareMeters
      rawDocUrl
      createdAt
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ flat }) => {
  const [updateFlat, { loading, error }] = useMutation(UPDATE_FLAT_MUTATION, {
    onCompleted: () => {
      toast.success('Flat updated')
      navigate(routes.flats())
    },
  })

  const onSave = (input, id) => {
    updateFlat({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Flat {flat.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FlatForm flat={flat} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

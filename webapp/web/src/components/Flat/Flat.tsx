import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/FlatsCell'

const DELETE_FLAT_MUTATION = gql`
  mutation DeleteFlatMutation($id: String!) {
    deleteFlat(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Flat = ({ flat }) => {
  const [deleteFlat] = useMutation(DELETE_FLAT_MUTATION, {
    onCompleted: () => {
      toast.success('Flat deleted')
      navigate(routes.flats())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete flat ' + id + '?')) {
      deleteFlat({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Flat {flat.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{flat.id}</td>
            </tr>
            <tr>
              <th>Zip code</th>
              <td>{flat.zipCode}</td>
            </tr>
            <tr>
              <th>Square meters</th>
              <td>{flat.squareMeters}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(flat.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFlat({ id: flat.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(flat.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Flat

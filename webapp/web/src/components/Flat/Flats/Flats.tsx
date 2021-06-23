import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Flat/FlatsCell'

const DELETE_FLAT_MUTATION = gql`
  mutation DeleteFlatMutation($id: String!) {
    deleteFlat(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const FlatsList = ({ flats }) => {
  const [deleteFlat] = useMutation(DELETE_FLAT_MUTATION, {
    onCompleted: () => {
      toast.success('Flat deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete flat ' + id + '?')) {
      deleteFlat({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Zip code</th>
            <th>Square meters</th>
            <th>Raw doc url</th>
            <th>Created at</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {flats.map((flat) => (
            <tr key={flat.id}>
              <td>{truncate(flat.id)}</td>
              <td>{truncate(flat.zipCode)}</td>
              <td>{truncate(flat.squareMeters)}</td>
              <td>{truncate(flat.rawDocUrl)}</td>
              <td>{timeTag(flat.createdAt)}</td>
              <td>{truncate(flat.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.flat({ id: flat.id })}
                    title={'Show flat ' + flat.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFlat({ id: flat.id })}
                    title={'Edit flat ' + flat.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete flat ' + flat.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(flat.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FlatsList

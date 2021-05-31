import Flat from 'src/components/Flat'

export const QUERY = gql`
  query FIND_FLAT_BY_ID($id: String!) {
    flat: flat(id: $id) {
      id
      zipCode
      squareMeters
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Flat not found</div>

export const Success = ({ flat }) => {
  return <Flat flat={flat} />
}

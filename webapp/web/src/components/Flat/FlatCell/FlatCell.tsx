import Flat from 'src/components/Flat/Flat'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Flat not found</div>

export const Success = ({ flat }) => {
  return <Flat flat={flat} />
}

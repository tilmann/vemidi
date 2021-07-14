import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import FlatCard from 'src/components/Dashboard/FlatCard/FlatCard'
import type { FlatsCardsQuery } from 'types/graphql'

export const QUERY = gql`
  query FlatsCardsQuery {
    flatsCards: flats {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ flatsCards }: CellSuccessProps<FlatsCardsQuery>) => {
  return (
    <ul>
      {flatsCards.map((flat) => {
        return <FlatCard flat={flat} key={flat.id} />
      })}
    </ul>
  )
}

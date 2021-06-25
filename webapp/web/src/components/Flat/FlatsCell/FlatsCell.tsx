import { Link, routes } from '@redwoodjs/router'

import Flats from 'src/components/Flat/Flats'

export const QUERY = gql`
  query FLATS {
    flats {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No flats yet. '}
      <Link to={routes.newFlat()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ flats }) => {
  return <Flats flats={flats} />
}

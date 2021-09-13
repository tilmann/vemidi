import FlatCard from './FlatCard'

export const generated = () => {
  return (
    <FlatCard
      flat={{
        id: 1,
        squareMeters: 212,
        zipCode: 12345,
      }}
    />
  )
}

export default { title: 'Components/FlatCard' }

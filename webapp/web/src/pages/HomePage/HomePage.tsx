import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>Vemidi</h1>
      <p>
        See the <Link to={routes.flats()}>flats</Link>
      </p>
    </>
  )
}

export default HomePage

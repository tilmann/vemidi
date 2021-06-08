import { Link, routes } from '@redwoodjs/router'
import AuthUi from 'src/components/AuthUi'

const HomePage = () => {
  return (
    <>
      <AuthUi />
      <h1>Vemidi</h1>
      <p>
        See the <Link to={routes.flats()}>flats</Link>
      </p>
    </>
  )
}

export default HomePage

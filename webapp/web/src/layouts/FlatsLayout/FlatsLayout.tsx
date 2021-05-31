import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const FlatsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.flats()} className="rw-link">
            Flats
          </Link>
        </h1>
        <Link to={routes.newFlat()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Flat
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default FlatsLayout

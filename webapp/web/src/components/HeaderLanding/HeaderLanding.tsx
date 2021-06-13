import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const navigation = [
  // { name: 'Solutions', href: '#' },
  // { name: 'Pricing', href: '#' },
  // { name: 'Docs', href: '#' },
  // { name: 'Company', href: '#' },
]

const HeaderLanding = () => {
  const { isAuthenticated, logOut } = useAuth()

  async function logout() {
    await logOut()
  }

  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://www.vemidi.de/assets/logo_vemidi_white.svg"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {isAuthenticated && (
            <div className="ml-10 space-x-4">
              <Link
                to={routes.onboarding()}
                onClick={logout}
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Log out
              </Link>
              <Link
                to={routes.dashboard()}
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Dashboard
              </Link>
            </div>
          )}
          {!isAuthenticated && (
            <div className="ml-10 space-x-4">
              <Link
                to={routes.onboarding()}
                onClick={logout}
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Einloggen
              </Link>
              <Link
                to={routes.onboarding()}
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Wohnung anlegen
              </Link>
            </div>
          )}
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default HeaderLanding

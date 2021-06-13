type OnboardingLayoutProps = {
  children: React.ReactNode
}

import { Link, routes } from '@redwoodjs/router'

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-600 pb-32">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link to={routes.home()}>
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://www.vemidi.de/assets/logo_vemidi_white.svg"
                  alt=""
                />
              </Link>
              <header>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-white">Onboarding</h1>
                </div>
              </header>
            </div>
          </div>
        </nav>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {children}
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}

export default OnboardingLayout

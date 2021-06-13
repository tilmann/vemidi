type LandingLayoutProps = {
  children: React.ReactNode
}

import HeaderLanding from '../../components/HeaderLanding/HeaderLanding'

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-indigo-600 pb-32">
        <HeaderLanding />
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

export default LandingLayout

import { Link, routes } from '@redwoodjs/router'

const user = {
  role: 'Baujahr 1991, 10 Parteien',
  imageUrl: 'https://careermap.co.uk/wp-content/uploads/2015/02/70.png',
}
const stats = [
  { label: 'Maßnahmen möglich', value: 3 },
  { label: 'Tonnen CO2 Einsparungen möglich', value: 34 },
  { label: 'Einladungen versendet', value: 1 },
]

const FlatCard = ({ flat }) => {
  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <h2 className="sr-only" id="profile-overview-title">
        Wohnungsüberblick
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">🏡</p>
            </div>
            {/* <div className="flex-shrink-0">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div> */}
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {flat?.squareMeters}m² Wohnung in {flat?.zipCode}
              </p>
              {/* <p className="text-sm font-medium text-gray-600">{user.role}</p> */}
            </div>
          </div>
          <div className="mt-5 flex justify-center sm:mt-0">
            <Link
              to={routes.flat(flat.id)}
              className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Wohnung anpassen
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-5 text-sm font-medium text-center"
          >
            <span className="text-gray-900">{stat.value}</span>{' '}
            <span className="text-gray-600">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlatCard

// const HomePage = () => {
//   return (
//     <>
//       <h2>Login</h2>
//       <AuthUi />
//       <h1>Vemidi</h1>
//       <p>
//         See the <Link to={routes.flats()}>flats</Link>
//       </p>
//       <p>
//         Start the <Link to={routes.onboarding()}>onboarding</Link>
//       </p>
//     </>
//   )
// }
import { CheckIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { Link, routes } from '@redwoodjs/router'
import FooterLanding from '../../components/FooterLanding/FooterLanding'


const features = [
  {
    name: '(d)ein Tool',
    description:
      'Du steuerst deine Sanierung ganz einfach selbst: von der Beratung über die Förderung bis zur Umsetzung.',
  },
  {
    name: 'schnell',
    description:
      'Kein monatelanges Warten auf einen Beratungstermin oder Förderantrag.',
  },
  {
    name: 'kompetent',
    description:
      'Mit der Kombination aus Fachkompetenz und innovativer Technologie zu deiner optimalen Sanierung.',
  },
  {
    name: 'transparent',
    description:
      'Zu jeder Zeit wissen wo du stehst und was als nächstes zu tun ist.',
  },
]

const HomePage = () => {
  return (
    <>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <main>
          {/* Hero section */}
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div>
                  {/* <img
                    className="h-11 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  /> */}
                </div>
                <div>
                  <div>
                    <Link
                      to={routes.dashboard()}
                      className="inline-flex space-x-4"
                    >
                      <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-500 tracking-wide">
                        einfach.verständlich.energetisch.sanieren
                      </span>
                      {/* <span className="inline-flex items-center text-sm font-medium text-indigo-500 space-x-1">
                          <span>Dashboard</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span> */}
                    </Link>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      Energieberatung online
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      ✔️ schnell zur geförderten Sanierung!
                      <br />
                      ✔️ einfach Daten hochladen{' '}
                      <span className="italic">oder</span>
                      <br />
                      ✔️ jetzt Termin vereinbaren
                      <br />
                    </p>
                  </div>
                  <form action="#" className="mt-12 sm:max-w-lg sm:w-full">
                    {/* <div className="min-w-0 flex-1">
                      <label htmlFor="hero_email" className="sr-only">
                        E-Mailadresse
                      </label>
                      <input
                        id="hero_email"
                        type="email"
                        className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="E-Mailadresse eintragen"
                      />
                    </div> */}
                    <div className="mt-4 flex">
                      <div className="w-5/12 text-center">
                        <Link to={routes.data()}>
                          <button
                            type="submit"
                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                          >
                            Ihre Daten hochladen
                          </button>
                          <span className="text-xs text-gray-700">
                            Laden sie Bauplan, Fotos und Heizkostenabrechnung
                            hoch um zu starten.
                          </span>
                        </Link>
                      </div>
                      <div className="w-2/12 mt-6 text-center">
                        <span className="">oder</span>
                      </div>
                      <div className="w-5/12 text-center">
                        <Link to={routes.meet()}>
                          <button
                            type="submit"
                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                          >
                            Beratung vor Ort anfordern
                          </button>
                          <span className="text-xs  text-gray-700">
                            Vereinbaren Sie einen Termin zur Energieberatung vor
                            Ort in den nächsten Wochen.
                          </span>
                        </Link>
                      </div>
                    </div>
                  </form>
                  <div className="mt-6">
                    <div className="inline-flex items-center divide-x divide-gray-300">
                      <div className="flex-shrink-0 flex pr-5">
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                        <StarIcon
                          className="h-5 w-5 text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span className="font-medium align-middle text-gray-900">
                          5 Sterne
                        </span>{' '}
                        von{' '}
                        <span className="font-medium text-indigo-500">
                          unseren Nutzern.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                {/* <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div> */}
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    className="w-full rounded-md lg:h-full lg:w-auto lg:max-w-none"
                    src="map.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Energieberatung einfach gemacht
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  effizient² - effiziente Planung & effizientes Haus
                </p>
              </div>
              <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                <span className="block">Energieberatung starten?</span>
                <span className="block text-indigo-600">
                  Wie möchten Sie vorgehen?
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <form action="#" className="mt-12 sm:max-w-lg sm:w-full">
                  {/* <div className="min-w-0 flex-1">
                      <label htmlFor="hero_email" className="sr-only">
                        E-Mailadresse
                      </label>
                      <input
                        id="hero_email"
                        type="email"
                        className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="E-Mailadresse eintragen"
                      />
                    </div> */}
                  <div className="mt-4 flex">
                    <div className="w-5/12 text-center">
                      <Link to={routes.data()}>
                        <button
                          type="submit"
                          className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                        >
                          Ihre Daten hochladen
                        </button>
                        <span className="text-xs text-gray-700">
                          Laden sie Bauplan, Fotos und Heizkostenabrechnung hoch
                          um sofort zu starten.
                        </span>
                      </Link>
                    </div>
                    <div className="w-2/12 mt-6 text-center">
                      <span className="">oder</span>
                    </div>
                    <div className="w-5/12 text-center">
                      <Link to={routes.meet()}>
                        <button
                          type="submit"
                          className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                        >
                          Beratung vor Ort anfordern
                        </button>
                        <span className="text-xs text-gray-700">
                          Vereinbaren Sie einen Termin zur Energieberatung vor
                          Ort in den nächsten Wochen.
                        </span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* CTA section */}
        </main>
        <FooterLanding />
      </div>
    </>
  )
}

export default HomePage

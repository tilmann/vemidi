import { CheckCircleIcon } from '@heroicons/react/solid'
import { Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { useLocation } from '@redwoodjs/router'
import { useState } from 'react'

const settings = [
  {
    name: 'Interview',
    description: 'Gerne stehe ich für ein kurzes Interview zur Verfügung.',
  },
  {
    name: 'Benachrichtigung',
    description: 'Ich möchte eine Nachricht, wenn das Produkt bereit ist.',
  },
  {
    name: 'Newsletter',
    description: 'Ich möchte aktuelle Informationen zum Fortschritt.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContactPage = () => {
  const [selected, setSelected] = useState(settings[0])
  const [emailEntered, setEmailEntered] = useState(false)
  let { pathname } = useLocation()
  pathname = pathname.substring(1)

  function onSubmit(formData) {
    setEmailEntered(true)
    ga('send', 'event', pathname, 'click')
    formData.path = pathname
    const https = require('https')
    var postData = JSON.stringify(formData)

    var options = {
      hostname: '6boo4tex0m.execute-api.eu-central-1.amazonaws.com',
      port: 443,
      path: '/default/optalo-post-lead-to-slack',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    var req = https.request(options, (res) => {
      res.on('data', (d) => {})
    })

    req.on('error', (e) => {
      console.error(e)
    })

    req.write(postData)
    req.end()
  }

  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <main>
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative sm:py-16">
              <div aria-hidden="true" className="hidden sm:block">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
                    fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                  />
                </svg>
              </div>
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 1463 360"
                    >
                      <path
                        className="text-indigo-500 text-opacity-40"
                        fill="currentColor"
                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      />
                      <path
                        className="text-indigo-700 text-opacity-40"
                        fill="currentColor"
                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <div className="sm:text-center">
                      <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Wir sind fast soweit.
                      </h2>
                      <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
                        Danke für ihr Interesse. Wir arbeiten mit Hochdruck
                        daran, die passenden Angebote für eine
                        Online-Energieberatung zur Verfügung zu stellen. <br />
                        Gerne kontaktieren wir sie, um ein kurzes Gespräch
                        bezüglich ihrer Erwartungen, zu vereinbaren.
                      </p>
                    </div>
                    {emailEntered && (
                      <div className="rounded-md bg-yellow-50 p-4 mt-8">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">
                              E-Mail gespeichert
                            </h3>
                            <div className="mt-2 text-sm text-green-700">
                              <p>
                                Wir haben ihre E-Mailadresse gespeichert und
                                melden uns bei Ihnen sobald das Angebot bereit
                                steht.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <Form
                      onSubmit={onSubmit}
                      className="mt-12 sm:mx-auto sm:max-w-lg"
                    >
                      <div className="sm:flex py-8">
                        <div className="min-w-0 flex-1">
                          <Label htmlFor="cta-email" className="sr-only">
                            Ihre Emailadresse
                          </Label>
                          <TextField
                            name="email"
                            id="cta-email"
                            type="email"
                            className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                            placeholder="Ihre Emailadresse"
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3">
                          <Submit
                            type="submit"
                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                          >
                            Gespräch führen
                          </Submit>
                        </div>
                      </div>
                      <span className="text-white text-xs">
                        Ihre E-Mailadresse wird ausschließlich zur
                        Kontaktaufnahme in Bezug auf unser Produkt verwendet.
                      </span>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage

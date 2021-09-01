import { CheckCircleIcon } from '@heroicons/react/solid'
import {
  CheckboxField,
  Form,
  Label,
  NumberField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { useLocation } from '@redwoodjs/router'
import { useState } from 'react'

const ContactPage = () => {
  const [dataFilled, setDataFilled] = useState(false)
  const [emailEntered, setEmailEntered] = useState(false)

  let { pathname } = useLocation()
  pathname = pathname.substring(1)

  function sendToSlack(formData) {
    console.log('Send')
    // const https = require('https')
    // var postData = JSON.stringify(formData)

    // var options = {
    //   hostname: '6boo4tex0m.execute-api.eu-central-1.amazonaws.com',
    //   port: 443,
    //   path: '/default/optalo-post-lead-to-slack',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    // var req = https.request(options, (res) => {
    //   res.on('data', (d) => {})
    // })

    // req.on('error', (e) => {
    //   console.error(e)
    // })

    // req.write(postData)
    // req.end()
  }

  function onSubmitData(formData) {
    setDataFilled(true)
    sendToSlack(formData)
  }

  function onSubmit(formData) {
    setEmailEntered(true)
    formData.path = pathname
    sendToSlack(formData)
  }

  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <main>
        {pathname === 'data' && !dataFilled && (
          <div className="md:grid md:grid-cols-6 lg:grid-cols-8 md:gap-4 py-24">
            <Form
              onSubmit={onSubmitData}
              className="px-8 col-start-2 col-span-4 lg:col-start-3 lg:col-span-4"
            >
              <div className="text-center">
                <h3 className="text-2xl leading-6 font-medium text-gray-900">
                  Kurzabfrage
                </h3>
                <p className="mt-1 text-base text-gray-500">
                  Welche Daten haben Sie zur Hand und können Sie digital zur
                  Verfügung stellen?
                </p>
              </div>
              <fieldset className="space-y-5">
                <legend className="sr-only">Bauplan</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="bauplan"
                      aria-describedby="bauplan-description"
                      name="bauplan"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="bauplan"
                      className="font-medium text-gray-700"
                    >
                      Bauplan
                    </Label>
                    <p id="comments-description" className="text-gray-500">
                      Der Bauplan ihres Gebäudes in der aktuellen Version.
                    </p>
                  </div>
                </div>
                <legend className="sr-only">Heizkostenabrechnungen</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="heizkostenabrechnungen"
                      aria-describedby="heizkostenabrechnungen-description"
                      name="heizkostenabrechnungen"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="heizkostenabrechnungen"
                      className="font-medium text-gray-700"
                    >
                      Heizkostenabrechnungen
                    </Label>
                    <p id="comments-description" className="text-gray-500">
                      Heizkostenabrechnungen der letzten drei Jahre.
                    </p>
                  </div>
                </div>
                <legend className="sr-only">Durchgeführte Sanierungen</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="sanierungsliste"
                      aria-describedby="sanierungsliste-description"
                      name="sanierungsliste"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="sanierungsliste"
                      className="font-medium text-gray-700"
                    >
                      Sanierungsliste
                    </Label>
                    <p id="comments-description" className="text-gray-500">
                      Eine Liste mit allen Sanierungen, die an ihrem Gebäude
                      durchgeführt wurden.
                    </p>
                  </div>
                </div>
                <legend className="sr-only">Energieausweis</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="energieausweis"
                      aria-describedby="energieausweis-description"
                      name="energieausweis"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="energieausweis"
                      className="font-medium text-gray-700"
                    >
                      Energieausweis
                    </Label>
                    <p id="comments-description" className="text-gray-500">
                      Der aktuelle Energieausweis ihres Gebäudes.
                    </p>
                  </div>
                </div>
                <legend className="sr-only">Thermografie-Aufnahme</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="thermografie"
                      aria-describedby="Thermografie-description"
                      name="thermografie"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="thermografie"
                      className="font-medium text-gray-700"
                    >
                      Thermografie-Aufnahme
                    </Label>
                    <p id="comments-description" className="text-gray-500">
                      Eine möglichst aktuelle Thermografie-Aufnahme.
                    </p>
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-center ">
                <Submit
                  type="submit"
                  className="mt-8 block rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Daten absenden
                </Submit>
              </div>
            </Form>
          </div>
        )}
        {(pathname === 'quality' || pathname === 'location') && !dataFilled && (
          <div className="md:grid md:grid-cols-6 lg:grid-cols-8 md:gap-4 py-24">
            <Form
              onSubmit={onSubmitData}
              className="px-8 col-start-2 col-span-4 lg:col-start-3 lg:col-span-4"
            >
              <div className="text-center">
                <h3 className="text-2xl leading-6 font-medium text-gray-900">
                  Wir finden die passende Energieberatung!
                </h3>
                <p className="mt-1 text-base text-gray-500">
                  Welche Sanierung/en haben Sie im Blick?
                </p>
              </div>
              <fieldset className="space-y-5 py-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ihre Postleitzahl
                  </label>
                  <div className="mt-1">
                    <NumberField
                      type="number"
                      name="plz"
                      id="plz"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="12345"
                    />
                  </div>
                </div>
                <legend className="sr-only">Heizung</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="heizung"
                      aria-describedby="heizung-description"
                      name="heizung"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="heizung"
                      className="font-medium text-gray-700"
                    >
                      Heizung
                    </Label>
                  </div>
                </div>
                <legend className="sr-only">Dämmung</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="daemmung"
                      aria-describedby="daemmung-description"
                      name="daemmung"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="daemmung"
                      className="font-medium text-gray-700"
                    >
                      Dämmung
                    </Label>
                  </div>
                </div>
                <legend className="sr-only">Fenster</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="fenster"
                      aria-describedby="fenster-description"
                      name="fenster"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="fenster"
                      className="font-medium text-gray-700"
                    >
                      Fenster
                    </Label>
                  </div>
                </div>
                <legend className="sr-only">Photovoltaik</legend>
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <CheckboxField
                      id="photovoltaik"
                      aria-describedby="photovoltaik-description"
                      name="photovoltaik"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="photovoltaik"
                      className="font-medium text-gray-700"
                    >
                      Photovoltaik
                    </Label>
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-center ">
                <Submit
                  type="submit"
                  className="mt-8 block rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Energieberatung finden
                </Submit>
              </div>
            </Form>
          </div>
        )}
        {(pathname === 'meet' || pathname === 'info' || dataFilled) && (
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
            <div className="mx-auto max-w-md md:px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
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
                          daran, die passenden Angebote zur Verfügung zu
                          stellen. <br />
                          Gerne kontaktieren wir sie, um ein kurzes Gespräch
                          bezüglich ihrer Erwartungen zu vereinbaren.
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
                        className="mt-4 sm:mx-auto sm:max-w-lg"
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
        )}
      </main>
    </div>
  )
}

export default ContactPage

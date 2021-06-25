import { CheckCircleIcon, LockClosedIcon } from '@heroicons/react/solid'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const AuthUi = () => {
  const [email, setEmail] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false)
  const { logIn, logOut, isAuthenticated, loading } = useAuth()

  const resetForm = () => {
    setEmail('')
    setAcceptTerms(false)
  }

  function toggleAcceptTerms() {
    setAcceptTerms(!acceptTerms)
  }

  async function requestMagicLink(e) {
    e.preventDefault()
    if (!isAuthenticated && email.length) {
      try {
        setWaitingForConfirmation(true)
        await logIn({ email, redirectTo: process.env.HOST + '/onboarding' })
        resetForm()
      } catch (e) {
        const supabaseError = JSON.parse(e.message)
        alert(supabaseError.error_description)
        setWaitingForConfirmation(false)
      }
    } else {
      await logOut()
    }
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Schritt 1: E-Mailadresse verifizieren
            </h2>
          </div>
          {waitingForConfirmation && (
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
                    E-Mailbestätigung gesendet
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      Wir haben eine E-Mail an die angegebene Adresse gesendet.
                      Bitte klicken Sie auf den Bestätigungslink in dieser
                      E-Mail um mit dem Onboarding fortzufahren. <br />
                      <br />
                      Falls Sie keine E-Mail bekommen haben überprüfen Sie bitte
                      ihren Spam Ordner oder füllen Sie das Formular erneut aus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-Mailaddresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="name@email.de"
                  aria-describedby="email-description"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onClick={(e) => {
                    toggleAcceptTerms()
                  }}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Datenschutz- und Geschäftsbedingungen zustimmen
                </label>
              </div>

              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Neuen Login Link zusenden?
                </a>
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={!acceptTerms || !email.length}
                onClick={async (e) => requestMagicLink(e)}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Bestätigungsmail senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthUi

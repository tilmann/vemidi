import { LockClosedIcon } from '@heroicons/react/solid'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const AuthUi = () => {
  const [email, setEmail] = useState('')
  const { logIn, logOut, isAuthenticated } = useAuth()

  const resetForm = () => {
    setEmail('')
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Magic Link anfordern
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
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
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={!email.length && !isAuthenticated}
                onClick={async (e) => {
                  e.preventDefault()
                  if (!isAuthenticated && email.length) {
                    try {
                      await logIn({ email })
                      resetForm()
                    } catch (e) {
                      console.log(e)
                      const supabaseError = JSON.parse(e.message)
                      alert(supabaseError.error_description)
                    }
                  } else {
                    await logOut()
                  }
                }}
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

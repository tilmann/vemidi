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
      <form>
        <input
          type="email"
          placeholder="email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button
        disabled={!email.length && !isAuthenticated}
        onClick={async () => {
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
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
    </>
  )
}

export default AuthUi

import { useLazyQuery } from '@apollo/client'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import AuthUi from '../../components/AuthUi'
import Loader from '../../components/Loader/Loader'
import NewFlat from '../../components/Onboarding/NewFlat/NewFlat'
import UploadFile from '../../components/Onboarding/UploadFile/UploadFile'
import OnboardingSteps from '../../components/OnboardingSteps/OnboardingSteps'

const GET_USER_QUERY = gql`
  query FindUserWithFlatsById($id: String!) {
    user: user(id: $id) {
      id
      confirmedEmail
      subscribedToNews
      createdAt
      flats {
        id
        rawDocUrl
      }
    }
  }
`

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const OnboardingPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  const authLoading = useAuth().loading // useAuth().loading
  const [currentStep, setCurrentStep] = useState(0)
  const [flatId, setFlatId] = useState('')
  const stepOneSuccess = (flatId) => {
    setCurrentStep(currentStep + 1)
    setFlatId(flatId)
  }

  const [getUserProfile, { loading, data }] = useLazyQuery(GET_USER_QUERY)

  const [createUserProfile] = useMutation(CREATE_USER_MUTATION)

  useEffect(() => {
    if (isAuthenticated) {
      if (!loading && data?.user?.flats[0]?.rawDocUrl) {
        navigate(routes.dashboard())
      } else {
        getUserProfile({
          variables: { id: currentUser.sub },
        })
        if (data?.user?.flats?.length === 1) {
          setFlatId(data.user.flats[0].id)
          setCurrentStep(2)
        }
        if (!loading && data && !data.user) {
          createUserProfile({
            variables: {
              input: {
                id: currentUser.sub,
                confirmedEmail: true,
                subscribedToNews: false,
              },
            },
          })
        }
      }
    }
  }, [isAuthenticated, data])

  if (currentStep !== 0 && !isAuthenticated) setCurrentStep(0)
  if (currentStep === 0 && isAuthenticated) {
    setCurrentStep(1)
  }

  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <OnboardingSteps currentStep={currentStep} />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {/* TODO Add Loading component */}
          {(authLoading || loading) && <Loader />}
          {!authLoading && !loading && currentStep === 0 && <AuthUi />}
          {!loading && currentStep === 1 && (
            <NewFlat success={stepOneSuccess} />
          )}
          {!loading && currentStep === 2 && flatId && (
            <UploadFile flatId={flatId} />
          )}
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage

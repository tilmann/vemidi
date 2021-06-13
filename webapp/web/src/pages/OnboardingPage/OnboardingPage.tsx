import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import AuthUi from '../../components/AuthUi'
import NewFlat from '../../components/NewFlat'
import OnboardingSteps from '../../components/OnboardingSteps/OnboardingSteps'
import UploadFile from '../../components/UploadFile/UploadFile'

const OnboardingPage = () => {
  const { isAuthenticated } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const stepOneSuccess = () => {
    setCurrentStep(currentStep + 1)
  }

  if (isAuthenticated && currentStep === 0) stepOneSuccess()

  return (
    <div className="rounded-lg bg-white overflow-hidden shadow">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <OnboardingSteps currentStep={currentStep} />
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {currentStep === 0 && <AuthUi />}
          {currentStep === 1 && <NewFlat success={stepOneSuccess} />}
          {currentStep === 2 && <UploadFile />}
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage

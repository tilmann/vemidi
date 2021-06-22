import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import AuthUi from '../../components/AuthUi'
import NewFlat from '../../components/NewFlat'
import OnboardingSteps from '../../components/OnboardingSteps/OnboardingSteps'
import UploadFile from '../../components/UploadFile/UploadFile'

const OnboardingPage = () => {
  const { isAuthenticated, reauthenticate } = useAuth()
  const [currentStep, setCurrentStep] = useState(0)
  const [flatId, setFlatId] = useState('')
  const stepOneSuccess = (flatId) => {
    setCurrentStep(currentStep + 1)
    setFlatId(flatId)
  }

  if (currentStep !== 0 && !isAuthenticated) setCurrentStep(0)
  if (currentStep === 0 && isAuthenticated) setCurrentStep(1)

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
          {currentStep === 2 && <UploadFile flatId={flatId} />}
        </div>
      </div>
    </div>
  )
}

export default OnboardingPage

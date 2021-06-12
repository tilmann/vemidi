import { render } from '@redwoodjs/testing'

import OnboardingPage from './OnboardingPage'

describe('OnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingPage />)
    }).not.toThrow()
  })
})

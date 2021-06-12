import { render } from '@redwoodjs/testing'

import OnboardingSteps from './OnboardingSteps'

describe('OnboardingSteps', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingSteps />)
    }).not.toThrow()
  })
})

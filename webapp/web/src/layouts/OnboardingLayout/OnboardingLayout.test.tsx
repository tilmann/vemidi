import { render } from '@redwoodjs/testing'

import OnboardingLayout from './OnboardingLayout'

describe('OnboardingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingLayout />)
    }).not.toThrow()
  })
})

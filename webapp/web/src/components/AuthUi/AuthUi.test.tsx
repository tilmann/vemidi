import { render } from '@redwoodjs/testing'

import AuthUi from './AuthUi'

describe('AuthUi', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthUi />)
    }).not.toThrow()
  })
})

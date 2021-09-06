import { render } from '@redwoodjs/testing/web'

import ProfileDropdown from './ProfileDropdown'

describe('ProfileDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileDropdown />)
    }).not.toThrow()
  })
})

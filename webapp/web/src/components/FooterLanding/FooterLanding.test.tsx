import { render } from '@redwoodjs/testing'

import FooterLanding from './FooterLanding'

describe('FooterLanding', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterLanding />)
    }).not.toThrow()
  })
})

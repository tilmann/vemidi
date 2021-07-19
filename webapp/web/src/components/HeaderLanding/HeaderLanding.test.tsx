import { render } from '@redwoodjs/testing'
import HeaderLanding from './HeaderLanding'

describe('Header', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderLanding />)
    }).not.toThrow()
  })
})

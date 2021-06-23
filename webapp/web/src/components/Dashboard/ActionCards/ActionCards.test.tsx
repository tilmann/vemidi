import { render } from '@redwoodjs/testing'

import ActionCards from './ActionCards'

describe('ActionCards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActionCards />)
    }).not.toThrow()
  })
})

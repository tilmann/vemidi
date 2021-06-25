import { render } from '@redwoodjs/testing'

import FlatCard from './FlatCard'

describe('FlatCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlatCard />)
    }).not.toThrow()
  })
})

import { flats, flat, createFlat, updateFlat, deleteFlat } from './flats'
import type { StandardScenario } from './flats.scenarios'

describe('flats', () => {
  scenario('returns all flats', async (scenario: StandardScenario) => {
    const result = await flats()

    expect(result.length).toEqual(Object.keys(scenario.flat).length)
  })

  scenario('returns a single flat', async (scenario: StandardScenario) => {
    const result = await flat({ id: scenario.flat.one.id })

    expect(result).toEqual(scenario.flat.one)
  })

  scenario('deletes a flat', async (scenario: StandardScenario) => {
    const original = await deleteFlat({ id: scenario.flat.one.id })
    const result = await flat({ id: original.id })

    expect(result).toEqual(null)
  })
})

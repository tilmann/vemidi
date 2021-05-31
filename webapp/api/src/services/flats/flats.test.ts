import { flats, flat, createFlat, updateFlat, deleteFlat } from './flats'

describe('flats', () => {
  scenario('returns all flats', async (scenario) => {
    const result = await flats()

    expect(result.length).toEqual(Object.keys(scenario.flat).length)
  })

  scenario('returns a single flat', async (scenario) => {
    const result = await flat({ id: scenario.flat.one.id })

    expect(result).toEqual(scenario.flat.one)
  })

  scenario('creates a flat', async (scenario) => {
    const result = await createFlat({
      input: { zipCode: 'String' },
    })

    expect(result.zipCode).toEqual('String')
  })

  scenario('updates a flat', async (scenario) => {
    const original = await flat({ id: scenario.flat.one.id })
    const result = await updateFlat({
      id: original.id,
      input: { zipCode: 'String2' },
    })

    expect(result.zipCode).toEqual('String2')
  })

  scenario('deletes a flat', async (scenario) => {
    const original = await deleteFlat({ id: scenario.flat.one.id })
    const result = await flat({ id: original.id })

    expect(result).toEqual(null)
  })
})

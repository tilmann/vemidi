// Define your own mock data here:

const flatCards = [
    { id: 42, zipCode: 12345, squareMeters: 11 }, 
    { id: 43, zipCode: 12346, squareMeters: 22 }, 
    { id: 44, zipCode: 12347, squareMeters: 33 }]

export const standard = (/* vars, { ctx, req } */) => ({
  flatsCards: flatCards,
})

export const oneCard = (/* vars, { ctx, req } */) => ({
  flatsCards: [flatCards[0]],
})

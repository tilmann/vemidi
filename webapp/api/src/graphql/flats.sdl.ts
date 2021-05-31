export const schema = gql`
  type Flat {
    id: String!
    zipCode: String!
    squareMeters: Int
    createdAt: DateTime!
  }

  type Query {
    flats: [Flat!]!
    flat(id: String!): Flat
  }

  input CreateFlatInput {
    zipCode: String!
    squareMeters: Int
  }

  input UpdateFlatInput {
    zipCode: String
    squareMeters: Int
  }

  type Mutation {
    createFlat(input: CreateFlatInput!): Flat!
    updateFlat(id: String!, input: UpdateFlatInput!): Flat!
    deleteFlat(id: String!): Flat!
  }
`

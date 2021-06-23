export const schema = gql`
  type Flat {
    id: String!
    zipCode: String
    squareMeters: Int
    rawDocUrl: String
    createdAt: DateTime!
    User: User
    userId: String
  }

  type Query {
    flats: [Flat!]!
    flat(id: String!): Flat
  }

  input CreateFlatInput {
    zipCode: String
    squareMeters: Int
    rawDocUrl: String
    userId: String
  }

  input UpdateFlatInput {
    zipCode: String
    squareMeters: Int
    rawDocUrl: String
    userId: String
  }

  type Mutation {
    createFlat(input: CreateFlatInput!): Flat!
    updateFlat(id: String!, input: UpdateFlatInput!): Flat!
    deleteFlat(id: String!): Flat!
  }
`

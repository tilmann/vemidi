export const schema = gql`
  type User {
    id: String!
    confirmedEmail: Boolean!
    subscribedToNews: Boolean!
    createdAt: DateTime!
    flats: [Flat]!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
  }

  input CreateUserInput {
    id: String!
    confirmedEmail: Boolean!
    subscribedToNews: Boolean!
  }

  input UpdateUserInput {
    confirmedEmail: Boolean
    subscribedToNews: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`

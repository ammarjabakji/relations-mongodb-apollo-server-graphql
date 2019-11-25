import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    messageIds: [Message]
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User
    # me: User
  }

  input UserInput {
    id: ID
    name: String!
    email: String!
    messageId: [String]
  }
  extend type Mutation {
    createUser(input: UserInput): User!
    deleteUser(id: ID!): String!
  }
`

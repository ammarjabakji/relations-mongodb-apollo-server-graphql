import { gql } from 'apollo-server-express'

export default gql`
  type Message {
    id: ID!
    text: String!
    userId: User!
    # userId: String!
  }

  extend type Query {
    messages: [Message!]!
    message(id: ID!): Message!
  }

  input MessageInput {
    id: ID
    text: String!
    userId: String!
  }
  extend type Mutation {
    createMessage(input: MessageInput): Message!
    deleteMessage(id: ID!): String!
  }
`

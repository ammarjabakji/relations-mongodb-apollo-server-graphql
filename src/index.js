import 'dotenv/config'
import cors from 'cors'
import DataLoader from 'dataloader'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import schema from './schema'
import resolvers from './resolvers'
import models from './models'

import loaders from './loaders'
const app = express()

app.use(cors())

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    // me: models.users[1],
    loaders: {
      user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
    }
  },

  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
})

import mongoose from 'mongoose'

// Mongo connection
mongoose.Promise = global.Promise
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}
connectDB()

const usersSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  messageIds: {
    type: Array
  }
})

const users = mongoose.model('users', usersSchema)

const messagesSchema = new mongoose.Schema({
  text: {
    type: String
  },
  userId: {
    type: String
  }
})
const messages = mongoose.model('messages', messagesSchema)

// let users = {
//   1: {
//     id: '1',
//     username: 'Robin Wieruch',
//     messageIds: [1]
//   },
//   2: {
//     id: '2',
//     username: 'Dave Davids',
//     messageIds: [2]
//   }
// }

// let messages = {
//   1: {
//     id: '1',
//     text: 'Hello World',
//     userId: '1'
//   },
//   2: {
//     id: '2',
//     text: 'By World',
//     userId: '2'
//   }
// }

export default {
  users,
  messages
}

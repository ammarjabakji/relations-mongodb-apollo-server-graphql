export default {
  Query: {
    users: (parent, args, { models }) => {
      return models.users.find()
    },
    user: (parent, { id }, { models }) =>
      new Promise((resolve, object) => {
        models.users.findById(id, (err, user) => {
          if (err) reject(err)
          else resolve(user)
        })
      })
    // me: (parent, args, { me }) => {
    //   return me
    // }
  },
  Mutation: {
    createUser: (parent, { input }, { models }) => {
      const newUser = new models.users({
        name: input.name,
        email: input.email,
        messageIds: input.messageId
      })
      newUser.id = newUser._id
      return new Promise((resolve, object) => {
        newUser.save(err => {
          if (err) reject(err)
          else resolve(newUser)
        })
      })
    },
    deleteUser: (parent, { id }, { models }) =>
      new Promise((resolve, object) => {
        models.users.remove({ _id: id }, err => {
          if (err) reject(err)
          else resolve('Successfully deleted user')
        })
      })
  },

  User: {
    messageIds: async (user, args, { models }) => {
      return await models.messages.find({
        userId: user.id
      })
    }
  }
}

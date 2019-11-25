export default {
  Query: {
    messages: (parent, args, { models }) => {
      return models.messages.find()
    },
    message: (parent, { id }, { models }) =>
      new Promise((resolve, object) => {
        models.messages.findById(id, (err, message) => {
          if (err) reject(err)
          else resolve(message)
        })
      })
  },

  Mutation: {
    createMessage: (parent, { input }, { models }) => {
      const newMessage = new models.messages({
        text: input.text,
        userId: input.userId
      })
      newMessage.id = newMessage._id
      return new Promise((resolve, object) => {
        newMessage.save(err => {
          if (err) reject(err)
          else resolve(newMessage)
        })
      })
    },
    deleteMessage: (parent, { id }, { models }) =>
      new Promise((resolve, object) => {
        models.messages.remove({ _id: id }, err => {
          if (err) reject(err)
          else resolve('Successfully deleted message')
        })
      })
  },
  Message: {
    userId: async (message, args, { loaders }) => {
      return await loaders.user.load(message.userId)
    }
  }
}

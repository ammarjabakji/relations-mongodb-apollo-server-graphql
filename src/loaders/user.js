export const batchUsers = async (keys, models) => {
  const findUsers = await models.users.find({
    _id: {
      $in: keys
    }
  })

  return keys.map(key => findUsers.find(user => user.id == key))
}

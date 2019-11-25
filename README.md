## Messages schema tests

```
mutation {
  createMessage(input: { text: "Hello End!!!", userId: "2" }) {
    id
    text
    userId
  }
}
```

```
{
  messages {
    id
    text
    userId
  }
}
```

```
{
  message(id: "5ddbc121a34da056c4671b0b") {
    id
    text
    userId
  }
}
```

```
mutation{
  deleteMessage(id:"5ddbc12ba34da056c4671b0c")
}
```

## Users schema tests

```
mutation {
  createUser(input: { name: "testuser", email:"sdsd@gdgd.com" })
  {
    id
    name
    email
  }

}
```

```
mutation {
deleteUser(id:"5ddbd4bfc2184e5897652566")
}
```

```
{
  users {
    id
    name
    email
  }
}
```

```
{
  user(id:"5ddbdd813e7af159ffdc3d12"){
    id
    name
    email
  }
}
```

```
mutation {
  createUser(
    input: {
      name: "superuser"
      email: "super@gdgd.com"
      messageId: ["5ddbc121a34da056c4671b0b", "5ddbc0d6a34da056c4671b0a"]
    }
  ) {
    id
    name
    email
  }
}

```

```
{
  user(id:"5ddc05f12f2b575c8efdb0f2") {
    id
    name
    email
    messageIds {
      id
      text
    }
  }
}

```

```
{
  users {
    id
    name
    email
    messageIds {
      id
      text
    }
  }
}

```

```
{
  messages{
    id
    text
    userId {
      id
      name
      email
    }
  }
}

```

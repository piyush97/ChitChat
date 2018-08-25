// ./server.js

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:7dd003f0-b349-41c9-a803-866bff746197',
  key: '18d1d2b3-3edb-47e2-a6ae-e6527cc04dad:8s/LLypJDKQ+gCs1oc4kQN4icYenmOtEWQUoxO6wuQ8='
})
const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const {
    username
  } = req.body
  const user = {
    name: username,
    id: username
  }
  chatkit
    .createUser(user)
    .then(() => {
      console.log('Created user ', user.name)
      res.status(201).json(user)
    })
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        console.log('User already exists ', user.name)
        res.status(201).json(user)
      } else {
        console.error(error)
        res.status(error.status).json(error)
      }
    })
})

app.listen(3001)
console.log('Running on port 3001')
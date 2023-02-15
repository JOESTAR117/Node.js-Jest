import { getAllUsers, createUser } from '../controllers/User.controller'

const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
	res.send('Hello World!')
})

routes.get('/users', getAllUsers)

routes.post('/users/register', createUser)

export default routes

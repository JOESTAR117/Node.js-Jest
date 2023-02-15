const { Router } = require('express')

const routes = Router()

const database = ['Jackson Rios']

routes.get('/', (req, res) => {
	res.send('Hello World!')
})

routes.get('/users', (req, res) => {
	return res.status(200).json({ users: database })
})

routes.post('/users/register', (req, res) => {
	const name = req.body

	return res.status(201).json(name)
})

export default routes

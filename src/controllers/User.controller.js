import { database } from '../database/user'

const getAllUsers = (req, res) => {
	return res.status(200).json({ users: database })
}

const createUser = (req, res) => {
	const { name } = req.body

	if (name.length < 1) {
		return res.status(403).json({ message: 'fill in the blank field' })
	}

	database.push(name)
	return res.status(201).json(name)
}

export { getAllUsers, createUser }

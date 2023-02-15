import { Request, Response } from 'express'
import { database } from '../database/user'

const getAllUsers = (req: Request, res: Response) => {
	return res.status(200).json({ users: database })
}

const createUser = (req: Request, res: Response) => {
	const { name }:any = req.body

	if (name.length < 1) {
		return res.status(403).json({ message: 'fill in the blank field' })
	}

	database.push(name)
	return res.status(201).json(name)
}

export { getAllUsers, createUser }

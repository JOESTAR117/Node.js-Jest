import { Router } from 'express'
import { UsersController } from '../controllers/User.controller'

const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.listarUsuario)

routes.post('/users/register', usersController.criarUsuario)

export { routes }
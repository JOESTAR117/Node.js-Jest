import { makeMockResponse } from '../mocks/mockResponse'
import { Request } from 'express'
import { UsersController } from './User.controller'
import { database } from '../database/user'

describe('Users Controlles', () => {
    const usersController = new UsersController()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar todos os usuarios', () => {
        usersController.listarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toEqual(database)
    })

    it('Deve criar um novo usuario', () => {
        mockRequest.body = {
            name: 'Jackson Rios',
        }

        usersController.criarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({
            mensagem: `Usuário Jackson Rios criado`,
        })
    })

    it('Não deve criar um usuario com nome em branco', () => {
        mockRequest.body = {
            name: '',
        }
        usersController.criarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({
            mensagem: 'Não é possível criar usuários sem um nome',
        })
    })
})

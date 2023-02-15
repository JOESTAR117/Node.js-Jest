"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_controller_1 = require("../controllers/User.controller");
const { Router } = require('express');
const routes = Router();
routes.get('/', (req, res) => {
    res.send('Hello World!');
});
routes.get('/users', User_controller_1.getAllUsers);
routes.post('/users/register', User_controller_1.createUser);
exports.default = routes;

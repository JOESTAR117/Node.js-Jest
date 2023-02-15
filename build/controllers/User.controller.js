"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const user_1 = require("../database/user");
const getAllUsers = (req, res) => {
    return res.status(200).json({ users: user_1.database });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => {
    const { name } = req.body;
    if (name.length < 1) {
        return res.status(403).json({ message: 'fill in the blank field' });
    }
    user_1.database.push(name);
    return res.status(201).json(name);
};
exports.createUser = createUser;

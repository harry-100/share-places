const HttpError = require("../models/http-error");

const { v4: uuid } = require("uuid");

const { validationResult } = require("express-validator");

let DUMMY_USERS = [
    {
        id: "u1",
        name: "Matt",
        email: "matt@gmail.com",
        password: "123456"
    },
    {
        id: "u2",
        name: "John",
        email: "john@gmail.com",
        password: "123456"
    }
];

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
}


const signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError("Invalid inputs passed, please check your data.", 422);
    };
    const { name, email, password } = req.body;
    const hasUser = DUMMY_USERS.find(user => user.email === email);
    if (hasUser) {
        throw new HttpError("Could not create user. User already exists.", 422);
    }
    const newUser = {
        id: uuid(),
        name,
        email,
        password
    };
    DUMMY_USERS.push(newUser);
    res.status(201).json({ user: newUser });  
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    const identifiedUser = DUMMY_USERS.find(user => user.email === email && user.password === password);
    if (!identifiedUser) {
        throw new HttpError("Could not find user for the provided credentials.", 401);
    }
    res.json({ message: "Logged In" }); 
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
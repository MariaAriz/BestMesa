const User = require('../models/User.model');
const { StatusCodes } = require('http-status-codes');

module.exports.create = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  User.create({email, password, firstName, lastName})
  .then(userCreated =>{
    res.status(StatusCodes.CREATED).json(userCreated);
  })
  .catch(next)
}

module.exports.list = (req, res, next) => {
  User.find()
  .then(users => res.json(users))
  .catch(next)
}
const status = require('http-status');
const validate = require('express-validation');
const employees = require('./controllers/employees');
const types = require('./controllers/types');
const login = require('./controllers/login');
const employeesValidator = require('./validators/employees');
const typeValidator = require('./validators/types');
const loginValidator = require('./validators/login');

const handle = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = app => {
  const resource = require('./utils/resource')(app);

  app.post('/login', validate(loginValidator.signIn), handle(async (req, res) => {
    const {
      email,
      password
    } = req.body;
    res.status(status.OK).json(await login.signIn(email, password));
  }));

  resource('/types', types, typeValidator);
  resource('/', employees, employeesValidator);
};

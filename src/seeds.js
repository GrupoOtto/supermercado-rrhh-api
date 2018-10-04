const mongoose = require('mongoose');
const faker = require('faker');

const employees = require('./controllers/employees');
const types = require('./controllers/types');

const Employee = (firstname, lastname, email, type) => employees.create({firstname, lastname, email, password: '123456', type})
const Type = (initials, description) => types.create({initials, description})


mongoose.connect(process.env.DB_URL).then(async () => {
  for (let index = 0; index < 20; index++) {
    const description = faker.name.jobType()
    const type = await Type(description.toUpperCase().substring(0, 2), description);
    console.log(type);

    for (let index = 0; index < 20; index++) {
      const firstname = faker.name.firstName();
      const lastname = faker.name.lastName();
      const email = faker.internet.email(firstname, lastname);
      const employee = await Employee(firstname, lastname, email, type._id);
      console.log(employee);
    }
  }
});


const mongoose = require('mongoose');
const faker = require('faker');

const employees = require('./controllers/employees');
const types = require('./controllers/types');

const Employee = (_id, firstname, lastname, email, type) => employees.create({ _id, firstname, lastname, email, password: '123456', type});
const Type = (initials, description) => types.create({initials, description});


mongoose.connect(process.env.DB_URL).then(async () => {
    const description = "Cajero"
    const type = await Type(description.toUpperCase().substring(0, 2), description);
    console.log(type);

    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const email = "employee@ksupermarket.com";
    const id = "5bfaf2408587d4003a2b0ded";
    const employee = await Employee(id, firstname, lastname, email, type._id);
    console.log(employee);
    process.exit();
});


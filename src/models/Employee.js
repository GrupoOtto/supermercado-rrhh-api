const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type'
  }
});

EmployeeSchema.method({
  encryptPassword: function () {
    return bcrypt.hash(this.password, 16);
  },
  validPassword: function (password) {
    return bcrypt.compare(password, this.password);
  }
});

EmployeeSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await this.encryptPassword();
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);

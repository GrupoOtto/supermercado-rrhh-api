const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
  initials: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

TypeSchema.method({});

TypeSchema.statics = {};

module.exports = mongoose.model('Type', TypeSchema);

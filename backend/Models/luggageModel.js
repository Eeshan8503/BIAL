const mongoose = require('mongoose');

const luggageSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  token: {
    type: String
  },
  color: {
    type: String
  },
  images: {
    type: Array
  }
});

module.exports = mongoose.model('luggage', luggageSchema);

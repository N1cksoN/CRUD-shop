const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Could not have negative price.");
    }
  },

  category: {
    type: String,
    required: true
  },

  supplier: {
    type: String,
    required: true
  },

  expiration_date: {
    type: Date,
    required: true
  },

  measurability: {
    type: String,
    required: true
  },

  available_amount: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Could not have negative price.");
    }
  }
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
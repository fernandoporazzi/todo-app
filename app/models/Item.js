'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  is_completed: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = mongoose.model('Item', ItemSchema);
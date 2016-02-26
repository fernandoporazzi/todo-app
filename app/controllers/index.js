'use strict';

const ItemModel = require('../models/Item.js')

module.exports = {
  index : (req, res) => {
    res.render('home', {
      title: 'Todo App!'
    });
  },

  save: (req, res) => {
    res.json({
      taskname: req.body.name
    });
  }
};
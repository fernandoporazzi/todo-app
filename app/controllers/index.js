'use strict';

const ItemModel = require('../models/Item.js');
const log = require('winston');

module.exports = {
  index : (req, res) => {
    ItemModel.find((err, result) => {
      if (err != null) {
        return log.info('Error while fetching initial data');
      }

      res.render('home', {
        title: 'Todo App!',
        todos: JSON.stringify(result)
      });
    });
  },

  save: (req, res) => {
    var item = new ItemModel({
      name: req.body.name,
      description: req.body.description
    });

    item.save((err, item) => {
      if (err) {
        return res.json({
          err: 'Error while saving a new item'
        });
      }

      res.json({data: 'Item saved!'});
    });
  }
};
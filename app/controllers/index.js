'use strict';

const ItemModel = require('../models/Item.js');
const log = require('winston');

module.exports = {
  index : (req, res) => {
    ItemModel.find((err, result) => {
      if (err != null) {
        return log.info('Error while fetching initial data');
      }

      var completedItens = result.filter((item) => {
        return item.is_completed;
      });

      var percents = (completedItens.length * 100) / result.length;

      var _sharedData = {
        completedPercentage: percents,
        todos: result
      }

      res.render('home', {
        title: 'Todo App!',
        _sharedData: JSON.stringify(_sharedData),
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
  },

  update: (req, res) => {
    ItemModel.findOne({_id: req.body.id}, (err, item) => {
      if (err) {
        return res.json({error: true, message: 'Error while retrieveing data to update'});
      }

      item.is_completed = !item.is_completed;

      item.save((err, result) => {
        if (err) {
          return res.json({error: true, message: 'Error while saving data'});
        }

        return res.json({todo: result});
      });
    });

  }
};

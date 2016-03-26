'use strict';

const ItemModel = require('../models/Item.js');
const log = require('winston');
const util = require('../utils/todos');

module.exports = {

  index: function(req, res) {

    ItemModel.find((err, result) => {

      if (err != null) {
        return log.info('Error while fetching initial data');
      }

      var completedItens = util.getCompletedItens(result);
      var percents = util.getCompletedPercentage(completedItens, result);

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

  save: function(req, res) {
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

  update: function(req, res) {
    ItemModel.findOneAndUpdate({_id: req.body.id}, {$set: {is_completed: req.body.is_completed}}, {new: true}, (err, item) => {
      if (err) {
        return res.json({error: true, message: 'Error while retrieveing data to update'});
      }

      ItemModel.find((err, response) => {
        if (err != null) {
          return log.info('Error while fetching initial data');
        }

        var completedItens = util.getCompletedItens(response);
        var percents = util.getCompletedPercentage(completedItens, response);

        var dataToReturn = {
          todo: item,
          todos: response,
          completedPercentage: percents
        };

        return res.json(dataToReturn);
      });
    });
  },

  delete: function(req, res) {
    ItemModel.findOneAndRemove({_id: req.params.id}, (err, item) => {
      if (err) {
        return res.json({error: true, message: err});
      }

      ItemModel.find((err, response) => {
        if (err != null) {
          return log.info('Error while fetching initial data');
        }

        var completedItens = util.getCompletedItens(response);
        var percents = util.getCompletedPercentage(completedItens, response);

        var dataToReturn = {
          todo: item,
          todos: response,
          completedPercentage: percents
        };

        return res.json(dataToReturn);
      });
    });
  }
};

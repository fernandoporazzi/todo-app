'use strict';

module.exports = {
  index : (req, res) => {
    res.render('home', {
      title: 'Todo App!'
    });
  }
};
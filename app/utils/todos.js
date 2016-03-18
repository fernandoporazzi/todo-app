module.exports = {
  getCompletedItens: (todos) => {
    var completedItens = todos.filter((item) => {
      return item.is_completed;
    });

    return completedItens;
  },

  getCompletedPercentage: (completedItens, result) => {
    var percents = (completedItens.length * 100) / result.length;
    return Math.round(percents * 100) / 100
  }
};

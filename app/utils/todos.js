module.exports = {
  getCompletedItens: (todos) => {
    var completedItens = todos.filter((item) => {
      return item.is_completed;
    });

    return completedItens;
  },

  getCompletedPercentage: (completedItens, result) => {
    return (completedItens.length * 100) / result.length;
  }
};

var Graph = require('digraphe')

module.exports = {
  createGraph: function(population) {
    var graph = new Graph();
    for (var key in population) {
      for(var i = 0; i < population[key].length -1; i++){
        graph.addNode(population[key][i][0]);
        graph.addNode(population[key][i + 1][0]);
        graph.addEdge(population[key][i][0], population[key][i + 1][0], { weight: population[key][i + 1][1]});
      }
    }
  return graph;
  }
}

var Graph = require('digraphe');
var graphCreator = require('./graphCreator');
var graph = graphCreator.createGraph(population);

module.exports = {
  findNextStep: function(graph, currentExercise){
    var currentNode = graph.nodes[currentExercise];
    var edges = currentNode.edges
    return edges.sort(function(a, b) {return a.weight > b.weight}).shift();
  }
}

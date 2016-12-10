var Graph = require('digraphe');
var graphCreator = require('./graphCreator');

module.exports = {
  findNextStep: function(graph, currentExercise){
    console.log(currentExercise);
    var currentNode = graph.nodes[currentExercise];
    var edges = currentNode.edges
    return edges.sort(function(a, b) {return a.weight > b.weight}).shift();
  }
}

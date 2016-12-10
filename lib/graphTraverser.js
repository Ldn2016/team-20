var Graph = require('digraphe');
var graphCreator = require('./graphCreator');
var population = {1: [['100',  5],['200',  10],['300', 1]],
                  2: [['100',  5],['200',  10],['500', 3]],
                  3: [['100',  5],['200',  10],['400', 5]],
                  4: [['100',  5],['300',  7],['400', 1]]};
var graph = graphCreator.createGraph(population);

module.exports = {
  findNextStep: function(graph, currentExercise){
    var currentNode = graph.nodes[currentExercise];
    var edges = currentNode.edges
    var nextNode = edges.sort(function(a, b) {return a.weight > b.weight}).shift();
    return nextNode.target.id
  }
}

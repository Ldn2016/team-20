var dataMassaging = require('./groupDataByUser')
var creator = require('./graphCreator')
var traverser = require('./graphTraverser')

 var getNextNode = function() {

module.export = {
  getNextNode(history, callback) {

    // DO STUFF TO FIND NEXT NODE
    var paths = dataMassaging.massageData()
    var graph = creator.createGraph(paths)
    console.log(traverser)
    var nextNode = traverser.findNextStep(graph, 'addition_1')
    console.log(nextNode);
  }

getNextNode()

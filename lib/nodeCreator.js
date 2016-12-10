var dataMassaging = require('./groupDataByUser')
var creator = require('./graphCreator')
var traverser = require('./graphTraverser')



  var getNextNode = function() {
    var paths = dataMassaging.massageData()
    var graph = creator.createGraph(paths)
    console.log(traverser)
    var nextNode = traverser.findNextStep(graph, 'addition_1')
    console.log(nextNode);
  }

getNextNode()

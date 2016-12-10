var dataMassaging = require('./groupDataByUser')
var creator = require('./graphCreator')
var traverser = require('./graphTraverser')


module.export = {
  updateWithNextNode: function(historyString) {
    var history = JSON.parse(historyString);
    var nextNode = this._getNextNode();
    history.nodes.push({data: {id: nextNode.target.id}})
    history.edges.push({data: {source: nextNode.source.id, target: nextNode.target.id}})
    return history;
  },
  _getNextNode = function() {
    var paths = dataMassaging.massageData()
    var graph = creator.createGraph(paths)
    var nextNode = traverser.findNextStep(graph, 'addition_1')
  }
}

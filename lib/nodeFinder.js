var userPaths = require('../tmp/userPaths.json')
var creator = require('./graphCreator')
var traverser = require('./graphTraverser')


module.exports = {
  updateWithNextNode: function(historyString) {
    var history = JSON.parse(historyString);
    var lastNode = history.nodes[history.current].data.exid;
    var nextNode = this._getNextNode(lastNode);
    console.log(nextNode);
    history.current += 1;
    history.nodes[history.current].data = {id: history.current, exid: nextNode.source.id, link: 'http://demo.learningequality.org/learn/khan/math/early-math/cc-early-math-counting-topic/cc-early-math-counting/counting-in-order/', completed: false, unlocked: true};
    console.log(history.nodes[history.current]);
    return history;
  },
  _getNextNode: function(lastNode) {
    var graph = creator.createGraph(userPaths, lastNode);
    return traverser.findNextStep(graph, lastNode);
  }
}

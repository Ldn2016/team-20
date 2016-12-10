var userPaths = require('../tmp/userPaths.json')
var creator = require('./graphCreator')
var traverser = require('./graphTraverser')
var eventDetails = require('../tmp/allItemsData.json')


module.exports = {
  updateWithNextNode: function(historyString) {
    var history = JSON.parse(historyString);
    var lastNode = history.nodes[history.current].data.exid;
    var nextNode = this.getNextNode(lastNode);
    var nextLink = nextNode.source.id
    history.current += 1;
    history.nodes[history.current - 1].data.completed = true;
    history.nodes[history.current].data = {id: history.current, exid: nextNode.target.id, link: this.getEventLink(nextNode.source.id), completed: false, unlocked: true};
    return history;
  },
  getNextNode: function(lastNode) {
    var graph = creator.createGraph(userPaths, lastNode);
    return traverser.findNextStep(graph, lastNode);
  },
  getEventLink: function(event_Id) {
    var event = eventDetails.data.find(function(element) {return element.exercise_id === event_Id});
    return 'http://demo.learningequality.org/learn/' + event.path
  }
}

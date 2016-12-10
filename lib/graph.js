'use-strict';
var data = require('./parser4.js')
var json = require('./tmp/data.json')
var graph = {}





function getNextNode(history, newNodeName){
  nextNode = {data: {id: newNodeName}}
  lastNode = history.elements.nodes.reverse()[0];
  history.elements.nodes.push(nextNode);
  history.elements.edges.push({data: {source: lastNode.id, target: newNodeName}})

  return history
}

// console.log(getNextNode(history, 'newestNode'))

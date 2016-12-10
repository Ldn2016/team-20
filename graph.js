'use-strict';
var data = require('./parser4.js')

var graph = {}


function getEdges(){
  //
// output example "AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7"
}

var history = {elements: {
     nodes: [
       { data: { id: 'cat' } },
       { data: { id: 'bird' } },
       { data: { id: 'ladybug' } },
       { data: { id: 'aphid' } },
       { data: { id: 'rose' } },
       { data: { id: 'grasshopper' } },
       { data: { id: 'plant' } },
       { data: { id: 'wheat' } }
     ],
     edges: [
       { data: { source: 'cat', target: 'bird' } },
       { data: { source: 'bird', target: 'ladybug' } },
       { data: { source: 'ladybug', target: 'aphid' } },
       { data: { source: 'aphid', target: 'rose' } },
       { data: { source: 'rose', target: 'plant' } },
       { data: { source: 'plant', target: 'wheat' } },
       { data: { source: 'wheat', target: 'grasshopper' } }
     ]
   }
}


function getNextNode(history, newNodeName){
  nextNode = {data: {id: newNodeName}}
  lastNode = history.elements.nodes.reverse()[0];
  history.elements.nodes.push(nextNode)
  history.elements.edges.push({data: {source: lastNode.id, target: 'newestNode'}})

  return history
}

console.log(getNextNode(history, 'newestNode'))

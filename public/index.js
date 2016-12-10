$(function(){ // on dom ready

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa',
        'curve-style': 'bezier'
      })
    .selector('#0')
      .css({
        'background-image': 'https://farm8.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      })
    .selector('#1')
      .css({
        'background-image': 'https://farm2.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
      })
    .selector('#2')
      .css({
        'background-image': 'https://farm4.staticflickr.com/3063/2751740612_af11fb090b_b.jpg'
      })
  .selector('#3')
      .css({
        'background-image': 'https://farm9.staticflickr.com/8316/8003798443_32d01257c8_b.jpg'
      })
  .selector('#4')
      .css({
        'background-image': 'https://farm6.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg'
      })
  .selector('#5')
      .css({
        'background-image': 'https://farm7.staticflickr.com/6098/6224655456_f4c3c98589_b.jpg'
      })
  .selector('#6')
      .css({
        'background-image': 'https://farm1.staticflickr.com/231/524893064_f49a4d1d10_z.jpg'
      })
  .selector('#7')
      .css({
        'background-image': 'https://farm3.staticflickr.com/2660/3715569167_7e978e8319_b.jpg'
      }),

  elements: {
    nodes: [
      { data: { id: '0' , link: "http://demo.learningequality.org/learn/khan/math/early-math/cc-early-math-counting-topic/cc-early-math-counting/counting-with-small-numbers/" } },
      { data: { id: '1' , link: "http://www.google.com" } },
      { data: { id: '2' , link: "https://github.com" } },
      { data: { id: '3' , link: "string0" } },
      { data: { id: '4' , link: "string0" } },
      { data: { id: '5' , link: "string0" } },
      { data: { id: '6' , link: "string0" } },
      { data: { id: '7' , link: "string0" } }
    ],
    edges: [
      { data: { source: '0', target: '1' } },
      { data: { source: '1', target: '2' } },
      { data: { source: '2', target: '3' } },
      { data: { source: '3', target: '4' } },
      { data: { source: '4', target: '5' } },
      { data: { source: '5', target: '6' } },
      { data: { source: '6', target: '7' } }
    ]
  },

  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function(){
  var nodeData = this._private.data;
  document.getElementById('frame').src = nodeData.link;
}); // on tap

}); // on dom ready

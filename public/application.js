$(function(){ // on dom ready

  var cy;

  $.get("http://localhost:3000/initial", function(data) {
    generateCytoscape(data, cyTap);
  });


  function generateCytoscape(data, cb) {
    cy = cytoscape({
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

      elements: data,
      layout: {
        name: 'breadthfirst',
        directed: true,
        padding: 10
      }
    });
    cb();
  }
  // cy init
  function cyTap() {
    cy.on('tap', 'node', function(){
      var nodeData = this._private.data;
      if (nodeData.unlocked) {
        document.getElementById('frame').src = nodeData.link;
      }
    });
  }
 // on tap

}); // on dom ready

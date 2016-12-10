const parser = require('./parser.js');

// var data = parser.loadFromCSVFile("./data/allItems.csv", 'allItemsData')
var data = require('../tmp/allItemsData.json').data

function getUrls(data){
  dict = {}
  for (var i = 0; i < data.length; i++) {
    dict[data[i].exercise_id] = data[i].path
}
  return dict
}

console.log(getUrls(data));

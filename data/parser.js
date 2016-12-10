var Converter = require("csvtojson").Converter;
var fs = require('fs');

module.exports = {
  loadFromCSVFile: function(filename, tempfilename){
    var converter = new Converter({});
    converter.fromFile(filename,function(err,result){
      console.log(result)
      console.log(err);
      string = JSON.stringify({data: result});
      fs.writeFile("./tmp/"+tempfilename+".json", string, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
    });

  }

// loadFromCSVFile("./data/exerciseLog.csv", 'data')

// loadFromCSVFile("./data/allItems.csv", 'items_data')
};

  loadFromCSVFile();

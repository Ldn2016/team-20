var Converter = require("csvtojson").Converter;
var fs = require('fs');

// module.exports = {
  loadFromCSVFile= function(){
    var converter = new Converter({});
    converter.fromFile("./exerciseLog.csv",function(err,result){
      string = JSON.stringify({data: result});
      fs.writeFile("./tmp/data.json", string, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
    });
  };

  loadFromCSVFile();

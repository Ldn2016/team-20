//Converter Class
var Converter = require("csvtojson").Converter;
var fs = require('fs');

var converter = new Converter({});
converter.fromFile("./exerciseLog.csv",function(err,result){
  fs.writeFile("./tmp/data.json", result, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
});

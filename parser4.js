//Converter Class
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./exerciseLog.csv",function(err,result){
  console.log(result)
});

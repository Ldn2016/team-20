// var data = require('./lib/parser.js')
// var csvData = data.loadFromCSVFile()
var data = require('../tmp/data.json').data //this is possible if already got this file otherwise need to run above 2 lines first

module.exports = {

  massageData: function(){
    var data = this.groupDataByUser()
    data = this.sortByTimeStamps(data)
    return this.buildUserPaths(data)
  },

  groupDataByUser: function (){

    var groups = {};

    for(var i = 0; i < data.length; i++) {
        var item = data[i];

        if(!groups[item.user_id]) {
            groups[item.user_id] = [];
        }

        groups[item.user_id].push({
            completion_timestamp: item.completion_timestamp,
            attempts: item.attempts,
            struggling: item.struggling,
            exercise_id: item.exercise_id,
            streak_progress: item.streak_progress,
            attempts_before_completion: item.attempts_before_completion
        });
    }

    var dataGroupedByUser = [];

    for(var x in groups) {
        if(Object.prototype.hasOwnProperty.call(groups, x)) {
            var obj = {};
            obj[x] = groups[x];
            dataGroupedByUser.push(obj);
        }
    }
    return dataGroupedByUser
  },

  sortByTimeStamps: function (dataGroupedByUser){
    return dataGroupedByUser.sort(function(a, b){
          var aD = new Date(a.completion_timestamp).getTime(), bD = new Date(b.completion_timestamp).getTime();
          return ((aD < bD) ? -1 : ((aD > bD) ? 1 : 0));
    });
  },

  buildUserPaths: function (dataGroupedByUser){
    userPaths = {} //{userid9: [[ex_id, score],[],[]], userid10: [[],[]]}
    dataGroupedByUser.forEach(function(user){
      for (item in user){
        userPaths[item] = []
        for (subitem in user[item]) {
          score = user[item][subitem]["attempts_before_completion"]/user[item][subitem]["attempts"] //numbers are weird
          ex_id = user[item][subitem]["exercise_id"]
          userPaths[item].push([ex_id, score])
        }
      }

    })
    return userPaths
  }


} //end of module.export

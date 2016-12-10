// var data = require('./parser4.js')
// var csvData = data.loadFromCSVFile()


var data = require('./tmp/data.json').data //this is possible if already got this file otherwise need to run above 2 lines first
//gets history of a user from csv, output is 'result' object

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

var result = [];

for(var x in groups) {
    if(Object.prototype.hasOwnProperty.call(groups, x)) {
        var obj = {};
        obj[x] = groups[x];
        result.push(obj);
    }
}

console.log(result[0])

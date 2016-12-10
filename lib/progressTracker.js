var dataMassager = require('./groupDataByUser')

var userData = dataMassager.groupDataByUser()

userData = dataMassager.sortByTimeStamps(userData)

progressTracker = function (userData){
  data = {"timestamps": [], "score": []}
  userData.forEach(function(user){
    for (item in user){
      for (subitem in user[item]) {
        // console.log(user[item][subitem]);
        var timestamp = user[item][subitem]["completion_timestamp"]
        data["timestamps"].push(timestamp)
        var score = user[item][subitem]["attempts_before_completion"]/user[item][subitem]["attempts"] //numbers are weird
        data["score"].push(score)
      }
    }
  })
  var arrayOne = data["timestamps"]
  var arrayTwo = data["score"]
  var result = arrayOne.map(function (e, i) {
      return [e, arrayTwo[i]];
  });
  return result
}






console.log(progressTracker(userData))
// progressTracker(userData)

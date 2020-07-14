var connection = require("../config/connection.js");
// function threeQuestionMarks(number) {
//     var arr = [];
  
//     for (var i = 0; i < number; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
    });
    },
    insertOne: function(whatToInsert, cb) {
        var queryString = "INSERT INTO burger VALUES ??";
        connection.query(queryString,[whatToInsert], function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    }

}
module.exports = orm;
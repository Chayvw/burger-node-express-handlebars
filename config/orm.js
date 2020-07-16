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
      var queryString = "SELECT * FROM " + tableInput + ';' ;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
    });
    },
    insertOne: function(tableInput, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableInput + " ("+ cols.toString() + ") VALUES ( "  + '?,?' + ")" ;
        connection.query(queryString, vals , function(err, result) {
            console.log("almost");
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
        updateOne: function (updateBurger) {
            var queryString = "UPDATE burger SET devoured = true WHERE ?? ";
            connection.query(queryString,[updateBurger], function(err, result) {
                if (err) {
                  throw err;
                }
               console.lo(result);
            }

            );
        }
        

}
module.exports = orm;
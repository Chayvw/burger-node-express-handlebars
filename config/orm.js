var connection = require("../config/connection.js");

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
        updateOne: function (tableInput, cols, condition, cb) {
            var queryString = "UPDATE " + tableInput + " SET " + cols + " WHERE " + condition;
            connection.query(queryString, function(err, result) {
                if (err) {
                  throw err;
                }
               console.log(result);
               cb(result)
            }

            );
        }
        

}
module.exports = orm;
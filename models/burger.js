var orm = require("../config/orm.js");

var burger
  = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  //
  insertOne: function (name, cb) {
    orm.insertOne("burgers", ["name", "devoured"], [name, false], cb, function (res) {
      console.log("I got here");
      cb(res);
    });
  },

  //   // The variables cols and vals are arrays.
  //   create: function(cols, vals, cb) {
  //     orm.create("burger", cols, vals, function(res) {
  //       cb(res);
  //     });
  //   },

  updateOne: function (tableInput, cols, condition, cb) {
    var queryString = "UPDATE " + tableInput + " SET " + cols + " WHERE " + condition;
    console.log('queryString2', queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result)
    });
  }
  //   update: function(condition, cb) {
  //     orm.updateOne("burgers", "devoured = true", condition, cb, function(res) {
  //       cb(res);
  //     });
  // }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  //
  insertOne:function (cols, vals, cb) {
    orm.insertOne("burger",cols, vals, cb, function(res) {
        cb(res);
      });
    },
  
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burger", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burger", objColVals, condition, function(res) {
//       cb(res);
//     });
// }

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
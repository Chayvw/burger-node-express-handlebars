var orm = require("../config/orm.js");

var burger
 = {
    selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //
  insertOne: function (name, cb) {
    orm.insertOne( "burgers ", ["name", "devoured"], [name , false ], cb, function(res) {
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
  update: function(condition, cb) {
    orm.updateOne("burger", condition, function(res) {
      cb(res);
    });
}

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
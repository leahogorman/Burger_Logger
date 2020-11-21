const orm = require("../config/orm.js");

const burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(burger_name, vals, cb) {
    orm.insertOne("burgers", burger_name, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, id, cb) {
    orm.updateOne("burgers", devoured, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete("burgers", id, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;

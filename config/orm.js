const connection = require("../config/connection.js");

// Function to print question marks for the number of values being entered into the database
function printQuestionMarks(num) {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function
function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
// Gets all of the entries from the database
  selectAll: function(burgers, cb) {
    let queryString = "SELECT * FROM " + burgers + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Adds one to database
  insertOne: function(burgers, burger_name, vals, cb) {
    let queryString = "INSERT INTO " + burgers;

    queryString += " (";
    queryString += burger_name.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Updates 1 in the database
  updateOne: function(burgers, devoured, id, cb) {
    let queryString = "UPDATE " + burgers;

    queryString += " SET ";
    queryString += objToSql(devoured);
    queryString += " WHERE ";
    queryString += id;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // removes 1 from database
  delete: function(table, id, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += id;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;

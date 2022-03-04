const { query } = require("express");
const connection = require("../config/connection");

printQuestionMarks = (num) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

const orm = {

  recieve: function (cb) {
    // const nameName = table.toString();

    let queryString = "SELECT ";

    queryString += "*"

    queryString += " FROM todos";
    // queryString += table[0].toString();
  

    // queryString += printQuestionMarks(table.length);

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(result);
    });
  },

  create: function (table, cols, vals, cb) {
    console.log(vals);

    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES ";
    queryString += "(";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: (vals, cb) => {

    const desiredRow = vals.toString();

    let queryString = "DELETE from todos where id = ";

    queryString += "?";

    console.log(queryString);

    connection.query(queryString, desiredRow,(err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
      console.log(result);
    });






  }



};

// export the orm object for the model
module.exports = orm;

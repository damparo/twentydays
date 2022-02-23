const connection = require('../config/connection');

printQuestionMarks = (num) => {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


const orm = {

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
    
        connection.query(queryString, vals,(err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

// export the orm object for the model
module.exports = orm;

const orm = require("../config/orm");

const twentyDays = {
  recieve: function (cb) {
    orm.recieve(function (result) {
      cb(result);
    });
  },
  create: (cols, vals, cb) => {
    orm.create("todos", cols, vals, (res) => {
      cb(res);
    });
  },

  delete: (vals, cb) =>{
    orm.delete(vals, cb, (res)=>{
      cb(res);
    });
  }


};

// Export the database function to the controller
module.exports = twentyDays;

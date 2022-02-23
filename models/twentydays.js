const orm = require('../config/orm');

const twentyDays = {

    create:  (cols, vals, cb) => {
        orm.create("todo", cols, vals, (res) => {
          cb(res);
        });
      }

}


// Export the database function to the controller
module.exports = twentyDays;
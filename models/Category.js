const db = require("../db.config");

const Category = {
  all: (callback) => {
    const query = `SELECT * FROM category`;
    db.all(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM category WHERE cat_id = ?`;
		db.get(query, id, callback);
  },
  // here make more queries
};

module.exports = Category;

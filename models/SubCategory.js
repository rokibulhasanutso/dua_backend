const db = require("../db.config");

const SubCategory = {
  all: (callback) => {
    const query = `SELECT * FROM sub_category`;
    db.all(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM sub_category WHERE subcat_id = ?`;
		db.get(query, id, callback);
  },
  filterByCategoryId: (id, callback) => {
    const query = `SELECT * FROM sub_category WHERE cat_id = ${id}`;
		db.all(query, callback);
  },
  // here make more queries
};

module.exports = SubCategory;
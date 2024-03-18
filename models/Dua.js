const db = require("../db.config");

const Dua = {
  all: (callback) => {
    const query = `SELECT * FROM dua`;
    db.all(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM dua WHERE dua_id = ?`;
    db.get(query, id, callback);
  },
  filterBySubCategoryId: (id, callback) => {
    const query = `SELECT * FROM dua WHERE subcat_id = ?`;
    db.all(query, id, callback);
  },
  filterByCategoryId: (id, callback) => {
    const query = `SELECT * FROM dua WHERE cat_id = ${id}`;
    db.all(query, callback);
  },
  // here make more queries
};

module.exports = Dua;

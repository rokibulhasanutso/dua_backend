const Category = require('../models/Category')

exports.allCategory = (req, res) => {
  Category.all((err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      res.status(200).json(data);
    }
  });
};

// get category by id
exports.getCategoryById = (req, res) => {
  const catId = req.params.catId;

  Category.findById(catId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json([data]);
      } else {
        res.status(404).json({ status: "fail", message: "Category not found" });
      }
    }
  });
};
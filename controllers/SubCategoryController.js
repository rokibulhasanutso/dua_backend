const SubCategory = require('../models/SubCategory')

exports.allSubCategory = (req, res) => {
  SubCategory.all((err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      res.status(200).json(data);
    }
  });
};

// get category by id
exports.getSubCategoryById = (req, res) => {
  const subcatId = req.params.subcatId;

  SubCategory.findById(subcatId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json([data]);
      } else {
        res.status(404).json({ status: "fail", message: "Sub Category not found" });
      }
    }
  });
};

// get sub category filter by category id
exports.getFilterSubCategoryByCategoryId = (req, res) => {
  const catId = req.params.catId;

  SubCategory.filterByCategoryId(catId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ status: "fail", message: "Sub Category not found" });
      }
    }
  });
};

const Dua = require("../models/Dua");

exports.allDua = (req, res) => {
  Dua.all((err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      res.status(200).json(data);
    }
  });
};

// get dua by id
exports.getDuaById = (req, res) => {
  const duaId = req.params.duaId;

  Dua.findById(duaId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json([data]);
      } else {
        res
          .status(404)
          .json({ status: "fail", message: "Sub Category not found" });
      }
    }
  });
};

// get dua filter by sub category
exports.getDuaFilterBySubCategoryId = (req, res) => {
  const subcatId = req.params.subcatId;

  Dua.filterBySubCategoryId(subcatId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json(data);
      } else {
        res
          .status(404)
          .json({ status: "fail", message: "Sub Category not found" });
      }
    }
  });
};

// get dua filter by category id
exports.getDuaFilterByCategoryId = (req, res) => {
  const catId = req.params.catId;

  Dua.filterByCategoryId(catId, (err, data) => {
    if (err) {
      res.status(500).json({ status: "fail", message: err });
    } else {
      if (data) {
        res.status(200).json(data);
      } else {
        res
          .status(404)
          .json({ status: "fail", message: "Sub Category not found" });
      }
    }
  });
};

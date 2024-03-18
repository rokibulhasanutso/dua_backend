const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const SubCategoryController = require("../controllers/SubCategoryController");
const DuaController = require("../controllers/DuaController");

// categories route
router.get("/cat", CategoryController.allCategory);
router.get("/cat/:catId", CategoryController.getCategoryById);

// sub categories route
router.get("/subcat", SubCategoryController.allSubCategory);
router.get("/subcat/:subcatId", SubCategoryController.getSubCategoryById);
router.get("/subcat/cat/:catId", SubCategoryController.getFilterSubCategoryByCategoryId);

// dua route
router.get("/dua", DuaController.allDua);
router.get("/dua/:duaId", DuaController.getDuaById);
router.get("/dua/cat/:catId", DuaController.getDuaFilterByCategoryId);
router.get("/dua/subcat/:subcatId", DuaController.getDuaFilterBySubCategoryId);

module.exports = router;
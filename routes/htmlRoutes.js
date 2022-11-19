const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

//display booked class info
router.get("/class-details", checkAuth, controllers.classes.classDetails)

//display all class info
//router.get("/admin/create-post", checkAuth, controllers.admin.createPost)
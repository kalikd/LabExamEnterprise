const express = require("express");
const blogController = require("../controllers/blogControllers");
const authenticationMiddleware = require("../middleware/authenticationMiddlewares");

const blogRoutes = express();
blogRoutes.get("/register", blogController.register);
blogRoutes.get("/list", blogController.list);
module.exports = blogRoutes;

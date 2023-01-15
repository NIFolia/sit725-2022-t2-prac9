const express = require("express");


const itemRoutes = require("./itemRoutes");
const userProfilePrivateRoutes = require("./userProfilePrivateRoutes");

const router = express.Router();


router.use("/item", itemRoutes);
router.use("/userProfilePrivate", userProfilePrivateRoutes);

module.exports = router;

// refer to https://medium.com/@cmpbilge/routing-with-nodejs-express-4ce79752e146 for how this routing system works.


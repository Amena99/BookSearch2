const router = require("express").Router();
const googleRoute = require("./apiRoutes");

// Book routes
router.use("/", googleRoute)


module.exports = router;

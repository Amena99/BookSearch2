const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const googleRoute = require("./google");


console.log("Inside routes Index.js");
// API Routes
router.use("/api", apiRoutes);
router.use("/google", googleRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

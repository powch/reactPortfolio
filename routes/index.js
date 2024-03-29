const path = require("path");
const router = require("express").Router();

// If no API routes are hit, send the React app
router.use((req, res) => {
  if (req.path.endsWith("bundle.js")) {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.bundle.js"));
  } else {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  }
});

module.exports = router;

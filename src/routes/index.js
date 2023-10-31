const router = require("express").Router();

router.use("/admin", require("./dashboard"));

module.exports = router;

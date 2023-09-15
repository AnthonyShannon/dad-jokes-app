const router = require("express").Router();
const jokesRoutes = require("./jokes");

router.use("/jokes", jokesRoutes);

module.exports = router;
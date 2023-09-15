const router = require("express").Router();
const jokeController = require("../../controllers/jokeController");

// Matches with "/api/jokes"
router.route("/")
    .get(jokeController.findAll)

// Matches with "/api/jokes/:id"
router.route("/:id")
    .get(jokeController.findById)
    .put(jokeController.update)
    .delete(jokeController.remove);

module.exports = router;
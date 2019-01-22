const express = require("express");
const router = express.Router();
const userControler = require("../controllers/UserControler");

router
  .route("/")
  .get(userControler.getUsers)
  .post(userControler.createUser);

router.get("/:id", userControler.getUserById);

module.exports = router;

const express = require("express");
const router = express.Router();
const userControler = require("../controllers/UserControler");

router.get("/", userControler.getUsers);

router.get("/:id", userControler.getUserById);

module.exports = router;

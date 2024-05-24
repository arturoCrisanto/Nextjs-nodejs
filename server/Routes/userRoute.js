const express = require("express");
const userController = require("./Controllers/userController");

const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

// Add routes for Update and Delete as needed

module.exports = { router };

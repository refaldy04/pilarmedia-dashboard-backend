const dashboard = require("express").Router();
const usersController = require("../controllers/dashboard");

dashboard.get("/salespersons", usersController.getAllUsers);
dashboard.get("/salesByDate/:date", usersController.getSalesDataByDate);

module.exports = dashboard;

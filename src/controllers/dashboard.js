const dashboardModel = require("../models/dashboard");
const response = require("../helpers/standardResponse");

exports.getAllUsers = (req, res) => {
  dashboardModel.getAllUsers((err, result) => {
    return response(res, "List all users", result);
  });
};

exports.getSalesDataByDate = (req, res) => {
  const { date } = req.params;
  dashboardModel.getSalesDataByDate(date, (err, result) => {
    return response(res, "List Sales", result);
  });
};

const db = require("../helpers/db");

exports.getAllUsers = (cb) => {
  db.query(`SELECT * FROM salespersons`, (err, res) => {
    cb(err, res.rows);
  });
};

exports.getSalesDataByDate = (date, cb) => {
  if (date !== "day" && date !== "month" && date !== "year") {
    throw new Error('Invalid date parameter. Use "day", "month", or "year".');
  }

  try {
    let query = `
        SELECT
          sp."SalesPersonName" AS userName,
          s."SalesAmount" AS totalAmount,
          TO_CHAR("SalesDate", 'YYYY-MM-DD') AS date
        FROM "sales" s
        JOIN "salespersons" sp ON s."SalesPersonID" = "SalesPersonID"
      `;

    if (date === "day") {
      query += `
          WHERE "SalesDate" >= NOW() - INTERVAL '1 day'
          AND "SalesDate" < NOW();
        `;
    } else if (date === "month") {
      query += `
          WHERE "SalesDate" >= NOW() - INTERVAL '1 month'
          AND "SalesDate" < NOW();
        `;
    } else if (date === "year") {
      query += `
          WHERE "SalesDate" >= NOW() - INTERVAL '1 year'
          AND "SalesDate" < NOW();
        `;
    }

    db.query(query, (err, res) => {
      cb(err, res.rows);
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve sales data.");
  }
};

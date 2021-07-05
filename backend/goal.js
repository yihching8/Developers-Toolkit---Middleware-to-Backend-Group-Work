const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/goals/all", (req, res) => {
  let x = "select * from goals";
  q(x, req, res).then((results) => {
    res.status(200).send(results);
  });
});

function q(query, req, res) {
  return new Promise((resolve, reject) => {
    database.connection.query(query, (err, result) => {
      if (err) {
        console.error(error);
        res.status(500).send("Server Error:\n" + error);
        reject(err);
      }
      resolve(result);
    });
  });
}

router.get("/goals/by-id", (req, res) => {
  let id = req.query.goal_id; //get id from request
  let x = `
    select * from goals
    where id = ${id}
    `;
  database.connection.query(x, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server Error:\n" + error);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post("/goals/add", (req, res) => {
  //get id from request BODY
  let goal = req.body.description;
  let balance = req.body.balance;
  let x = `
    insert into products (goal, balance)
    values ('${goal}', '${balance}')
    `;
  database.connection.query(x, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server Error:\n" + error);
    } else {
      res.status(200).send("New product created successfully!");
    }
  });
});

router.put("/goals/update/by-id", (req, res) => {
  //get id from request BODY
  let id = req.body.goal_id;
  let goal = req.body.new_description;
  let balance = req.body.new_balance;
  let x = `
    update goals
    set goal = '${goal}',
    balance = '${balance}'
    where id = ${id}
    `;
  database.connection.query(x, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server Error:\n" + error);
    } else {
      res.status(200).send("Updated Successfully!");
    }
  });
});

router.delete("/goals/delete/by-id", (req, res) => {
  let id = req.query.goal_id; //get id from request
  let x = `
    delete from goals
    where id = ${id}
    `;
  database.connection.query(x, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server Error:\n" + error);
    } else {
      res.status(200).send("Deleted Successfully!");
    }
  });
});

function q(query, req, res) {
  return new Promise((resolve, reject) => {
    database.connection.query(query, (err, result) => {
      if (err) {
        console.error(error);
        res.status(500).send("Server Error:\n" + error);
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = {
  router,
};
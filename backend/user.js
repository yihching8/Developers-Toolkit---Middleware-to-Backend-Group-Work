const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/users/all", (req, res) => {
  let x = "select * from users";

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

router.get("/users/by-id", (req, res) => {
  let id = req.query.user_id; //get id from request
  let x = `
    select * from users
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

router.post("/users/add", (req, res) => {
  //get id from request BODY
  let name = req.body.name;
  let mobile = req.body.mobile;
  let x = `
    insert into users (name, mobile)
    values ('${name}', '${mobile}')
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

router.put("/users/update/by-id", (req, res) => {
  //get id from request BODY
  let id = req.body.user_id;
  let name = req.body.new_name;
  let mobile = req.body.new_mobile;
  let x = `
    update users
    set name = '${name}',
    mobile = '${mobile}'
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

router.delete("/users/delete/by-id", (req, res) => {
  let id = req.query.user_id; //get id from request
  let x = `
    delete from users
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
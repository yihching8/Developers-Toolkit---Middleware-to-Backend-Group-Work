const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/products/all", (req, res) => {
  let x = "select * from products";

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

router.get("/products/by-id", (req, res) => {
  let id = req.query.id; //get id from request
  let x = `
    select * from products
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

router.post("/products/add", (req, res) => {
  //get id from request BODY
  let name = req.body.name;
  let price = req.body.price;
  let x = `
    insert into products (name, market_price)
    values ('${name}', '${price}')
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

router.put("/products/update/by-id", (req, res) => {
  //get id from request BODY
  let id = req.body.id;
  let name = req.body.new_name;
  let price = req.body.new_price;
  let x = `
    update products
    set name = '${name}',
    market_price = '${price}'
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

router.delete("/products/delete/by-id", (req, res) => {
  let id = req.query.id; //get id from request
  let x = `
    delete from products
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
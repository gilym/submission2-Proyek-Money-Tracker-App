const express = require('express')
const reciperouter = express.Router()
const Multer = require('multer')
const imgUpload = require('../modules/imgUpload')
const connection = require('../db');

// reciperouter for /recipes endpoint
reciperouter.get("/recipes", (req, res) => {
    const query = "SELECT * FROM recipes";
    connection.query(query, (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage});
        } else {
            res.json(rows);
        }
    });
});

// reciperouter for /recipes/:id endpoint
reciperouter.get("/recipes/:id", (req, res) => {
    const id = req.params.id;

    const query = "SELECT * FROM recipes WHERE id = ?";
    connection.query(query, [id], (err, rows, field) => {
        if(err) {
            res.status(500).send({message: err.sqlMessage});
        } else {
            res.json(rows);
        }
    });
});

// reciperouter for /recipes/:id endpoint
reciperouter.delete("/recipes/:id", (req, res) => {
    const id = req.params.id;

    const query = "DELETE FROM recipes WHERE id = ?";
    connection.query(query, [id], (err, rows, field) => {
        if (err) {
            res.status(500).send({message: err.sqlMessage});
        } else {
            res.send({message: "Delete successful"});
        }
    });
});



module.exports = reciperouter

const express = require('express')
const Route = express.Router();
const userModel = require("../schemas/user.js");

//funcion para traer todos los elementos de mi API
Route.get("/", (req, res) => {
    userModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para traer un elemento por id de mi API
Route.get("/:id", (req, res) => {
    userModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para enviar un elemento a mi API
Route.post("/create", (req, res) => {
    console.log("El body es: ", req.body);

    const user = new userModel(req.body);

    user
        .save()
        .then((document) => {
            res.json({ status: 200, data: document });
        })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

//funcion para borrar un elemento por id de mi API por id
Route.delete("/:id", (req, res) => {
    userModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para modificar un elemento de mi API por id
Route.put("/:id", (req, res) => {
    userModel.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        {},
        (error, data) => {
            if (error) {
                res.json({ status: 500, data: error });
            }

            res.json({ status: 200, data });
        }
    );
}); 

module.exports = Route
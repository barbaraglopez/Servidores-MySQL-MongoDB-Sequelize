const express = require("express");
const rolesRoute = express.Router();
const rolesModel = require("../schemas/roles.js");

//funcion para traer todos los elementos de mi API
rolesRoute.get("/", (req, res) => {
    rolesModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para traer un elemento por id de mi API
rolesRoute.get("/:id", (req, res) => {
    rolesModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para enviar un elemento a mi API
rolesRoute.post("/create", (req, res) => {
    console.log("El body es: ", req.body);

    const roles = new rolesModel(req.body);

    roles
        .save()
        .then((document) => {
            res.json({ status: 200, data: document });
        })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

//funcion para borrar un elemento por id de mi API por id
rolesRoute.delete("/:id", (req, res) => {
    rolesModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para modificar un elemento de mi API por id
rolesRoute.put("/:id", (req, res) => {
    rolesModel.findOneAndUpdate(
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

module.exports = rolesRoute;

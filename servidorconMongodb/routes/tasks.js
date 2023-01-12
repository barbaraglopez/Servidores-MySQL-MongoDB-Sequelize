const express = require("express");
const tasksRoute = express.Router();
const tasksModel = require("../schemas/tasks.js");


//funcion para traer todos los elementos de mi API
tasksRoute.get("/", (req, res) => {
    tasksModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para traer un elemento por id de mi API
tasksRoute.get("/:id", (req, res) => {
    tasksModel.find({ id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para enviar un elemento a mi API
tasksRoute.post("/create", (req, res) => {
    console.log("El body es: ", req.body);

    const tasks = new tasksModel(req.body);

    tasks
        .save()
        .then((document) => {
            res.json({ status: 200, data: document });
        })
        .catch((error) => {
            res.json({ status: 500, data: error });
        });
});

//funcion para borrar un elemento por id de mi API por id
tasksRoute.delete("/:id", (req, res) => {
    tasksModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

//funcion para modificar un elemento de mi API por id
tasksRoute.put("/:id", (req, res) => {
    tasksModel.findOneAndUpdate(
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

module.exports = tasksRoute
const express = require("express");
const application = express();
const userRoute  = require("./routes/user.js");
const tasksRoute = require("./routes/tasks.js");
const rolesRoute = require("./routes/roles.js")
const mongoose = require("mongoose");
const errorControl = require("./middlewares/error-control.js");
const autenticate = require("./middlewares/authentication");

application.use(errorControl);
application.use(express.json());

/* application.use("/", (req,res) =>{
    res.send("Hola express")
}) */
application.use("/user", autenticate, userRoute);
application.use("/tasks", tasksRoute);
application.use("/roles", rolesRoute);

mongoose.connect("mongodb://127.0.0.1:27017/clase-10", (error)=>{
    if(error){
        console.log("Hubo un error", error)
    }else{
        console.log("conexion exitosa con Mongoose")
    }
});

application.listen(3000, (error) => {
    if (error) {
        console.log("Hubo un error", error);
    }

    console.log("Servidor andando!");
});


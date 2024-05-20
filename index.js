const express = require("express");
const cors = require("cors");
require('dotenv').config();
require('express-async-errors');

const routes = require("./src/routes");
const AppError  = require("./src/utils/appError");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = 3001;



app.use((err, req, res, next) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            errorMessage: err.message,
            status: "error"
        })
    }

    return res.status(400).json({
        errorMessage: "ERRO NO SERVIDOR, TENTE NOVAMENTE",
        status: "error"
    })

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

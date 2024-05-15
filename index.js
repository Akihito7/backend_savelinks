const express = require("express");
const cors = require("cors");
require('dotenv').config();



const routes = require("./src/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
const cors = require ("cors")
const dotenv = require("dotenv")

dotenv.config();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())


// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
const AllMyStockRoutes = require("./routes/stock.routes")
AllMyUserRoutes(app);
AllMyStockRoutes(app);

app.listen(8000, () => console.log(`The server is running and listening on ${process.env.DB_PORT}`));

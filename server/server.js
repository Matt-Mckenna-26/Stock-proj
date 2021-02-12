const express = require("express");
const app = express();
const cors = require ("cors")
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser');
const mongoose =require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 8000


// This will fire our mongoose.connect statement to initialize our database connection
mongoose.connect(process.env.MONGODB_URI || process.env.DB_NAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the  database`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(cookieParser());

if (process.env.NODE_ENV ==="production") {
    
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "../client", "build", "index.html"));
    });

}


// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
const AllMyStockRoutes = require("./routes/stock.routes")
AllMyUserRoutes(app);
AllMyStockRoutes(app);


app.listen(PORT, () => console.log(`The server is running and listening on ${process.env.PORT}`));

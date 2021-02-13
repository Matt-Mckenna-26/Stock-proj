const express = require("express");
const app = express();
const cors = require ("cors")
const dotenv = require("dotenv")
const cookieParser = require('cookie-parser');
const mongoose =require("mongoose");


dotenv.config();
const port = process.env.PORT || 8000


app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin:true}));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname,  "build", "index.html"));
	});
}

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
const AllMyStockRoutes = require("./routes/stock.routes")
AllMyUserRoutes(app);
AllMyStockRoutes(app);

const connection = 'mongodb+srv://martimus:martimuspass@cluster0.ps40v.mongodb.net/cluster0?retryWrites=true&w=majority'
// This will fire our mongoose.connect statement to initialize our database connection
mongoose.connect(process.env.MONGODB_URI || connection, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log(`Established a connection to the  database`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));


app.listen(port, () => console.log(`The server is running and listening`));

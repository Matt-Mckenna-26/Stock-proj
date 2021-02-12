const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGODB_URI || process.env.DB_NAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to the  database`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
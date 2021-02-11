const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserTickersTrackedSchema = mongoose.Schema({
	ticker:{
		type: String,
		minlength: [1, 'ticker must be at least 1 characters'],
		maxlength: [4, 'ticker cannot exceed 4 characters']
	},
	},{timestamps:true});



const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"]
	},
	email : {
		type: String ,
		required: [true, 'Email address is required']
	},
	password : {
		type: String ,
		required : [true, "Password is required"],
		minlength: [8, "Password must be at least 8 characters"]
	},
	tickersTracked : [UserTickersTrackedSchema] 
	},{timestamps: true}
);


UserSchema.virtual("confirmPassword")
	.get(() => this._confirmPassword)
	.set(value => (this._confirmPassword = value));

UserSchema.pre("validate", function(next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate("confirmPassword", "Password must match confirm password!")
	}
	next();
});

UserSchema.pre("save" , function(next) {
	bcrypt
	.hash(this.password, 10)
	.then(hash => {
		this.password = hash;
		console.log('the password was hashed')
		next();
	})
});



const User = mongoose.model("User", UserSchema);


module.exports = User;
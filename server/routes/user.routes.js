const UserController = require("../controllers/user.controller");

// this line has imported the authenticate method from jwt.config
const {authenticate} = require("../config/jwt.config")

module.exports = app => {
  //these routes do not require the authentication method found in jwt.config 
  app.post("/api/register" , UserController.register);
  app.post("/api/login" , UserController.login);
  app.post("/api/logout" , UserController.LogOut);


  //routes that require auth include the *authenticate* method prior to calling the controller next
  app.get("/api/users/",authenticate, UserController.findAllUsers);
  app.get("/api/users/loggedin", authenticate, UserController.getLoggedInUser);
  app.put("/api/addStockToWatchList/:userId", authenticate, UserController.addToUserWatchList);
  app.put("/api/removeStockWatchList/:userId", authenticate, UserController.removeTickerFromWatchList);
};
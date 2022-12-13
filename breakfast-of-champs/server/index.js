const express = require("express");
const cors = require("cors");
const server = express();
const db = require("./util/database");
const {Base, Extra, Favorite} = require("./util/models");
const seed = require("./seed/seed");
const {getOptions} = require("./controllers/drinksController");

//middleware
server.use(express.json());
server.use(cors());

Base.hasMany(Favorite);
Favorite.belongsTo(Base);
Extra.hasMany(Favorite);
Favorite.belongsTo(Extra);

server.get("/api/getOptions", getOptions);

// db
//     .sync({force:true})
//     .then(() => seed())


server.listen(4000, () => console.log("running on PORT 4000"));
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;
const Set = db.set;
db.sequelize.sync({force:false}).then(() => { //zmienić na true jeśli pierwszy raz się uruchamia
  console.log('Drop and Resync Db');
  //initial()
 
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/set.routes')(app);
require('./app/routes/image.upload.routes')(app);
require('./app/routes/class.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "teacher"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

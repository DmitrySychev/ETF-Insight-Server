// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const etfRouter = require('./routes/etf.routes');
// const app = express()
// const apiPort = 8000
// const dbConfig = require('./config/db.config');

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// const db = require('./models');
// const Role = db.role;

// db.mongoose
// .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("Successfully connected to MongoDB.");
//   initial();
// })
// .catch(err => {
//   console.error("Connection error", err);
//   process.exit();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use('/api', etfRouter)
// require('./routes/auth.routes')(app);
// // require('./routes/user.routes')(app);

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`)) 


// function initial() {
// Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//     new Role({
//         name: "user"
//     }).save(err => {
//         if (err) {
//         console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//     });

//     new Role({
//         name: "moderator"
//     }).save(err => {
//         if (err) {
//         console.log("error", err);
//         }

//         console.log("added 'moderator' to roles collection");
//     });

//     new Role({
//         name: "admin"
//     }).save(err => {
//         if (err) {
//         console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//     });
//     }
// });
// }

  
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const etfRouter = require('./routes/etf.routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "ETF Insight." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
app.use('/api', etfRouter)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

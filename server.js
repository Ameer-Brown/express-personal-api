// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! I hope my documentation is better than mongoose's!",
    documentation_url: "https://github.com/Ameer-Brown/express-personal-api/blob/master/APIREADME.md",
    base_url: "http://strawberry-shortcake-56992.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Leads to all Endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about Ameer"},
      {method: "POST", path: "/api/memories", description: "Log your funniest memory with me."},
      {method: "PUT", path: "/api/memories/_id", description: "Update your funniest memory with me."},
      {method: "GET", path: "/api/memories/_id", description: "Find your funniest memory with me."},
      {method: "Delete", path: "/api/memories/_id", description: "Delete your funniest memory with me."}
    ]
  });
});

app.get('/api/profile', function apiProfile(req, res) {
  db.Profile.find({})
      .exec(function(err, profile){
        if (err) {
          res.status(500).send(err);
          return;
        }
        res.json(profile);
      });
});

app.post('/api/memories', function (req, res) {
  var newMemory = new db.Memory({
    _id: req.body.id,
    name: req.body.name,
    funniest_memory: req.body.funniest_memory,
  });
  db.Memory.findOne({name: req.body.name}, function(err, author){
    if (err) {
      return console.log(err);
    }
    newMemory.name = name;
    newMemory.save(function(err, book){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", memory.name);
      res.json(memory);
    });
  });
});

//
// app.put('/api/memories/_id', function apiMemoriesUpdate(req, res) {
//   res.();
// });
//
// app.get('/api/memories/_id', function apiMemoriesID(req, res) {
//   res.();
// });
//
app.delete('/api/memories/_id', function apiMemoriesDel(req, res) {
    // get book id from url params (`req.params`)
    console.log(req.params);
    var bookId = req.params.id;

    db.Memory.findOneAndRemove({ _id: memoryId }, function (err, deletedMemory) {
      res.json(deletedMemory);
    });
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});

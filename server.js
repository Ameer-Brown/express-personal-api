// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

// var db = require('./models');

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
    documentation_url: "https://github.com/Ameer-Brown/express_self_api/APIREADME.md",
    base_url: "http://strawberry-shortcake-56992.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Leads to all Endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about Ameer"},
      {method: "POST", path: "/api/memories", description: "Log your funniest memory with me."},
      {method: "PUT", path: "/api/memories/name", description: "Update your funniest memory with me."},
      {method: "GET", path: "/api/memories/name", description: "Find your funniest memory with me."},
      {method: "Delete", path: "/api/memories/name", description: "Delete your funniest memory with me."}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});

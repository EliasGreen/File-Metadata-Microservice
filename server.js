// init project
const express = require('express');
const app = express();
const queryString = require('query-string');
let size;
app.use(express.static('public'));

// show main file.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


/**********************************************/
app.post("/fetch", function (request, response) {
  size = request.query.size;
  response.sendStatus(200);
});
/**********************************************/
app.get("/size", function (request, response) {
  response.json(size);
});
/**********************************************/

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

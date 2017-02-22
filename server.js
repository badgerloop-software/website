/************************************************************************************/
/*                              Server Initialization                               */
/************************************************************************************/
express = require('express');
//bodyParser = require('body-parser');
http = require('http');
port = 8080;
app = express();
server = http.createServer(app).listen(port, function() {});
var folder = __dirname + '/web';
var file;

if (process.argv.length != 3) startupError('have the right number of arguments');
switch (process.argv[2].toLowerCase()) {
  case 'd':
  case 'dash':
  case 'dashboard': 
    file = 'dashboard.html';
    console.log("starting dashboard locally on port " + port);
    break;

  case 'w':
  case 'web':
  case 'website':
    file = 'index.html';
    console.log("starting website locally on port " + port);
    break;

  default:
    startupError('give a proper argument');
}

function startupError(problem) {
  console.log('[ERROR] usage: node server [web | dash] you didn\'t ' + problem);
  process.exit();
}

app.use('/', express.static(folder, {"index": file}));
/************************************************************************************/
/************************************************************************************/


/************************************************************************************/
/*                                API Testing                                       */
/************************************************************************************/
//app.use(bodyParser.json());

/************************************************************************************/
/************************************************************************************/

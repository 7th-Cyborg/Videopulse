var express = require("express");
var fs = require("fs");

var app = express();
app.use(express.static(__dirname + "/wwwroot"));


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
  console.log("Press CTRL + C to quit");
});



/*app.get('/', function(req, res) {
  res.render('/wwwroot/index.html');
});*/

/*	"/api/videos"
 *	GET: return all videos
 */
app.get('/api/videos', function (req, res) {

  var options = {
    root: __dirname + '/wwwroot/data',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = "videoList.json";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});

/*	"/api/videos/:videoId"
 *	GET: return specific video by id
 */
app.get('/api/videos/:videoId', function (req, res) {

  //Simulating database access
  fs.readFile(__dirname + "/wwwroot/data/" + "videos.json", 'utf8', function (err, data) {

    data = JSON.parse(data);
    var video;

    for (var i = 0; i < data.length; i++) {
      if (data[i].videoId == req.params.videoId) {
        video = data[i];
        break;
      }
    }

    //console.log( video );
    res.end(JSON.stringify(video));
  });

});


/*	"/api/file/:name"
 *	GET: return file by name
 */
app.get('/api/file/:name', function (req, res) {

  var options = {
    root: __dirname + '/wwwroot/data',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  var fileName = req.params.name;

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});
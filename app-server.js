var express = require('express');
var _ = require('underscore');
var app = express();

var connections = [];
var title = 'Untitled Presentation';
var audience = [];
var speaker = {};
var questions = require('./app-questions');
var websiteLinks = [];
var currentQuestion = false;
var results = {
  a: 0,
  b: 0,
  c: 0
};
var currentSite = false;


app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(8081);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

  socket.once('disconnect', function(){
    var member = _.findWhere(audience, { id: this.id });
    if (member) {
        audience.splice(audience.indexOf(member), 1);
        io.sockets.emit('audience', audience);
        console.log("Left: %s (%s audience members)", member.name, audience.length);
    } else if (this.id == speaker.id) {
      console.log("%s has left. %s is over", speaker.name, title);
      speaker = {};
      title = "Its Over";
      io.sockets.emit('end', { title: title, speaker: '' });
    }

    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Disconnected: %s sockets remaining.', connections.length );
  });

  socket.on('join', function(payload){
    var newMember = {
      id: this.id,
      name: payload.name,
      type: 'member'
    };
    this.emit('joined', newMember);
    audience.push(newMember);
    io.sockets.emit('audience', audience);
    console.log("Audience Joined: %s", payload.name );
  });

  socket.on('start', function(payload){
    speaker.name = payload.name;
    speaker.id = this.id;
    speaker.type = 'speaker';
    title = payload.title;
    speaker.title = payload.title;
    this.emit('joined', speaker);
    io.sockets.emit('start', { title: title, speaker: speaker.name });
    console.log("Presentation Started: %s by %s with type of %s", speaker.title, speaker.name, speaker.type);
  });

  socket.on('ask', function(question) {
    currentQuestion = question;
    results = { a:0, b:0, c:0 };
    io.sockets.emit('ask', currentQuestion);
    console.log('Question asked: %s', question.q);
  });

  socket.on('answer', function(payload) {
    results[payload.choice]++;
    io.sockets.emit('results', results);
    console.log('Answer: %s - %j', payload.choice, results);
  });

  socket.on('add', function(link) {
    websiteLinks.push(link);
    console.log(websiteLinks);
    io.sockets.emit('add', websiteLinks);
    console.log('Website added: %s', link.intergration);
  });
  
  socket.on('vote', function(vote) {
    websiteLinks[vote.site].votes[vote.vote]++
    io.sockets.emit('vote', websiteLinks);
  });

  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker: speaker.name,
    currentQuestion: currentQuestion,
    questions: questions,
    results: results,
    websiteLinks: websiteLinks,
  });


  
  connections.push(socket);
  console.log('Connected: %s sockets', connections.length );
});


console.log("server running at port 3000");

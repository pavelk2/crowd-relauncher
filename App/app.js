var express = require('express');
var logger = require('./logger');
var app = express();

app.use(logger);
app.use(express.static('./Web'));

var jobs = require('./routes/jobs');
app.use('/jobs', jobs);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on '+port);
});

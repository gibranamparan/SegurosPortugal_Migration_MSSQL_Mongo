const chalk = require('chalk')
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var URI = 'mongodb://localhost:27017/sismigracion'
//var URI = 'mongodb://admin:XJYF(J{nJ7;WJ_]s@ds147864.mlab.com:47864/seguros-dev' //dev
//var URI = "mongodb://admin:5(]WFr%fU^FX$)E@ds235807.mlab.com:35807/seguros-prod" //production
mongoose.connect(URI);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, chalk.red("ERROR AL CONECTAR CON SERVIDOR MONGO:")));
conn.once('open', function() {
    console.log(chalk.white.bgBlue("SERVIDOR MONGO CONECTADO:")+" "+chalk.blueBright(URI));
});

module.exports = mongoose
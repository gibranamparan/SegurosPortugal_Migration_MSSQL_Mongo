const chalk = require('chalk')
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var URI = process.env.MONGO_CONN ? process.env.MONGO_CONN : "mongodb://localhost:27017/sismigracion"
mongoose.connect(URI);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, chalk.red("ERROR AL CONECTAR CON SERVIDOR MONGO:")));
conn.once('open', function() {
    console.log(chalk.white.bgBlue("SERVIDOR MONGO CONECTADO:")+" "+chalk.blueBright(URI));
});

module.exports = mongoose
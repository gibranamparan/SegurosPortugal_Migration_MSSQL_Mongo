const chalk = require('chalk')
var Sequelize = require('sequelize');
var URI = process.env.MSSQL_CONN ? process.env.MSSQL_CONN : "mssql://(LocalDb)/MSSQLLocalDB/sismigracion"

var sequelize = new Sequelize(URI, {
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    define: {
        timestamps: false // true by default
    }
});

sequelize.authenticate()
    .then(() => {
        console.log(chalk.white.bgBlue(`SIS MSSQL DB SE HA CONECTADO:`)+" "+chalk.blueBright(URI));
    })
    .catch(err => {
        console.error(chalk.red('Hubo un problema al conectarse a SIS MSSQL Database: '+err));
    });

module.exports = sequelize
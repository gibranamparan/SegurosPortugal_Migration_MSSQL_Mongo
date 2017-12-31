const chalk = require('chalk')
var Sequelize = require('sequelize');
var URI = 'mssql://DB_A127E3_sistestmigracion_admin:z6HpZwNIqnKCvtom@SQL5037.site4now.net/DB_A127E3_sistestmigracion';

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
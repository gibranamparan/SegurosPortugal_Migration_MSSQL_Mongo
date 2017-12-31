var Sequelize = require('sequelize');
var connMSSQL = require('../connectionMSSQL')

const GrupoSchema = connMSSQL.define('grupoes', {
    GrupoID: { type: Sequelize.STRING, primaryKey: true },
    Nombre: { type: Sequelize.STRING },
    Descripcion: { type: Sequelize.STRING },
},{ freezeTableName: true, });

module.exports = GrupoSchema
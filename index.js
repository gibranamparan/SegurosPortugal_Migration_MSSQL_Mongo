const chalk = require('chalk')
var Sequelize = require('sequelize')
const Op = Sequelize.Op;
var GruposMongo = require('./mongoModels/Grupo')
var GruposMSSQL = require('./mssqlModels/Grupo')
var UsersMongo = require('./mongoModels/User')
var ClientesMSSQL = require('./mssqlModels/Cliente')
var PolizasMongo = require('./mongoModels/Poliza')
var PolizasMSSQL = require('./mssqlModels/Poliza')

//migrateClientes()
migratePolizas()

function mapDataValues(data){
    return data.map(function(item,idx){return item.dataValues})
}

function migratePolizas(){

    var filter = {
        [Op.and]:{
            Ramo:'autos',
            ClienteID : { [Op.or] : [1010,1011,1038] }
        }
    }
    
    PolizasMSSQL.findAll({where:filter}).then(polizas => {
        polizas = mapDataValues(polizas)
        polizas = PolizasMongo.mapData(polizas)
        PolizasMongo.create(polizas).then(function(success){
            console.log(chalk.green("Polizas guardados"))
        }).catch(function(err){
            console.log(chalk.red(err))
        })
    }).catch(function(exc){
        if(exc) console.log(chalk.red(exc))
    })
}
function migrateGrupos(){
    GruposMSSQL.findAll().then(grupos => {
        grupos = mapDataValues(grupos)
        grupos = GruposMongo.mapData(grupos)
        GruposMongo.create(grupos,function(success){
            console.log(chalk.green("Grupos guardados"))
        }).catch(function(exc){
            if(exc) console.log(chalk.red(exc))
        })
    }).catch(function(exc){
        if(exc) console.log(chalk.red(exc))
    })
}
function migrateClientes(){
    var filter = {
        ClienteID : { [Op.or]:[1010,1011,1038] }
    }
    ClientesMSSQL.findAll({where:filter}).then(clientes => {
        clientes = mapDataValues(clientes)
        clientes = UsersMongo.mapData(clientes)
        UsersMongo.create(clientes).then(function(success){
            console.log(chalk.green("Clientes guardados"))
        }).catch(function(err){
            console.log(chalk.red(err))
        })
    }).catch(function(exc){
        if(exc) console.log(chalk.red(exc))
    })
}
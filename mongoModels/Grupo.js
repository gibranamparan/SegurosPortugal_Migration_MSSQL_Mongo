const mongoose = require('../connectionMongo');
const Schema = mongoose.Schema;

var GrupoSchema = new Schema({
    _id:{
        type: Number,
        unique: true,
    },
    nombre: String,
    descripcion: String,
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true
    },
})
GrupoSchema.statics.mapData = function(data){
    return data.map(function(item,idx){
        return {
            _id : item.GrupoID,
            nombre : item.Nombre,
            descripcion : item.Descripcion
        }
    })
}

module.exports = mongoose.model('Grupos', GrupoSchema, 'grupo');
const mongoose = require('../connectionMongo');
var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const moment = require('moment');

//var minlength = [6, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'];

var UsersSchema = new Schema({
  _id : {
    type: Number,
    unique: true
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserType',
    required: true,
  },
  profile: {
    nombre: {
      type: String,
      required: false,
    },
    apellido: {
      type: String,
      required: false,
    },
    estadoCivil: String,
    fechaNacimiento: Date,
    grupo: String,
    telCasa: String,
    telOficina: String,
    celular: String,
  },
  direccionFiscal: {
    // Direccion Fiscal
    calle: String,
    numExt: String,
    rfc: String,
    pais: String,
    estado: String,
    ciudad: String,
    municipio: String,
    colonia: String,
    codigoPostal: String,
  },
  // Direccion de cobro
  direccionCobro: {
    contacto: String,
    calle: String,
    numExt: String,
    numInt: String,
    pais: String,
    estado: String,
    ciudad: String,
    colonia: String,
    codigoPostal: String,
  },
  direccionCobro2: {
    contacto: String,
    calle: String,
    numExt: String,
    numInt: String,
    pais: String,
    estado: String,
    ciudad: String,
    colonia: String,
    codigoPostal: String,
  },
  observaciones: String,
  updatedAt: {
    type: Date,
    default: moment.utc(),
  },
  createdAt: {
    type: Date,
    default: moment.utc(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  resetPasswordToken: String,
});

UsersSchema.pre('save', function (next) {
  let user = this;
  user.updatedAt = new Date(moment.utc());

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
}, { strict: false });

UsersSchema.statics.mapData = function(data){
  return data.map(function(i,idx){
      return {
        _id : i.ClienteID,
        email: i.Email,
        password: "sis123*",
        type : ObjectId("59b46ed29dac79499a0af381"),
        profile: {
          nombre: i.Nombre,
          apellido: i.Apellido,
          estadoCivil: i.EstadoCivil,
          fechaNacimiento: i.FechaNacimiento,
          grupo: i.Grupo,
          telCasa: i.TelCasa,
          telOficina: i.Oficina,
          celular: i.Cel,
        },
        direccionFiscal: {
          // Direccion Fiscal
          calle: i.CalleDF,
          numExt: i.NumExtDF,
          rfc: i.RFC,
          pais: i.PaisFis,
          estado: i.EstadoDF,
          ciudad: i.CiudadDF,
          municipio: i.MpioDF,
          colonia: i.ColoniaDF,
          codigoPostal: i.CodigoPostal,
        },
        // Direccion de cobro
        direccionCobro: {
          contacto: i.ContactoDC,
          calle: i.CalleDC,
          numExt: i.NumExtDC,
          numInt: i.NumIntDC,
          pais: i.PaisDC,
          estado: i.EstadoDC,
          ciudad: i.CiudadDC,
          colonia: i.ColoniaDC,
          codigoPostal: i.CodigoPostalDC,
        },
        direccionCobro2: {
          contacto: i.ContactoDC2,
          calle: i.CalleDC2,
          numExt: i.NumExtDC2,
          numInt: i.NumIntDC2,
          pais: i.PaisDC2,
          estado: i.EstadoDC2,
          ciudad: i.CiudadDC2,
          colonia: i.ColoniaDC2,
          codigoPostal: i.CodigoPostalDC2,
        },
        observaciones: i.Observaciones
    };
  })
}
/*
Users.path('email').validate(function (value, done) {
  if (this.isNew) {
    this.model('Users').count({ email: value }, function (err, count) {
      if (err) {
        return done(err);
      }
      done(!count);
    });
  } else {
    done(1);
  }
}, 'Email already exists');
*/  
module.exports = mongoose.model('Users', UsersSchema, 'users');

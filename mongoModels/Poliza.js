/*
 * Poliza Model
 *
 * This contains model schema for the Poliza entity.
 */
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const especificacionesAutoTuristaTitulos = [
   'Colisión, Rotura de cristales',
  'Incendio, robo total, y desastres naturales',
  'Responsabilidad civil por daños a bienes de terceros',
  'Gasto medico ocupantes del vehiculo asegurado',
  'Extension territorial',
  'Otros',
  'Daños a Personas' //Existe en SIS Viejo
];

const especificacionesDanosCasa = [
 'Incendio del edificio',
 'R. E. edificios',
 'B. E. edificios',
 'Incendio de los contenidos',
 'R. E. contenidos',
 'G. E. contenidos',
 'Rotura accidental de cristales',
 'Cristales templados',
 'Dinero en efectivo',
 'Robo con violencia y asalto',
 'Resp. civil y familiar',
 'Daños a equipo electrodomestico',
 'Otros' //Existe en SIS Viejo
];

const especificacionesDanosEmpresa = [
 'Incendio del edificio',
 'Incendio de Contenidos',
 'Perdidas consecuenciales',
 'Resp. civil Actividades e inmuebles',
 'Resp. civil arriendatario',
 'Calderas y recipientes a presión',
 'Robo con violencia y asalto',
 'Dinero y/o valores(dentro y fuera)',
 'Cristales',
 'Anuncios luminosos',
 'Equipo electrónico',
 'Rotura de maquinaria',
];

 var PolizaSchema = new Schema({
   _id:{
     type: Number,
     unique: true
   },
   _cliente: {
     type: Number,
     ref: 'users',
     required: true,  
   },
   ramo: String,
   subramo: String,
   numeroPoliza: String,
   documentacion: String,

   vigencias: {
     inicioVigencia: Date,
     finVigencia: Date,
     captura: Date,
   },

   otraInformacion: {
     fechaCancelacion: Date,
   },

   /* EXTRA DATA */
   numeroCliente : String,
   compania: String,
   polizaAnterior : String,
   
   importes:{
    primaNeta:'',
    recargos:'',
    derechoPoliza:'',
    iva:'',
    total:'',
    formaPago:'',
    moneda:''
  },
   /*** */

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
 }, {
   strict: false,
 });

//SERA NECESARIO HACER UN JOIN ENTRE LA POLIZA Y TODOS SUS POSIBLES TABLAS RELACIONADAS
PolizaSchema.statics.mapData = function(data){
  return data.map(function(i,idx){
    var resultado = {
      _id: i.PolizaID,
      _cliente: i.ClienteID,
      ramo: i.Ramo,
      subramo: i.Subramo,
      numeroCliente: i.NumCliente,
      compania: i.Compania,
      grupo: '',
      numeroPoliza: i.NumPoliza,
      polizaAnterior: i.PolizaAnterior,
      vigencias: {
        inicioVigencia: i.InicioVigencia,
        finVigencia: i.FinVigencia,
        captura: i.Captura,
      },
      importes: {
        primaNeta: i.PrimaNeta,
        recargos: i.Recargos,
        derechoPoliza: i.DerechoPoliza,
        iva: i.IVA,
        total: i.Total,
        formaPago: i.FormaPago,
        moneda: i.Moneda,
      },
      documentacion: i.Descripcion,
      otraInformacion: {
        motivo: i.Motivo,
        fechaCancelacion: i.fechaCancelacion,

        //Existe en SIS Viejo
        /*RDescripcion : i.DocumentosEntregadosSiniestro,
        enovada : i.Renovada,
        MotivoSiniestro : i.MotivoSiniestro,
        ActivarEndoso : i.ActivarEndoso,
        NumEndoso : i.NumEndoso,
        MotivoEndoso : i.MotivoEndoso,
        ActivarSiniestro : i.ActivarSiniestro,
        NumSiniestro : i.NumSiniestro,
        FechaSiniestro : i.FechaSiniestro,
        Contenedor : i.Contenedor,*/
      },
      turista: {
        tipo: i.Tipo,
        anio1: i.Anio,
        anio2: i.Anio2,
        anio3: i.Anio3,
    
        marca1: i.Marca,
        marca2: i.Marca2,
        marca3: i.Marca3,
    
        modelo1: i.Modelo,
        modelo2: i.Modelo2,
        modelo3: i.Modelo3,
    
        numSerie1: i.NumeroSerie,
        numSerie2: i.NumeroSerie2,
        numSerie3: i.NumeroSerie3,
    
        valor1: i.Valor,
        valor2: i.Valor2,
        valor3: i.Valor3,
    
        licencia1: i.NumeroLic,
        licencia2: i.NumeroLic2,
        licencia3: i.NumeroLic3,

        especificacionesAutoTurista: // Ramo: Autos, SubRamo: Turistas
          especificacionesAutoTuristaTitulos.map((titulo, i) => ({
            seccion: i + 1,
            especificaciones: titulo,
            amparado: 'excluido',
            suma: null,
            prima: 0,
          })),
      },
      vehiculo: { // Ramo: Autos, SubRamo: {Sedan||PickUp||Motocicleta}
        anio: i.vehiculo_Anio,
        marca: i.vehiculo_Marca,
        modelo: i.vehiculo_Modelo,
        numeroSerie: i.vehiculo_NumSerie,
        placas: i.vehiculo_Placas,
        otros: i.vehiculo_Otros,
        cobertura: i.vehiculo_Cobertura,
      },
      casa: { // Ramo: Daños, subramo:casas
        datos: {
          tipoConstruccion: i.casa_TipoConstruccion,
          constaDe: i.casa_Plantas,
          terremoto: i.casa_Terremoto,
          RH: i.casa_RH,
        },
        ubicacionRiesgo: {
          pais: i.casa_Pais,
          estado: i.casa_Estado,
          ciudad: i.casa_Ciudad,
          calle: i.casa_Calle,
          numExt: i.casa_NumExt,
          colonia: i.casa_Colonia,
          codigoPostal: i.casa_CodigoPostal,
        },
        
        danios: especificacionesDanosCasa.map((titulo, i) => ({
          seccion: i + 1,
          especificaciones: titulo,
          amparado: 'excluido',
          suma: null,
          prima: 0,
        })),
        //Agregado en migracion
        otrosDanios: i.Otros
      },
      empresa: { // Ramo: Daños, subramo:empresa
        datos: {
          giro: i.empresa_Giro,
          cobertura: i.empresa_Cobertura,
          tipoConstruccion: i.empresa_TipoConstruccion,
          constaDe: i.empresa_Plantas,
          terremoto: i.empresa_Terremoto,
        },
        ubicacionRiesgo: {
          pais: i.empresa_Pais,
          estado: i.empresa_Estado,
          ciudad: i.empresa_Ciudad,
          calle: i.empresa_Calle,
          numExt: i.empresa_NumExt,
          colonia: i.empresa_Colonia,
          codigoPostal: i.empresa_CodigoPostal,
        },
        danios: especificacionesDanosEmpresa.map((titulo, i) => ({
          seccion: i + 1,
          especificaciones: titulo,
          amparado: 'excluido',
          suma: null,
          prima: 0,
        })),
      },
      transporte: { // Ramo: Daños, subramo:transporte
        marca: i.transporte_Marca,
        modelo: i.transporte_Modelo,
        serie: i.transporte_Serie,
        placas: i.transporte_Placas,
        nombreConductor: i.transporte_nombreConductor,
        tipoMercancia: i.transporte_TipoMercancia,
        origenEmbarque: i.transporte_OrigenEmbarque,
        destinoEmbarque: i.transporte_DestinoEmbarque,
        cobertura: i.transporte_Cobertura,
      },
    };

    //**LLENAR especificacionesAutoTurista
    for(var c=0; c<especificacionesAutoTuristaTitulos.length; c++){
      var esp = resultado.turista.especificacionesAutoTurista[c]
      //'Colisión, Rotura de cristales',
      if(c == 0){
        esp.montoAsegurado = i.turista_RoturaCristales
        esp.amparado=  i.RoturaCristalesAmp
        esp.suma= i.RoturaCristalesSuma
        esp.prima= i.RoturaCristalesPrima
      }
      //'Incendio, robo total, y desastres naturales',
      if(c == 1){
        esp.montoAsegurado = i.turista_Robo
        esp.amparado=  i.turista_RoboAmp
        esp.suma= i.turista_RoboSuma
        esp.prima= i.turista_RoboPrima 
      }
      //'Responsabilidad civil por daños a bienes de terceros',
      if(c == 2){
        esp.montoAsegurado = i.turista_RCDaniosBienesTerceros
        esp.amparado=  i.turista_RCDaniosBienesTercerosAmp
        esp.suma= i.turista_RCDaniosBienesTercerosSuma
        esp.prima= i.turista_RCDaniosBienesTercerosPrima
      }
      //'Gasto medico ocupantes del vehiculo asegurado',
      if(c == 3){
        esp.montoAsegurado = i.turista_GastosMedicos
        esp.amparado=  i.turista_GastosMedicosAmp
        esp.suma= i.turista_GastosMedicosSuma
        esp.prima= i.turista_GastosMedicosPrima 
      }
      //'Extension territorial',
      if(c == 4){
        esp.montoAsegurado = i.turista_ExtTerritorial
        esp.amparado=  i.turista_ExtTerritorialAmp
        esp.suma= i.turista_ExtTerritorialSuma
        esp.prima= i.turista_ExtTerritorialPrima 
      }
      //'Otros'
      if(c == 5){
        esp.montoAsegurado = i.turista_Otros
        esp.amparado=  i.turista_OtrosAmp
        esp.suma= i.turista_OtrosSuma
        esp.prima= i.turista_OtrosPrima 
      }
      //'Danios personas terceros'
      if(c == 6){
        esp.montoAsegurado = i.turista_RCDaniosPersonasTerceros
        esp.amparado=  i.turista_RCDaniosPersonasTercerosAmp
        esp.suma= i.turista_RCDaniosPersonasTercerosSuma
        esp.prima= i.turista_RCDaniosPersonasTercerosPrima 
      }
    }

    //TODO LLENAR DATOS DE DANIOS especificacionesDanosCasa
    for(var c=0; c<especificacionesDanosCasa.length; c++){
      var esp = resultado.casa.danios[c]
      //'Incendio del edificio',
      if(c == 0)
        esp.montoAsegurado = i.casa_IncendioEdificio
      
      //'R. E. edificios',
      if(c == 1)
        esp.montoAsegurado = i.casa_REEdificios
      
      //'B. E. edificios',
      if(c == 2)
        esp.montoAsegurado = i.casa_BEEdificios
      
      //'Incendio de los contenidos',
      if(c == 3)
        esp.montoAsegurado = i.casa_IncendioContenidos
      
      //'R. E. contenidos',
      if(c == 4)
        esp.montoAsegurado = i.casa_REContenidos
      
      //'G. E. contenidos',
      if(c == 5)
        esp.montoAsegurado = i.casa_GEContenidos
      
      //'Rotura accidental de cristales',
      if(c == 6)
        esp.montoAsegurado = i.casa_RoturaCristales
      
      //'Cristales templados',
      if(c == 7)
        esp.montoAsegurado = i.casa_CristalesTemplados
      
      //'Dinero en efectivo',
      if(c == 8)
        esp.montoAsegurado = i.casa_DineroEfectivo
      
      //'Robo con violencia y asalto',
      if(c == 9)
        esp.montoAsegurado = i.casa_Robo
      
      //'Resp. civil y familiar',
      if(c == 10)
        esp.montoAsegurado = i.casa_RespFamiliar
      
      //'Daños a equipo electrodomestico',
      if(c == 11)
        esp.montoAsegurado = i.casa_DaniosElectrodomesticos
      
        //'Otro',
      if(c == 12)
        esp.montoAsegurado = i.casa_Otros
      
    }
    
    //TODO LLENAR DATOS DE DANIOS especificacionesDanosEmpresa
    for(var c=0; c<especificacionesDanosEmpresa.length; c++){
      var esp = resultado.empresa.danios[c]
      //'Incendio del edificio',
      if(c == 0)
        esp.montoAsegurado = i.empresa_IncendioEdificio
      
        //'Incendio de Contenidos',
      if(c == 1)
        esp.montoAsegurado = i.empresa_IncendioContenidos
      
        //'Perdidas consecuenciales',
      if(c == 2)
        esp.montoAsegurado = i.empresa_PerdidasConsecuenciales
      
        //'Resp. civil Actividades e inmuebles',
      if(c == 3)
        esp.montoAsegurado = i.empresa_RespMueblesActividades
      
        //'Resp. civil arriendatario',
      if(c == 4)
        esp.montoAsegurado = i.empresa_RespArrendatario
      
        //'Calderas y recipientes a presión',
      if(c == 5)
        esp.montoAsegurado = i.empresa_CalderasRecipientes
      
        //'Robo con violencia y asalto',
      if(c == 6)
        esp.montoAsegurado = i.empresa_Robo
      
        //'Dinero y/o valores(dentro y fuera)',
      if(c == 7)
        esp.montoAsegurado = i.empresa_DineroValores
      
      //'Cristales',
      if(c == 8)
        esp.montoAsegurado = i.empresa_Cristales
      
        //'Anuncios luminosos',
      if(c == 9)
        esp.montoAsegurado = i.empresa_AnunciosLuminosos
      
        //'Equipo electrónico',
      if(c == 10)
        esp.montoAsegurado = i.empresa_EquipoElectronico
      
        //'Rotura de maquinaria',
      if(c == 11)
        esp.montoAsegurado = i.empresa_RoturaMaquinaria
    }

    return resultado    
  })
}

module.exports = mongoose.model('Poliza', PolizaSchema, 'poliza');

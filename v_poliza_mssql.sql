SELECT
    Polizas.PolizaID, Polizas.Ramo, Polizas.Subramo, Polizas.NumCliente, Polizas.NumPoliza, Polizas.Compania, Polizas.InicioVigencia, Polizas.PolizaAnterior, Polizas.FinVigencia, Polizas.Captura, Polizas.PrimaNeta, 
    Polizas.Recargos, Polizas.DerechoPoliza, Polizas.IVA, Polizas.Total, Polizas.FormaPago, Polizas.Moneda, Polizas.DocumentosEntregadosSiniestro, Polizas.MotivoSiniestro, Polizas.Descripcion, Polizas.Renovada, 
    Polizas.Motivo, Polizas.ActivarEndoso, Polizas.NumEndoso, Polizas.MotivoEndoso, Polizas.ActivarSiniestro, Polizas.NumSiniestro, Polizas.FechaSiniestro, Polizas.Contenedor, 
    
    Carroes.Anio AS vehiculo_Anio, Carroes.Marca AS vehiculo_Marca, Carroes.Modelo AS vehiculo_Modelo, Carroes.NumSerie as vehiculo_NumSerie, Carroes.Placas AS vehiculo_Placas, Carroes.Otros AS vehiculo_Otros, 
    Carroes.Cobertura AS vehiculo_Cobertura, 
    
    Casas.TipoContruccion AS casa_TipoContruccion, Casas.Plantas AS casa_Plantas, Casas.Terremoto AS casa_Terremoto, Casas.RH AS casa_RH, Casas.Pais AS casa_Pais, 
    Casas.Estado AS casa_Estado, Casas.Ciudad AS casa_Ciudad, Casas.NumExt AS casa_NumExt, Casas.Colonia AS casa_Colonia, Casas.Calle AS casa_Calle, Casas.CodigoPostal as casa_CodigoPostal, Casas.IncendioEdificio AS casa_IncendioEdificio, 
    Casas.REEdificios AS casa_REEdificios, Casas.REContenidos AS casa_REContenidos, Casas.IncendioContenidos AS casa_IncendioContenidos, Casas.GEContenidos AS casa_GEContenidos, 
    Casas.RoturaCristales AS casa_RoturaCristales, Casas.CristalesTemplados AS casa_CristalesTemplados, Casas.DineroEfectivo AS casa_DineroEfectivo, Casas.Robo AS casa_Robo, 
    Casas.RespFamiliar AS casa_RespFamiliar, Casas.DaniosElectrodomesticos AS casa_DaniosElectrodomesticos, Casas.BEEdificios AS casa_BEEdificios, 
    
    Empresas.Giro AS empresa_Giro, Empresas.Cobertura AS empresa_Cobertura, Empresas.TipoContruccion AS empresa_TipoContruccion, Empresas.Plantas AS empresa_Plantas, Empresas.Terremoto AS empresa_Terremoto,
    Empresas.Pais AS empresa_Pais, Empresas.Estado AS empresa_Estado, Empresas.Ciudad AS empresa_Ciudad, Empresas.Calle AS empresa_Calle, Empresas.NumExt AS empresa_NumExt, Empresas.Colonia AS empresa_Colonia, 
    Empresas.CodigoPostal AS empresa_CodigoPostal, Empresas.IncendioEdificio AS empresa_IncendioEdificio, Empresas.IncendioContenidos AS empresa_IncendioContenidos, 
    Empresas.PerdidasConsecuenciales AS empresa_PerdidasConsecuenciales, Empresas.RespMueblesActividades AS empresa_RespMueblesActividades, Empresas.RespArrendatario AS empresa_RespArrendatario, 
    Empresas.CalderasRecipientes AS empresa_CalderasRecipientes, Empresas.Robo AS empresa_Robo, Empresas.DineroValores AS empresa_DineroValores, Empresas.Cristales AS empresa_Cristales, 
    Empresas.AnunciosLuminosos AS empresa_AnunciosLuminosos, Empresas.EquipoElectronico AS empresa_EquipoElectronico, Empresas.RoturaMaquinaria AS empresa_RoturaMaquinaria, 

    Transportes.Marca AS transporte_Marca, Transportes.Modelo AS transporte_Modelo, Transportes.Serie AS transporte_Serie, Transportes.Placas AS transporte_Placas, 
    Transportes.nombreConductor AS transporte_nombreConductor, Transportes.TipoMercancia AS transporte_TipoMercancia, Transportes.OrigenEmbarque AS transporte_OrigenEmbarque, 
    Transportes.DestinoEmbarque AS transporte_DestinoEmbarque, Transportes.Cobertura AS transporte_Cobertura, 
    
    Turistas.Tipo AS turista_Tipo, Turistas.Anio AS turista_Anio, Turistas.Marca AS turista_Marca, Turistas.Modelo AS turista_Modelo, Turistas.NumeroSerie AS turista_NumeroSerie, Turistas.Valor AS turista_Valor, 
    Turistas.Anio2 AS turista_Anio2, Turistas.Marca2 AS turista_Marca2, Turistas.Modelo2 AS turista_Modelo2, Turistas.NumeroSerie2 AS turista_NumeroSerie2, Turistas.Valor2 AS turista_Valor2, 
    Turistas.Anio3 AS turista_Anio3, Turistas.Marca3 AS turista_Marca3, Turistas.Modelo3 AS turista_Modelo3, Turistas.NumeroSerie3 AS turista_NumeroSerie3, Turistas.Valor3 AS turista_Valor3, 
    Turistas.NumeroLic AS turista_NumeroLic, Turistas.NumeroLic2 AS turista_NumeroLic2, Turistas.NumeroLic3 AS turista_NumeroLic3, Turistas.RoturaCristales AS turista_RoturaCristales, Turistas.RoturaCristalesAmp, 
    Turistas.RoturaCristalesSuma, Turistas.RoturaCristalesPrima, Turistas.Robo, Turistas.RoboAmp, Turistas.RoboSuma, Turistas.RoboPrima, 
    Turistas.RCDaniosBienesTerceros, Turistas.RCDaniosBienesTercerosAmp, Turistas.RCDaniosBienesTercerosSuma, Turistas.RCDaniosBienesTercerosPrima, Turistas.GastosMedicos, Turistas.GastosMedicosAmp, 
    Turistas.GastosMedicosSuma, Turistas.GastosMedicosPrima, Turistas.ExtTerritorial, Turistas.ExtTerritorialAmp, Turistas.ExtTerritorialSuma, Turistas.ExtTerritorialPrima, Turistas.RCDaniosPersonasTerceros, 
    Turistas.RCDaniosPersonasTercerosAmp, Turistas.RCDaniosPersonasTercerosSuma, Turistas.RCDaniosPersonasTercerosPrima, Turistas.Otros, Turistas.OtrosAmp, Turistas.OtrosSuma, Turistas.OtrosPrima,Polizas.ClienteID,

    Polizas.CarroID, Polizas.CasaID, Polizas.EmpresaID, Polizas.TransporteID, Polizas.TuristaID

FROM
    Polizas LEFT OUTER JOIN
    Empresas ON Polizas.EmpresaID = Empresas.EmpresaID LEFT OUTER JOIN
    Transportes ON Polizas.TransporteID = Transportes.TransporteID LEFT OUTER JOIN
    Turistas ON Polizas.TuristaID = Turistas.TuristaID LEFT OUTER JOIN
    Carroes ON Polizas.CarroID = Carroes.CarroID LEFT OUTER JOIN
    Casas ON Polizas.CasaID = Casas.CasaID
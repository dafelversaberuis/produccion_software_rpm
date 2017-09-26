var mensaje3 = "";




function isEmailAddress2(theElement, nombre_del_elemento) {
	mensaje3 = "";
	var s = theElement.value;
	var filter = /^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
	if (s.length == 0)
		return true;
	if (filter.test(s))
		return true;
	else
		mensaje3 = "* INGRESE UNA DIRECCION DE CORREO VALIDA\n";
	// theElement.focus();
	return false;
}





function nuevaParticipacion(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione la organizaci�n\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearParticipacion(id);

	} else {
		alert(mensaje);
	}

}



function nuevaCapacitacion(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione capacitaci�n recibida\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (document.getElementById('percepcion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione la percepci�n\n";
	}
	
	if (document.getElementById('institucion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Escriba la instituci�n\n";
	}
	
	if (document.getElementById('tiempo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione el tiempo\n";
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearCapacitacion(id);

	} else {
		alert(mensaje);
	}

}


function nuevaDelito(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un delito\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearDelito(id);

	} else {
		alert(mensaje);
	}

}


function nuevaLibertad(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una libertad\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearLibertad(id);

	} else {
		alert(mensaje);
	}

}


function nuevoIndividual(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto individual\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearIndividual(id);

	} else {
		alert(mensaje);
	}

}

function nuevoFamiliar(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto familiar\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearFamiliar(id);

	} else {
		alert(mensaje);
	}

}


function nuevoColectivo(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto colectivo\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearColectivo(id);

	} else {
		alert(mensaje);
	}

}


function editarAgresor(id) {
	var mensaje = "";
		
		if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* CONOCE O NO EL AGRESOR ?\n";
			
			
		}else{
			
			if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "S") {
				
				if (document.getElementById('nombre').value.replace(/^\s*|\s*$/g, "") == "") {
					mensaje = mensaje + "* ESCRIBA EL NOMBRE O ALIAS DEL AGRESOR\n";
				}
				
				
			}else{
				
				document.getElementById('nombre').value =  "";
				
			}
				
			
		}
		
		if (document.getElementById('sexo').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* SELECCIONE EL SEXO\n";
		}
		
		
		if (document.getElementById('genero').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* SELECCIONE EL GENERO\n";
		}
		
		if (document.getElementById('edad').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* SELECCIONE LA EDAD\n";
		}
		
		
		if (document.getElementById('actor').value.replace(/^\s*|\s*$/g, "") == "") {

			//solicitud
			//mensaje = mensaje + "* SELECCIONE UN ACTOR\n";
		}else{
			
			datos = document.getElementById('actor').value.split("-");
			if(datos!=null && datos[1]=="S"){
				
				if (document.getElementById('cual_actor').value.replace(/^\s*|\s*$/g, "") == "") {
					//			//solicitud
					//mensaje = mensaje + "* ESPECIFIQUE CUAL ACTOR ?.\n";
					
				}
			}
			
			
		
			if(!(datos!=null && datos!="" && parseInt(datos[0])==7)){ //persona natural
				
				if (document.getElementById('tipo_actor').value.replace(/^\s*|\s*$/g, "") == "") {
					//solicitud
					//mensaje = mensaje + "* ESPECIFIQUE TIPO DE ACTOR(UNIDAD, FRENTE, BLOQUE, OTRO).\n";
					
				}else{
					
					if (document.getElementById('cual_tipoactor').value.replace(/^\s*|\s*$/g, "") == "") {
						//solicitud
						//mensaje = mensaje + "* ESPECIFIQUE A CUAL UNIDAD, FRENTE, BLOQUE, OTRO PERTENECE.\n";
					}
					
				}
			}else{
				
				document.getElementById('tipo_actor').value = "";
				document.getElementById('cual_tipoactor').value = "";
			}
			
				
		}
		
		
		if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			cargarEditarAgresor(id);

		} else {
			alert(mensaje);
		}

	}



function editarHecho(id) {
	var mensaje = "";
		
	
	//por solicitud ya no se exige
	/*
	if (document.getElementById('fecha_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA FECHA DE LOS HECHOS\n";
	}
	
	if (document.getElementById('hora').value.replace(/^\s*|\s*$/g, "") == "" || document.getElementById('minuto').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA HORA\n";
	}
	
	*/
	
	
	if (document.getElementById('departamento_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO\n";
	}
	
	if (document.getElementById('municipio_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL MUNICIPIO\n";
	}
	
	
	
	if (document.getElementById('lugar_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL LUGAR DE LOS HECHOS\n";
		
		
	}else{
		
		if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
			
			mensaje = mensaje + "* ESPECIFIQUE CUAL LUGAR\n";
			
			
		}
			
		
	}
	
	
	if (document.getElementById('relato_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESCRIBA EL RELATO DE LOS HECHOS\n";
		
	}
	
	
	
	
	if (document.getElementById('testigos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESPECIFIQUE SI HUBO TESTIGOS\n";
		
	}else{
		
		if (document.getElementById('testigos').value.replace(/^\s*|\s*$/g, "") == "N") {

			
			document.getElementById('cuales_testigos').value = "";
		}
		
	}
	
	

	if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESPECIFIQUE SI TIENE DOCUMENTACION\n";
		
	}else{
		
		if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "S") {
			
			
			sw = 0;
			if(document.getElementById('documentacion1').checked){
				sw = 1;
				document.getElementById('h_documentacion1').value="S";
								
			}else{
				
				document.getElementById('h_documentacion1').value="N";
				
			}
			
			
			
			if(document.getElementById('documentacion2').checked){
				sw = 1;
				document.getElementById('h_documentacion2').value="S";
			}else{
				
				document.getElementById('h_documentacion2').value="N";
			}
			
			
			
			if(document.getElementById('documentacion3').checked){
				sw = 1;
				document.getElementById('h_documentacion3').value="S";
			}else{
				document.getElementById('h_documentacion3').value="N";
			}
			
			
			if(document.getElementById('documentacion4').checked){
				sw = 1;
				document.getElementById('h_documentacion4').value="S";
				
				if (document.getElementById('cual_documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
					
					mensaje = mensaje + "* ESPECIFIQUE CUAL OTRA DOCUMENTACION\n";
				}
				
			}else{
				
				document.getElementById('cual_documentacion').value = "";
				document.getElementById('h_documentacion4').value="N";
			}
			
			if(sw==0){
				
				mensaje = mensaje + "* SELECCIONE CUAL O CUALES DOCUMENTACIONES\n";
			}
			
			
			
			
			
			
			
		}else{
			
			document.getElementById('h_documentacion1').value="N";
			document.getElementById('h_documentacion2').value="N";
			document.getElementById('h_documentacion3').value="N";
			document.getElementById('h_documentacion4').value="N";
			document.getElementById('cual_documentacion').value = "";
			
		}
		
	}
	
	
	if (document.getElementById('tipo_hecho').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL TIPO DE HECHO\n";
		
	}else{
		
		if (document.getElementById('tipo_hecho').value.replace(/^\s*|\s*$/g, "") == "R") {

			if (document.getElementById('frecuencia_hechos').value.replace(/^\s*|\s*$/g, "") == "") {

				
				mensaje = mensaje + "* SELECCIONE LA FRECUENCIA DE LOS HECHOS\n";
			}
			
		}else{
			
			
			document.getElementById('frecuencia_hechos').value = "";
			
			
		}
		
	}
	
		
		
		
		
		if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
				cargarEditarHecho(id);
		

		} else {
			alert(mensaje);
		}
		
		

}

function editarRuta(id) {
	var mensaje = "";
	
	if(document.getElementById('denunciado').value==""){
		mensaje = mensaje + "* SELECCIONE SI LOS HECHOS FUERON DENUNCIADOS\n";
		
	}else{
		
		
		if(document.getElementById('denunciado').value=="S"){
			
					document.getElementById('h_no_denuncia1').value="";
					document.getElementById('h_no_denuncia2').value="";
					document.getElementById('h_no_denuncia3').value="";
					document.getElementById('h_no_denuncia4').value="";
					document.getElementById('h_no_denuncia5').value="";
					document.getElementById('h_no_denuncia6').value="";
					document.getElementById('h_no_denuncia7').value="";
					document.getElementById('cual_no_denuncia').value="";
					document.getElementById('interesada').value="";
					
					
					
					if (document.getElementById('denunciante').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE QUIEN DENUNCIO LOS HECHOS\n";
						
					}else{
						
						if (document.getElementById('denunciante').value.replace(/^\s*|\s*$/g, "") == "V") {
							
							document.getElementById('cual_denunciante').value="";
							document.getElementById('cual_relacion').value="";
							
							
						}else{
							
							if (document.getElementById('cual_denunciante').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESPECIQUE QUE OTRA PERSONA DENUNCIO\n";
								
							}
							
							if (document.getElementById('cual_relacion').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESPECIQUE LA RELACION DEL DUNANCIANTE CON LA VICTIMA\n";
								
							}
						}
					}
					
					sw=0;
					if(document.getElementById('lugar_denuncia1').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia1').value="S";
					}else{
						document.getElementById('h_lugar_denuncia1').value="N";
					}
					
					if(document.getElementById('lugar_denuncia2').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia2').value="S";
					}else{
						
						document.getElementById('h_lugar_denuncia2').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia3').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia3').value="S";
					}else{
						document.getElementById('h_lugar_denuncia3').value="N";
						
					}
					if(document.getElementById('lugar_denuncia4').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia4').value="S";
					}else{
						document.getElementById('h_lugar_denuncia4').value="N";
						
					}
					
					if(document.getElementById('lugar_denuncia5').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia5').value="S";
					}else{
						document.getElementById('h_lugar_denuncia5').value="N";
						
					}
					if(document.getElementById('lugar_denuncia6').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia6').value="S";
					}else{
						document.getElementById('h_lugar_denuncia6').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia7').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia7').value="S";
					}else{
						document.getElementById('h_lugar_denuncia7').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia8').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia8').value="S";
						
						if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESPECIQUE EN QUE OTRO ENTE DENUNCIO LOS HECHOS\n";
							
						}
						
						
						
						
					}else{
						
						document.getElementById('h_lugar_denuncia8').value="N";
						
						document.getElementById('cual_lugar').value="";
					}
					
					
					if(sw==0){
						
						mensaje = mensaje + "* SELECCIONE AL MENOS UN ENTE DONDE DENUNCIO LOS HECHOS\n";
					}
					
					
					
					if (document.getElementById('fecha_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
//solicitud
						//mensaje = mensaje + "* ESPECIQUE LA FECHA EN QUE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('departamento_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO DONDE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('municipio_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE EL MUNICIPIO DONDE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('atencion').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* COMO FUE LA ATENCION AL MOMENTO DE PRESENTAR LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('cual_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESCRIBA POR QUE LA CALIFICACION DE LA ATENCION AL MOMENTO DE PRESENTAR LA DENUNCIA\n";
							
						}
						
					}
					
					if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI TIENE DOCUMENTACION SOBRE LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA CUAL DOCUMENTACION SOBRE LA DENUNCIA\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_documentacion').value = "";
							
						}
						
						
					}
					
					if (document.getElementById('denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI SABE ALGO SOBRE LO QUE HA PASADO CON LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('denuncia').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA QUE SABE\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_denuncia').value = "";
							
						}
						
						
					}
					
					
					
					if (document.getElementById('victima').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI HA HECHO ALGUNA GESTION PARA ACREDITARSE COMO VICTIMA\n";
						
					}else{
						
						if (document.getElementById('victima').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_victima').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA ANTE QUIEN\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_victima').value = "";
							
						}
						
						
					}
					
					
			
			
			
			
			
		}else{
			
			// no denunciados
			
			document.getElementById('denunciante').value="";
			document.getElementById('cual_denunciante').value="";
			document.getElementById('cual_relacion').value="";
			document.getElementById('h_lugar_denuncia1').value="";
			document.getElementById('h_lugar_denuncia2').value="";
			document.getElementById('h_lugar_denuncia3').value="";
			document.getElementById('h_lugar_denuncia4').value="";
			document.getElementById('h_lugar_denuncia5').value="";
			document.getElementById('h_lugar_denuncia6').value="";
			document.getElementById('h_lugar_denuncia7').value="";
			document.getElementById('h_lugar_denuncia8').value="";
			
			
			
			document.getElementById('fecha_denuncia').value="";
			document.getElementById('municipio_denuncia').value="";
			document.getElementById('atencion').value="";
			document.getElementById('cual_atencion').value="";
			document.getElementById('documentacion').value="";
			document.getElementById('cual_documentacion').value="";
			document.getElementById('denuncia').value="";
			document.getElementById('cual_denuncia').value="";
			document.getElementById('victima').value="";
			document.getElementById('cual_victima').value="";
			
			
			
			
			
			sw=0;
			if(document.getElementById('no_denuncia1').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia1').value="S";
			}else{
				document.getElementById('h_no_denuncia1').value="N";
			}
			
			if(document.getElementById('no_denuncia2').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia2').value="S";
			}else{
				
				document.getElementById('h_no_denuncia2').value="N";
				
			}
			
			
			if(document.getElementById('no_denuncia3').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia3').value="S";
			}else{
				document.getElementById('h_no_denuncia3').value="N";
				
			}
			if(document.getElementById('no_denuncia7').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia7').value="S";
			}else{
				document.getElementById('h_no_denuncia7').value="N";
				
			}
			
			if(document.getElementById('no_denuncia5').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia5').value="S";
			}else{
				document.getElementById('h_no_denuncia5').value="N";
				
			}
			if(document.getElementById('no_denuncia6').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia6').value="S";
			}else{
				document.getElementById('h_no_denuncia6').value="N";
				
			}
			
			
			if(document.getElementById('no_denuncia4').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia4').value="S";
				
				if (document.getElementById('cual_no_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
					mensaje = mensaje + "* ESPECIQUE CUAL OTRA RAZON DE LA NO DENUNCIA\n";
					
				}
				
				
				
				
			}else{
				
				document.getElementById('h_no_denuncia4').value="N";
				
				document.getElementById('cual_no_denuncia').value="";
			}
			
			
			if(sw==0){
				
				mensaje = mensaje + "* SELECCIONE AL MENOS UN RAZON POR LA CUAL NO DENUNCIO\n";
			}
			
			
			
			if (document.getElementById('interesada').value.replace(/^\s*|\s*$/g, "") == "") {
				mensaje = mensaje + "* SELECCIONE SI LA VICTIMA ESTA INTERESADA EN DUNUNCIAR\n";
				
			}
			
			
			
			
			
		}
		
		
		
		
	}
	
	
		
		
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			
		
		cargarEditarRuta(id);
	
	
	} else {
		alert(mensaje);
	}
		
		

}



function editarAcompanamiento(id) {
	var mensaje = "";
	

	if (document.getElementById('responsable').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA PERSONA QUE REALIZA LA ATENCION\n";
		
	}
	
	if (document.getElementById('fecha_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA FECHA DE LA ATENCION\n";
		
	}
	
	if (document.getElementById('departamento_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO DE LA ATENCION\n";
		
	}
	
	
	if (document.getElementById('municipio_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL MUNICIPIO DE LA ATENCION\n";
		
	}


	sw=0;
	if(document.getElementById('tipo_atencion1').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion1').value="S";
	}else{
		document.getElementById('h_tipo_atencion1').value="N";
	}
	
	if(document.getElementById('tipo_atencion2').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion2').value="S";
	}else{
		
		document.getElementById('h_tipo_atencion2').value="N";
		
	}
	
	
	if(document.getElementById('tipo_atencion3').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion3').value="S";
	}else{
		document.getElementById('h_tipo_atencion3').value="N";
		
	}
	if(document.getElementById('tipo_atencion4').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion4').value="S";
	}else{
		document.getElementById('h_tipo_atencion4').value="N";
		
	}
	
	if(document.getElementById('tipo_atencion5').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion5').value="S";
	}else{
		document.getElementById('h_tipo_atencion5').value="N";
		
	}
	if(document.getElementById('tipo_atencion6').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion6').value="S";
	}else{
		document.getElementById('h_tipo_atencion6').value="N";
		
	}

	
	if(document.getElementById('tipo_atencion7').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion7').value="S";
		
		if (document.getElementById('cual_tipo_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESPECIQUE A CUAL OTRA INSTANCIA SE REMITE\n";
			
		}
		
		
	}else{
		
		document.getElementById('h_tipo_atencion7').value="N";
		document.getElementById('cual_tipo_atencion').value="";
	}
	
	
	if(sw==0){
		
		mensaje = mensaje + "* SELECCIONE AL MENOS UN TIPO DE ATENCION\n";
	}
	
	
	
	
	if (document.getElementById('impacto').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL IMPACTO DEL ACOMPA�AMIENTO PSICOSOCIAL\n";
		
	}
	
	if (document.getElementById('juridico').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL IMPACTO DEL ACOMPA�AMIENTO JURIDICO\n";
		
	}
	
	
	if (document.getElementById('restablecimiento').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "*SELECCIONE SI SE LOGRA UN RESTABLECIMIENTO DE SUS DERECHOS\n";
		
	}else{
		
		if (document.getElementById('cual_restablecimiento').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESCRIBA LA RAZON\n";
			
		}
		
	}
	
	
	sw=0;
	if(document.getElementById('lugar_denuncia1').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia1').value="S";
	}else{
		document.getElementById('h_lugar_denuncia1').value="N";
	}
	
	if(document.getElementById('lugar_denuncia2').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia2').value="S";
	}else{
		
		document.getElementById('h_lugar_denuncia2').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia3').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia3').value="S";
	}else{
		document.getElementById('h_lugar_denuncia3').value="N";
		
	}
	if(document.getElementById('lugar_denuncia4').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia4').value="S";
	}else{
		document.getElementById('h_lugar_denuncia4').value="N";
		
	}
	
	if(document.getElementById('lugar_denuncia5').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia5').value="S";
	}else{
		document.getElementById('h_lugar_denuncia5').value="N";
		
	}
	if(document.getElementById('lugar_denuncia6').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia6').value="S";
	}else{
		document.getElementById('h_lugar_denuncia6').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia7').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia7').value="S";
	}else{
		document.getElementById('h_lugar_denuncia7').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia8').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia8').value="S";
		
		if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESCRIBA EN CUAL OTRA INSTITUCION ACTIVO LA RUTA\n";
			
		}
		
		
		
		
	}else{
		
		document.getElementById('h_lugar_denuncia8').value="N";
		
		document.getElementById('cual_lugar').value="";
	}
	
	
	if(sw==0){
		
		mensaje = mensaje + "* SELECCIONE AL MENOS UNA INSTITUCION A TRAVES DEL CUAL ACTIVO LA RUTA DE ATENCION\n";
	}
	
	
		
		
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			
		
		cargarEditarAcompanamiento(id);
	
	
	} else {
		alert(mensaje);
	}
		
		

}







function nuevoAcompanamiento(id) {
	var mensaje = "";
	

	if (document.getElementById('responsable').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA PERSONA QUE REALIZA LA ATENCION\n";
		
	}
	
	if (document.getElementById('fecha_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA FECHA DE LA ATENCION\n";
		
	}
	
	if (document.getElementById('departamento_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO DE LA ATENCION\n";
		
	}
	
	
	if (document.getElementById('municipio_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL MUNICIPIO DE LA ATENCION\n";
		
	}


	sw=0;
	if(document.getElementById('tipo_atencion1').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion1').value="S";
	}else{
		document.getElementById('h_tipo_atencion1').value="N";
	}
	
	if(document.getElementById('tipo_atencion2').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion2').value="S";
	}else{
		
		document.getElementById('h_tipo_atencion2').value="N";
		
	}
	
	
	if(document.getElementById('tipo_atencion3').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion3').value="S";
	}else{
		document.getElementById('h_tipo_atencion3').value="N";
		
	}
	if(document.getElementById('tipo_atencion4').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion4').value="S";
	}else{
		document.getElementById('h_tipo_atencion4').value="N";
		
	}
	
	if(document.getElementById('tipo_atencion5').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion5').value="S";
	}else{
		document.getElementById('h_tipo_atencion5').value="N";
		
	}
	if(document.getElementById('tipo_atencion6').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion6').value="S";
	}else{
		document.getElementById('h_tipo_atencion6').value="N";
		
	}

	
	if(document.getElementById('tipo_atencion7').checked==true){
		sw=1;
		document.getElementById('h_tipo_atencion7').value="S";
		
		if (document.getElementById('cual_tipo_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESPECIQUE A CUAL OTRA INSTANCIA SE REMITE\n";
			
		}
		
		
	}else{
		
		document.getElementById('h_tipo_atencion7').value="N";
		document.getElementById('cual_tipo_atencion').value="";
	}
	
	
	if(sw==0){
		
		mensaje = mensaje + "* SELECCIONE AL MENOS UN TIPO DE ATENCION\n";
	}
	
	
	
	
	if (document.getElementById('impacto').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL IMPACTO DEL ACOMPA�AMIENTO PSICOSOCIAL\n";
		
	}
	
	if (document.getElementById('juridico').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL IMPACTO DEL ACOMPA�AMIENTO JURIDICO\n";
		
	}
	
	
	if (document.getElementById('restablecimiento').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "*SELECCIONE SI SE LOGRA UN RESTABLECIMIENTO DE SUS DERECHOS\n";
		
	}else{
		
		if (document.getElementById('cual_restablecimiento').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESCRIBA LA RAZON\n";
			
		}
		
	}
	
	
	sw=0;
	if(document.getElementById('lugar_denuncia1').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia1').value="S";
	}else{
		document.getElementById('h_lugar_denuncia1').value="N";
	}
	
	if(document.getElementById('lugar_denuncia2').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia2').value="S";
	}else{
		
		document.getElementById('h_lugar_denuncia2').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia3').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia3').value="S";
	}else{
		document.getElementById('h_lugar_denuncia3').value="N";
		
	}
	if(document.getElementById('lugar_denuncia4').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia4').value="S";
	}else{
		document.getElementById('h_lugar_denuncia4').value="N";
		
	}
	
	if(document.getElementById('lugar_denuncia5').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia5').value="S";
	}else{
		document.getElementById('h_lugar_denuncia5').value="N";
		
	}
	if(document.getElementById('lugar_denuncia6').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia6').value="S";
	}else{
		document.getElementById('h_lugar_denuncia6').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia7').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia7').value="S";
	}else{
		document.getElementById('h_lugar_denuncia7').value="N";
		
	}
	
	
	if(document.getElementById('lugar_denuncia8').checked==true){
		sw=1;
		document.getElementById('h_lugar_denuncia8').value="S";
		
		if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* ESCRIBA EN CUAL OTRA INSTITUCION ACTIVO LA RUTA\n";
			
		}
		
		
		
		
	}else{
		
		document.getElementById('h_lugar_denuncia8').value="N";
		
		document.getElementById('cual_lugar').value="";
	}
	
	
	if(sw==0){
		
		mensaje = mensaje + "* SELECCIONE AL MENOS UNA INSTITUCION A TRAVES DEL CUAL ACTIVO LA RUTA DE ATENCION\n";
	}
	
	
		
		
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			
		
		cargarCrearAcompanamiento(id);
	
	
	} else {
		alert(mensaje);
	}
		
		

}


function nuevaRuta(id) {
	var mensaje = "";
	
	if(document.getElementById('denunciado').value==""){
		mensaje = mensaje + "* SELECCIONE SI LOS HECHOS FUERON DENUNCIADOS\n";
		
	}else{
		
		
		if(document.getElementById('denunciado').value=="S"){
			
					document.getElementById('h_no_denuncia1').value="";
					document.getElementById('h_no_denuncia2').value="";
					document.getElementById('h_no_denuncia3').value="";
					document.getElementById('h_no_denuncia4').value="";
					document.getElementById('h_no_denuncia5').value="";
					document.getElementById('h_no_denuncia6').value="";
					document.getElementById('h_no_denuncia7').value="";
					document.getElementById('cual_no_denuncia').value="";
					document.getElementById('interesada').value="";
					
					
					
					if (document.getElementById('denunciante').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE QUIEN DENUNCIO LOS HECHOS\n";
						
					}else{
						
						if (document.getElementById('denunciante').value.replace(/^\s*|\s*$/g, "") == "V") {
							
							document.getElementById('cual_denunciante').value="";
							document.getElementById('cual_relacion').value="";
							
							
						}else{
							
							if (document.getElementById('cual_denunciante').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESPECIQUE QUE OTRA PERSONA DENUNCIO\n";
								
							}
							
							if (document.getElementById('cual_relacion').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESPECIQUE LA RELACION DEL DUNANCIANTE CON LA VICTIMA\n";
								
							}
						}
					}
					
					sw=0;
					if(document.getElementById('lugar_denuncia1').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia1').value="S";
					}else{
						document.getElementById('h_lugar_denuncia1').value="N";
					}
					
					if(document.getElementById('lugar_denuncia2').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia2').value="S";
					}else{
						
						document.getElementById('h_lugar_denuncia2').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia3').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia3').value="S";
					}else{
						document.getElementById('h_lugar_denuncia3').value="N";
						
					}
					if(document.getElementById('lugar_denuncia4').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia4').value="S";
					}else{
						document.getElementById('h_lugar_denuncia4').value="N";
						
					}
					
					if(document.getElementById('lugar_denuncia5').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia5').value="S";
					}else{
						document.getElementById('h_lugar_denuncia5').value="N";
						
					}
					if(document.getElementById('lugar_denuncia6').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia6').value="S";
					}else{
						document.getElementById('h_lugar_denuncia6').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia7').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia7').value="S";
					}else{
						document.getElementById('h_lugar_denuncia7').value="N";
						
					}
					
					
					if(document.getElementById('lugar_denuncia8').checked==true){
						sw=1;
						document.getElementById('h_lugar_denuncia8').value="S";
						
						if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESPECIQUE EN QUE OTRO ENTE DENUNCIO LOS HECHOS\n";
							
						}
						
						
						
						
					}else{
						
						document.getElementById('h_lugar_denuncia8').value="N";
						
						document.getElementById('cual_lugar').value="";
					}
					
					
					if(sw==0){
						
						mensaje = mensaje + "* SELECCIONE AL MENOS UN ENTE DONDE DENUNCIO LOS HECHOS\n";
					}
					
					
					
					if (document.getElementById('fecha_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
//solicitud
						//mensaje = mensaje + "* ESPECIQUE LA FECHA EN QUE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('departamento_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO DONDE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('municipio_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE EL MUNICIPIO DONDE REALIZO LA DENUNCIA\n";
						
					}
					
					if (document.getElementById('atencion').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* COMO FUE LA ATENCION AL MOMENTO DE PRESENTAR LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('cual_atencion').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESCRIBA POR QUE LA CALIFICACION DE LA ATENCION AL MOMENTO DE PRESENTAR LA DENUNCIA\n";
							
						}
						
					}
					
					if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI TIENE DOCUMENTACION SOBRE LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA CUAL DOCUMENTACION SOBRE LA DENUNCIA\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_documentacion').value = "";
							
						}
						
						
					}
					
					if (document.getElementById('denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI SABE ALGO SOBRE LO QUE HA PASADO CON LA DENUNCIA\n";
						
					}else{
						
						if (document.getElementById('denuncia').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA QUE SABE\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_denuncia').value = "";
							
						}
						
						
					}
					
					
					
					if (document.getElementById('victima').value.replace(/^\s*|\s*$/g, "") == "") {
						mensaje = mensaje + "* SELECCIONE SI HA HECHO ALGUNA GESTION PARA ACREDITARSE COMO VICTIMA\n";
						
					}else{
						
						if (document.getElementById('victima').value.replace(/^\s*|\s*$/g, "") == "S") {
							
							if (document.getElementById('cual_victima').value.replace(/^\s*|\s*$/g, "") == "") {
								
								mensaje = mensaje + "* ESCRIBA ANTE QUIEN\n";
								
							}	
							
							
						}else{
							
							document.getElementById('cual_victima').value = "";
							
						}
						
						
					}
					
					
			
			
			
			
			
		}else{
			
			// no denunciados
			
			document.getElementById('denunciante').value="";
			document.getElementById('cual_denunciante').value="";
			document.getElementById('cual_relacion').value="";
			document.getElementById('h_lugar_denuncia1').value="";
			document.getElementById('h_lugar_denuncia2').value="";
			document.getElementById('h_lugar_denuncia3').value="";
			document.getElementById('h_lugar_denuncia4').value="";
			document.getElementById('h_lugar_denuncia5').value="";
			document.getElementById('h_lugar_denuncia6').value="";
			document.getElementById('h_lugar_denuncia7').value="";
			document.getElementById('h_lugar_denuncia8').value="";
			
			
			
			document.getElementById('fecha_denuncia').value="";
			document.getElementById('municipio_denuncia').value="";
			document.getElementById('atencion').value="";
			document.getElementById('cual_atencion').value="";
			document.getElementById('documentacion').value="";
			document.getElementById('cual_documentacion').value="";
			document.getElementById('denuncia').value="";
			document.getElementById('cual_denuncia').value="";
			document.getElementById('victima').value="";
			document.getElementById('cual_victima').value="";
			
			
			
			
			
			sw=0;
			if(document.getElementById('no_denuncia1').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia1').value="S";
			}else{
				document.getElementById('h_no_denuncia1').value="N";
			}
			
			if(document.getElementById('no_denuncia2').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia2').value="S";
			}else{
				
				document.getElementById('h_no_denuncia2').value="N";
				
			}
			
			
			if(document.getElementById('no_denuncia3').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia3').value="S";
			}else{
				document.getElementById('h_no_denuncia3').value="N";
				
			}
			if(document.getElementById('no_denuncia7').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia7').value="S";
			}else{
				document.getElementById('h_no_denuncia7').value="N";
				
			}
			
			if(document.getElementById('no_denuncia5').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia5').value="S";
			}else{
				document.getElementById('h_no_denuncia5').value="N";
				
			}
			if(document.getElementById('no_denuncia6').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia6').value="S";
			}else{
				document.getElementById('h_no_denuncia6').value="N";
				
			}
			
			
			if(document.getElementById('no_denuncia4').checked==true){
				sw=1;
				document.getElementById('h_no_denuncia4').value="S";
				
				if (document.getElementById('cual_no_denuncia').value.replace(/^\s*|\s*$/g, "") == "") {
					mensaje = mensaje + "* ESPECIQUE CUAL OTRA RAZON DE LA NO DENUNCIA\n";
					
				}
				
				
				
				
			}else{
				
				document.getElementById('h_no_denuncia4').value="N";
				
				document.getElementById('cual_no_denuncia').value="";
			}
			
			
			if(sw==0){
				
				mensaje = mensaje + "* SELECCIONE AL MENOS UN RAZON POR LA CUAL NO DENUNCIO\n";
			}
			
			
			
			if (document.getElementById('interesada').value.replace(/^\s*|\s*$/g, "") == "") {
				mensaje = mensaje + "* SELECCIONE SI LA VICTIMA ESTA INTERESADA EN DUNUNCIAR\n";
				
			}
			
			
			
			
			
		}
		
		
		
		
	}
	
	
		
		
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			
		
		cargarCrearRuta(id);
	
	
	} else {
		alert(mensaje);
	}
		
		

}




function nuevaProteccion(id,tipo) {
	var mensaje = "";
		
	if(document.getElementById('riesgo').value==""){
		mensaje = mensaje + "* SELECCIONE SI SE CONSIDERA EN RIESGO\n";
		
	}else{
			if(document.getElementById('riesgo').value!="" && document.getElementById('riesgo').value!="N"){
		
				
				if (document.getElementById('cual_riesgo').value.replace(/^\s*|\s*$/g, "") == "") {
					mensaje = mensaje + "* ESPECIFIQUE POR QUE SE CONSIDERA EN RIESGO\n";
				}
				
				
				
				if(document.getElementById('medida').value==""){
					
					mensaje = mensaje + "* SELECCIONE SI HA SOLICITADO ALGUNA MEDIDA DE PROTECCION\n";
					
				}else{
						if(document.getElementById('medida').value!="" && document.getElementById('medida').value!="N"){
		
							
							
							if (document.getElementById('cual_medida').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESPECIFIQUE ANTE QUIEN\n";
							}
							
							
							
								
							
						}else{
							
							
							document.getElementById('cual_medida').value = "";
						
						}
				}
				
				if(document.getElementById('proteccion').value==""){
					
					mensaje = mensaje + "* SELECCIONE SI LE HA SIDO BRINDADA ALGUNA PROTECCION\n";
					
				}else{
					
					if(document.getElementById('proteccion').value!="" && document.getElementById('proteccion').value!="N"){

					
						if (document.getElementById('cual_proteccion').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESPECIFIQUE POR QUIEN\n";
						}
						
						if (document.getElementById('tipo_medidas').value.replace(/^\s*|\s*$/g, "") == "") {
							mensaje = mensaje + "* ESCRIBA QUE TIPO DE MEDIDAS\n";
						}
						
						if(document.getElementById('adecuada').value==""){
							
							mensaje = mensaje + "* SELECCIONE SI SON ADECUADAS\n";
							
						}else{
							
							if (document.getElementById('cual_adecuada').value.replace(/^\s*|\s*$/g, "") == "") {
								mensaje = mensaje + "* ESCRIBA POR QUE SON O NO ADECUADAS\n";
							}
							
							
						}
						
												
					}else{
						
						document.getElementById('cual_proteccion').value = "";
						document.getElementById('tipo_medidas').value = "";
						document.getElementById('adecuada').value = "";
						document.getElementById('cual_adecuada').value = "";
					}
					
					
					
				}
				
				
				
				
			}else{
				
		
				document.getElementById('cual_riesgo').value="";
				document.getElementById('medida').value="";
				document.getElementById('cual_medida').value="";
				document.getElementById('proteccion').value="";
				document.getElementById('cual_proteccion').value="";
				document.getElementById('tipo_medidas').value="";
				document.getElementById('adecuada').value="";
				document.getElementById('cual_adecuada').value="";
			
			}
	}
	
		
		
		
		
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
			
		
		cargarCrearProteccion(id, tipo);
	
	
	} else {
		alert(mensaje);
	}
		
		

}




function nuevoHecho(id) {
	var mensaje = "";
		
	
	//por solicitud ya no se exige
	
	//if (document.getElementById('fecha_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		//mensaje = mensaje + "* SELECCIONE LA FECHA DE LOS HECHOS\n";
	//}
	
	//if (document.getElementById('hora').value.replace(/^\s*|\s*$/g, "") == "" || document.getElementById('minuto').value.replace(/^\s*|\s*$/g, "") == "") {
		//mensaje = mensaje + "* SELECCIONE LA HORA\n";
	//}
	
	
	if (document.getElementById('departamento_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL DEPARTAMENTO\n";
	}
	
	if (document.getElementById('municipio_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL MUNICIPIO\n";
	}
	
	
	
	if (document.getElementById('lugar_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL LUGAR DE LOS HECHOS\n";
		
		
	}else{
		
		if (document.getElementById('cual_lugar').value.replace(/^\s*|\s*$/g, "") == "") {
			
			mensaje = mensaje + "* ESPECIFIQUE CUAL LUGAR\n";
			
			
		}
			
		
	}
	
	
	if (document.getElementById('relato_hechos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESCRIBA EL RELATO DE LOS HECHOS\n";
		
	}
	
	
	
	
	if (document.getElementById('testigos').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESPECIFIQUE SI HUBO TESTIGOS\n";
		
	}else{
		
		if (document.getElementById('testigos').value.replace(/^\s*|\s*$/g, "") == "N") {

			
			document.getElementById('cuales_testigos').value = "";
		}
		
	}
	
	

	if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* ESPECIFIQUE SI TIENE DOCUMENTACION\n";
		
	}else{
		
		if (document.getElementById('documentacion').value.replace(/^\s*|\s*$/g, "") == "S") {
			
			
			sw = 0;
			if(document.getElementById('documentacion1').checked){
				sw = 1;
				document.getElementById('h_documentacion1').value="S";
								
			}else{
				
				document.getElementById('h_documentacion1').value="N";
				
			}
			
			
			
			if(document.getElementById('documentacion2').checked){
				sw = 1;
				document.getElementById('h_documentacion2').value="S";
			}else{
				
				document.getElementById('h_documentacion2').value="N";
			}
			
			
			
			if(document.getElementById('documentacion3').checked){
				sw = 1;
				document.getElementById('h_documentacion3').value="S";
			}else{
				document.getElementById('h_documentacion3').value="N";
			}
			
			
			if(document.getElementById('documentacion4').checked){
				sw = 1;
				document.getElementById('h_documentacion4').value="S";
				
				if (document.getElementById('cual_documentacion').value.replace(/^\s*|\s*$/g, "") == "") {
					
					mensaje = mensaje + "* ESPECIFIQUE CUAL OTRA DOCUMENTACION\n";
				}
				
			}else{
				
				document.getElementById('cual_documentacion').value = "";
				document.getElementById('h_documentacion4').value="N";
			}
			
			if(sw==0){
				
				mensaje = mensaje + "* SELECCIONE CUAL O CUALES DOCUMENTACIONES\n";
			}
			
			
			
			
			
			
			
		}else{
			
			document.getElementById('h_documentacion1').value="N";
			document.getElementById('h_documentacion2').value="N";
			document.getElementById('h_documentacion3').value="N";
			document.getElementById('h_documentacion4').value="N";
			document.getElementById('cual_documentacion').value = "";
			
		}
		
	}
	
	
	if (document.getElementById('tipo_hecho').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL TIPO DE HECHO\n";
		
	}else{
		
		if (document.getElementById('tipo_hecho').value.replace(/^\s*|\s*$/g, "") == "R") {

			if (document.getElementById('frecuencia_hechos').value.replace(/^\s*|\s*$/g, "") == "") {

				
				mensaje = mensaje + "* SELECCIONE LA FRECUENCIA DE LOS HECHOS\n";
			}
			
		}else{
			
			
			document.getElementById('frecuencia_hechos').value = "";
			
			
		}
		
	}
	
		
		
		
		
		if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
				cargarCrearHecho(id);
		

		} else {
			alert(mensaje);
		}
		
		

}








function nuevoAgresor(id) {
var mensaje = "";
	
	if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* CONOCE O NO EL AGRESOR ?\n";
		
		
	}else{
		
		if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "S") {
			
			if (document.getElementById('nombre').value.replace(/^\s*|\s*$/g, "") == "") {
				mensaje = mensaje + "* ESCRIBA EL NOMBRE O ALIAS DEL AGRESOR\n";
			}
			
			
		}else{
			
			document.getElementById('nombre').value =  "";
			
		}
			
		
	}
	
	if (document.getElementById('sexo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL SEXO\n";
	}
	
	
	if (document.getElementById('genero').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL GENERO\n";
	}
	
	if (document.getElementById('edad').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA EDAD\n";
	}
	
	
	if (document.getElementById('actor').value.replace(/^\s*|\s*$/g, "") == "") {

		//validacion quitada por solicitud
		//mensaje = mensaje + "* SELECCIONE UN ACTOR\n";
	}else{
		
		datos = document.getElementById('actor').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual_actor').value.replace(/^\s*|\s*$/g, "") == "") {
				//solicitud
				//mensaje = mensaje + "* ESPECIFIQUE CUAL ACTOR ?.\n";
				
			}
		}
		
		
	
		if(!(datos!=null && datos!="" && parseInt(datos[0])==7)){ //persona natural
			
			if (document.getElementById('tipo_actor').value.replace(/^\s*|\s*$/g, "") == "") {
				//solicitud
				//mensaje = mensaje + "* ESPECIFIQUE TIPO DE ACTOR(UNIDAD, FRENTE, BLOQUE, OTRO).\n";
				
			}else{
				
				if (document.getElementById('cual_tipoactor').value.replace(/^\s*|\s*$/g, "") == "") {
					
					////solicitud
					//mensaje = mensaje + "* ESPECIFIQUE A CUAL UNIDAD, FRENTE, BLOQUE, OTRO PERTENECE.\n";
				}
				
			}
		}else{
			
			document.getElementById('tipo_actor').value = "";
			document.getElementById('cual_tipoactor').value = "";
		}
		
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAgresor(id);

	} else {
		alert(mensaje);
	}

}



function nuevaAmenaza(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una amenaza\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAmenaza(id);

	} else {
		alert(mensaje);
	}

}


function nuevoNivel(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un nivel\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearNivel(id);

	} else {
		alert(mensaje);
	}

}

function nuevaActividad(id) {

	var mensaje = "";
	swrango=0;
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una ocupaci�n\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	

		
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearActividad(id);

	} else {
		alert(mensaje);
	}

}







function validarFechas2(date, date2) {
	var x = new Date();
	var y = new Date();
	var fecha = date.split("-");
	var fecha2 = date2.split("-");
	x.setFullYear(fecha[0], fecha[1] - 1, fecha[2]);
	y.setFullYear(fecha2[0], fecha2[1] - 1, fecha2[2]);

	if (x > y)
		return true;
	else
		return false;
}





function cambiarNivel(){
	
	document.getElementById("label").style.display = 'none';
	document.getElementById("cual").style.display = 'none';
	
	if(document.getElementById("niveles").value!=""){
		
		valores = document.getElementById("niveles").value.split("-");
		
		if(valores[1]=="S"){
			
			document.getElementById("label").style.display = 'block';
			document.getElementById("cual").style.display = 'block';
		}
		
		
	}
	
	
}


function cargarCrearActividad(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value;
	url = "/r-web/nuevaCreacionActividad.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('OCUPACION ACTUAL AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA OCUPACION ACTUAL');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarCrearCapacitacion(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value+"&institucion="+document.getElementById("institucion").value+"&percepcion="+document.getElementById("percepcion").value+"&tiempo="+document.getElementById("tiempo").value;
	url = "/r-web/nuevaCreacionCapacitacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('CAPACITACION AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA CAPACITACION');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearDelito(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionDelito.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('DELITO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL DELITO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearLibertad(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionLibertad.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('LIBERTAD AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA LIBERTAD');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearIndividual(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionIndividual.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO INDIVIDUAL AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO INDIVIDUAL');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearFamiliar(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionFamiliar.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO FAMILIAR AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO FAMILIAR');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearColectivo(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionColectivo.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO COLECTIVO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO COLECTIVO AGREGADO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarEditarAgresor(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id+"&caso="+ encodeURIComponent(document.getElementById("caso").value)
					   + "&conocido="+ encodeURIComponent(document.getElementById("conocido").value)
					   + "&nombre="+ encodeURIComponent(document.getElementById("nombre").value)
					   + "&sexo="+ encodeURIComponent(document.getElementById("sexo").value)
					   + "&genero="+ encodeURIComponent(document.getElementById("genero").value)
					   + "&edad="+ encodeURIComponent(document.getElementById("edad").value)
					   + "&actor="+ encodeURIComponent(document.getElementById("actor").value)
					   + "&cual_actor="+ encodeURIComponent(document.getElementById("cual_actor").value)
					   + "&tipo_actor="+ encodeURIComponent(document.getElementById("tipo_actor").value)
					   + "&cual_tipoactor="+ encodeURIComponent(document.getElementById("cual_tipoactor").value);
	url = "/r-web/nuevaEdicionAgresor.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('AGRESOR EDITADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE EDITAR EL AGRESOR');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarEditarHecho(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id
	 				   + "&caso="+ encodeURIComponent(document.getElementById("caso").value)
					   + "&fecha_hechos="+ encodeURIComponent(document.getElementById("fecha_hechos").value)
					   + "&hora="+ encodeURIComponent(document.getElementById("hora").value)
					   + "&minuto="+ encodeURIComponent(document.getElementById("minuto").value)
					   + "&tipo_hora="+ encodeURIComponent(document.getElementById("tipo_hora").value)
					   + "&municipio_hechos="+ encodeURIComponent(document.getElementById("municipio_hechos").value)
					   + "&lugar_hechos="+ encodeURIComponent(document.getElementById("lugar_hechos").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value)
					   + "&comunidad="+ encodeURIComponent(document.getElementById("comunidad").value)
					   + "&vereda="+ encodeURIComponent(document.getElementById("vereda").value)
					   + "&resguardo="+ encodeURIComponent(document.getElementById("resguardo").value)
					   + "&relato_hechos="+ encodeURIComponent(document.getElementById("relato_hechos").value)
					   + "&testigos="+ encodeURIComponent(document.getElementById("testigos").value)
					   + "&cuales_testigos="+ encodeURIComponent(document.getElementById("cuales_testigos").value)
					   + "&documentacion="+ encodeURIComponent(document.getElementById("documentacion").value)
					   + "&h_documentacion1="+ encodeURIComponent(document.getElementById("h_documentacion1").value)
					   + "&h_documentacion2="+ encodeURIComponent(document.getElementById("h_documentacion2").value)
					   + "&h_documentacion3="+ encodeURIComponent(document.getElementById("h_documentacion3").value)
					   + "&h_documentacion4="+ encodeURIComponent(document.getElementById("h_documentacion4").value)
					   + "&cual_documentacion="+ encodeURIComponent(document.getElementById("cual_documentacion").value)
					   + "&tipo_hecho="+ encodeURIComponent(document.getElementById("tipo_hecho").value)
					   + "&frecuencia_hechos="+ encodeURIComponent(document.getElementById("frecuencia_hechos").value);
	url = "/r-web/nuevaEdicionHecho.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('HECHO EDITADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE EDITAR EL HECHO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarEditarRuta(id) {
	ajax = nuevoAjax();
	
	
	
	parametros = "id=" + id
					   + "&caso="+ encodeURIComponent(document.getElementById("caso").value)
					   + "&denunciado="+ encodeURIComponent(document.getElementById("denunciado").value)
					   + "&denunciante="+ encodeURIComponent(document.getElementById("denunciante").value)
					   + "&cual_denunciante="+ encodeURIComponent(document.getElementById("cual_denunciante").value)
					   + "&cual_relacion="+ encodeURIComponent(document.getElementById("cual_relacion").value)
					   + "&h_lugar_denuncia1="+ encodeURIComponent(document.getElementById("h_lugar_denuncia1").value)
					   + "&h_lugar_denuncia2="+ encodeURIComponent(document.getElementById("h_lugar_denuncia2").value)
					   + "&h_lugar_denuncia3="+ encodeURIComponent(document.getElementById("h_lugar_denuncia3").value)
					   + "&h_lugar_denuncia4="+ encodeURIComponent(document.getElementById("h_lugar_denuncia4").value)
					   + "&h_lugar_denuncia5="+ encodeURIComponent(document.getElementById("h_lugar_denuncia5").value)
					   + "&h_lugar_denuncia6="+ encodeURIComponent(document.getElementById("h_lugar_denuncia6").value)
					   + "&h_lugar_denuncia7="+ encodeURIComponent(document.getElementById("h_lugar_denuncia7").value)
					   + "&h_lugar_denuncia8="+ encodeURIComponent(document.getElementById("h_lugar_denuncia8").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value)
					   + "&fecha_denuncia="+ encodeURIComponent(document.getElementById("fecha_denuncia").value)
					   + "&id_ciudad="+ encodeURIComponent(document.getElementById("municipio_denuncia").value)
					   + "&atencion="+ encodeURIComponent(document.getElementById("atencion").value)
					   + "&cual_atencion="+ encodeURIComponent(document.getElementById("cual_atencion").value)
					   + "&documentacion="+ encodeURIComponent(document.getElementById("documentacion").value)
					   + "&cual_documentacion="+ encodeURIComponent(document.getElementById("cual_documentacion").value)
					   + "&denuncia="+ encodeURIComponent(document.getElementById("denuncia").value)
					   + "&cual_denuncia="+ encodeURIComponent(document.getElementById("cual_denuncia").value)
					   + "&victima="+ encodeURIComponent(document.getElementById("victima").value)
					   + "&cual_victima="+ encodeURIComponent(document.getElementById("cual_victima").value)
					   + "&h_no_denuncia1="+ encodeURIComponent(document.getElementById("h_no_denuncia1").value)
					   + "&h_no_denuncia2="+ encodeURIComponent(document.getElementById("h_no_denuncia2").value)
					   + "&h_no_denuncia3="+ encodeURIComponent(document.getElementById("h_no_denuncia3").value)
					   + "&h_no_denuncia4="+ encodeURIComponent(document.getElementById("h_no_denuncia4").value)
					   + "&h_no_denuncia5="+ encodeURIComponent(document.getElementById("h_no_denuncia5").value)
					   + "&h_no_denuncia6="+ encodeURIComponent(document.getElementById("h_no_denuncia6").value)
					   + "&h_no_denuncia7="+ encodeURIComponent(document.getElementById("h_no_denuncia7").value)
					   + "&cual_no_denuncia="+ encodeURIComponent(document.getElementById("cual_no_denuncia").value)
					   + "&interesada="+ encodeURIComponent(document.getElementById("interesada").value);
					   
				

		
	url = "/r-web/nuevaEdicionRuta.jsp";
		
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('RUTA DE ATENCION EDITADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					
					alert('NO SE PUEDE EDITAR LA RUTA DE ATENCION');
					
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarEditarAcompanamiento(id) {
	ajax = nuevoAjax();
	
	
	//ES EL ID_ACASO
	parametros = "id=" + id
	 				   + "&caso="+ encodeURIComponent(document.getElementById("caso").value)
					   + "&responsable="+ encodeURIComponent(document.getElementById("responsable").value)
					   + "&fecha_atencion="+ encodeURIComponent(document.getElementById("fecha_atencion").value)
					   + "&municipio_atencion="+ encodeURIComponent(document.getElementById("municipio_atencion").value)
					   + "&h_tipo_atencion1="+ encodeURIComponent(document.getElementById("h_tipo_atencion1").value)
					   + "&h_tipo_atencion2="+ encodeURIComponent(document.getElementById("h_tipo_atencion2").value)
					   + "&h_tipo_atencion3="+ encodeURIComponent(document.getElementById("h_tipo_atencion3").value)
					   + "&h_tipo_atencion4="+ encodeURIComponent(document.getElementById("h_tipo_atencion4").value)
					   + "&h_tipo_atencion5="+ encodeURIComponent(document.getElementById("h_tipo_atencion5").value)
					   + "&h_tipo_atencion6="+ encodeURIComponent(document.getElementById("h_tipo_atencion6").value)
					   + "&h_tipo_atencion7="+ encodeURIComponent(document.getElementById("h_tipo_atencion7").value)
					   + "&cual_tipo_atencion="+ encodeURIComponent(document.getElementById("cual_tipo_atencion").value)
					   + "&impacto="+ encodeURIComponent(document.getElementById("impacto").value)
					   + "&juridico="+ encodeURIComponent(document.getElementById("juridico").value)
					   + "&restablecimiento="+ encodeURIComponent(document.getElementById("restablecimiento").value)
					   + "&cual_restablecimiento="+ encodeURIComponent(document.getElementById("cual_restablecimiento").value)
					   + "&h_lugar_denuncia1="+ encodeURIComponent(document.getElementById("h_lugar_denuncia1").value)
					   + "&h_lugar_denuncia2="+ encodeURIComponent(document.getElementById("h_lugar_denuncia2").value)
					   + "&h_lugar_denuncia3="+ encodeURIComponent(document.getElementById("h_lugar_denuncia3").value)
					   + "&h_lugar_denuncia4="+ encodeURIComponent(document.getElementById("h_lugar_denuncia4").value)
					   + "&h_lugar_denuncia5="+ encodeURIComponent(document.getElementById("h_lugar_denuncia5").value)
					   + "&h_lugar_denuncia6="+ encodeURIComponent(document.getElementById("h_lugar_denuncia6").value)
					   + "&h_lugar_denuncia7="+ encodeURIComponent(document.getElementById("h_lugar_denuncia7").value)
					   + "&h_lugar_denuncia8="+ encodeURIComponent(document.getElementById("h_lugar_denuncia8").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value);
					   
				

		
	url = "/r-web/nuevaEdicionAcompanamiento.jsp";
		
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ACOMPA�AMIENTO PSICOSOCIAL EDITADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					
					if (parseInt(document.getElementById("hdnExito").value) == 2) {
						alert('NO SE PUEDE EDITAR EL ACOMPA�AMIENTO PSICOSOCIAL.');
					}else{
						
							
						alert('NO SE PUEDE EDITAR EL ACOMPA�AMIENTO PSICOSOCIAL');
						
						
					}
					
					
					
					
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearAcompanamiento(id) {
	ajax = nuevoAjax();
	
	
	//ES EL ID_ACASO
	parametros = "id=" + id 
					   + "&responsable="+ encodeURIComponent(document.getElementById("responsable").value)
					   + "&fecha_atencion="+ encodeURIComponent(document.getElementById("fecha_atencion").value)
					   + "&municipio_atencion="+ encodeURIComponent(document.getElementById("municipio_atencion").value)
					   + "&h_tipo_atencion1="+ encodeURIComponent(document.getElementById("h_tipo_atencion1").value)
					   + "&h_tipo_atencion2="+ encodeURIComponent(document.getElementById("h_tipo_atencion2").value)
					   + "&h_tipo_atencion3="+ encodeURIComponent(document.getElementById("h_tipo_atencion3").value)
					   + "&h_tipo_atencion4="+ encodeURIComponent(document.getElementById("h_tipo_atencion4").value)
					   + "&h_tipo_atencion5="+ encodeURIComponent(document.getElementById("h_tipo_atencion5").value)
					   + "&h_tipo_atencion6="+ encodeURIComponent(document.getElementById("h_tipo_atencion6").value)
					   + "&h_tipo_atencion7="+ encodeURIComponent(document.getElementById("h_tipo_atencion7").value)
					   + "&cual_tipo_atencion="+ encodeURIComponent(document.getElementById("cual_tipo_atencion").value)
					   + "&impacto="+ encodeURIComponent(document.getElementById("impacto").value)
					   + "&juridico="+ encodeURIComponent(document.getElementById("juridico").value)
					   + "&restablecimiento="+ encodeURIComponent(document.getElementById("restablecimiento").value)
					   + "&cual_restablecimiento="+ encodeURIComponent(document.getElementById("cual_restablecimiento").value)
					   + "&h_lugar_denuncia1="+ encodeURIComponent(document.getElementById("h_lugar_denuncia1").value)
					   + "&h_lugar_denuncia2="+ encodeURIComponent(document.getElementById("h_lugar_denuncia2").value)
					   + "&h_lugar_denuncia3="+ encodeURIComponent(document.getElementById("h_lugar_denuncia3").value)
					   + "&h_lugar_denuncia4="+ encodeURIComponent(document.getElementById("h_lugar_denuncia4").value)
					   + "&h_lugar_denuncia5="+ encodeURIComponent(document.getElementById("h_lugar_denuncia5").value)
					   + "&h_lugar_denuncia6="+ encodeURIComponent(document.getElementById("h_lugar_denuncia6").value)
					   + "&h_lugar_denuncia7="+ encodeURIComponent(document.getElementById("h_lugar_denuncia7").value)
					   + "&h_lugar_denuncia8="+ encodeURIComponent(document.getElementById("h_lugar_denuncia8").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value);
					   
				

		
	url = "/r-web/nuevaCreacionAcompanamiento.jsp";
		
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ACOMPA�AMIENTO PSICOSOCIAL AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					
					if (parseInt(document.getElementById("hdnExito").value) == 2) {
						alert('NO SE PUEDE AGREGAR EL ACOMPA�AMIENTO PSICOSOCIAL.');
					}else{
						
							
						alert('NO SE PUEDE AGREGAR EL ACOMPA�AMIENTO PSICOSOCIAL');
						
						
					}
					
					
					
					
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearRuta(id) {
	ajax = nuevoAjax();
	
	
	
	parametros = "id=" + id
					   + "&denunciado="+ encodeURIComponent(document.getElementById("denunciado").value)
					   + "&denunciante="+ encodeURIComponent(document.getElementById("denunciante").value)
					   + "&cual_denunciante="+ encodeURIComponent(document.getElementById("cual_denunciante").value)
					   + "&cual_relacion="+ encodeURIComponent(document.getElementById("cual_relacion").value)
					   + "&h_lugar_denuncia1="+ encodeURIComponent(document.getElementById("h_lugar_denuncia1").value)
					   + "&h_lugar_denuncia2="+ encodeURIComponent(document.getElementById("h_lugar_denuncia2").value)
					   + "&h_lugar_denuncia3="+ encodeURIComponent(document.getElementById("h_lugar_denuncia3").value)
					   + "&h_lugar_denuncia4="+ encodeURIComponent(document.getElementById("h_lugar_denuncia4").value)
					   + "&h_lugar_denuncia5="+ encodeURIComponent(document.getElementById("h_lugar_denuncia5").value)
					   + "&h_lugar_denuncia6="+ encodeURIComponent(document.getElementById("h_lugar_denuncia6").value)
					   + "&h_lugar_denuncia7="+ encodeURIComponent(document.getElementById("h_lugar_denuncia7").value)
					   + "&h_lugar_denuncia8="+ encodeURIComponent(document.getElementById("h_lugar_denuncia8").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value)
					   + "&fecha_denuncia="+ encodeURIComponent(document.getElementById("fecha_denuncia").value)
					   + "&id_ciudad="+ encodeURIComponent(document.getElementById("municipio_denuncia").value)
					   + "&atencion="+ encodeURIComponent(document.getElementById("atencion").value)
					   + "&cual_atencion="+ encodeURIComponent(document.getElementById("cual_atencion").value)
					   + "&documentacion="+ encodeURIComponent(document.getElementById("documentacion").value)
					   + "&cual_documentacion="+ encodeURIComponent(document.getElementById("cual_documentacion").value)
					   + "&denuncia="+ encodeURIComponent(document.getElementById("denuncia").value)
					   + "&cual_denuncia="+ encodeURIComponent(document.getElementById("cual_denuncia").value)
					   + "&victima="+ encodeURIComponent(document.getElementById("victima").value)
					   + "&cual_victima="+ encodeURIComponent(document.getElementById("cual_victima").value)
					   + "&h_no_denuncia1="+ encodeURIComponent(document.getElementById("h_no_denuncia1").value)
					   + "&h_no_denuncia2="+ encodeURIComponent(document.getElementById("h_no_denuncia2").value)
					   + "&h_no_denuncia3="+ encodeURIComponent(document.getElementById("h_no_denuncia3").value)
					   + "&h_no_denuncia4="+ encodeURIComponent(document.getElementById("h_no_denuncia4").value)
					   + "&h_no_denuncia5="+ encodeURIComponent(document.getElementById("h_no_denuncia5").value)
					   + "&h_no_denuncia6="+ encodeURIComponent(document.getElementById("h_no_denuncia6").value)
					   + "&h_no_denuncia7="+ encodeURIComponent(document.getElementById("h_no_denuncia7").value)
					   + "&cual_no_denuncia="+ encodeURIComponent(document.getElementById("cual_no_denuncia").value)
					   + "&interesada="+ encodeURIComponent(document.getElementById("interesada").value);
					   
				

		
	url = "/r-web/nuevaCreacionRuta.jsp";
		
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('RUTA DE ATENCION AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					
					if (parseInt(document.getElementById("hdnExito").value) == 2) {
						alert('NO SE PUEDE AGREGAR LA RUTA DE ATENCION. YA EXISTE UNA RUTA CON HECHO NO DENUNCIADO.');
					}else{
						
						if (parseInt(document.getElementById("hdnExito").value) == 3) {
							alert('NO SE PUEDE AGREGAR LA RUTA DE ATENCION. YA EXISTEN RUTAS CON HECHOS DENUNCIADOS PARA QUE AGREGUE UNA NO DENUNCIADA.');
						}else{
							
							alert('NO SE PUEDE AGREGAR LA RUTA DE ATENCION');
						}
						
						
					}
					
					
					
					
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearProteccion(id,tipo) {
	ajax = nuevoAjax();
	
	
	
	parametros = "id=" + id
					   + "&riesgo="+ encodeURIComponent(document.getElementById("riesgo").value)
					   + "&cual_riesgo="+ encodeURIComponent(document.getElementById("cual_riesgo").value)
					   + "&medida="+ encodeURIComponent(document.getElementById("medida").value)
					   + "&cual_medida="+ encodeURIComponent(document.getElementById("cual_medida").value)
					   + "&proteccion="+ encodeURIComponent(document.getElementById("proteccion").value)
					   + "&cual_proteccion="+ encodeURIComponent(document.getElementById("cual_proteccion").value)
					   + "&tipo_medidas="+ encodeURIComponent(document.getElementById("tipo_medidas").value)
					   + "&adecuada="+ encodeURIComponent(document.getElementById("adecuada").value)
					   + "&cual_adecuada="+ encodeURIComponent(document.getElementById("cual_adecuada").value);
	if(tipo=="crear"){
		
		url = "/r-web/nuevaCreacionProteccion.jsp";
		
	}else{
		
		//editar
		url = "/r-web/nuevaEdicionProteccion.jsp";
		
	}
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('PROTECCION ACTUALIZADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE ACTUALIZAR LA PROTECCION');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearHecho(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id
					   + "&fecha_hechos="+ encodeURIComponent(document.getElementById("fecha_hechos").value)
					   + "&hora="+ encodeURIComponent(document.getElementById("hora").value)
					   + "&minuto="+ encodeURIComponent(document.getElementById("minuto").value)
					   + "&tipo_hora="+ encodeURIComponent(document.getElementById("tipo_hora").value)
					   + "&municipio_hechos="+ encodeURIComponent(document.getElementById("municipio_hechos").value)
					   + "&lugar_hechos="+ encodeURIComponent(document.getElementById("lugar_hechos").value)
					   + "&cual_lugar="+ encodeURIComponent(document.getElementById("cual_lugar").value)
					   + "&comunidad="+ encodeURIComponent(document.getElementById("comunidad").value)
					   + "&vereda="+ encodeURIComponent(document.getElementById("vereda").value)
					   + "&resguardo="+ encodeURIComponent(document.getElementById("resguardo").value)
					   + "&relato_hechos="+ encodeURIComponent(document.getElementById("relato_hechos").value)
					   + "&testigos="+ encodeURIComponent(document.getElementById("testigos").value)
					   + "&cuales_testigos="+ encodeURIComponent(document.getElementById("cuales_testigos").value)
					   + "&documentacion="+ encodeURIComponent(document.getElementById("documentacion").value)
					   + "&h_documentacion1="+ encodeURIComponent(document.getElementById("h_documentacion1").value)
					   + "&h_documentacion2="+ encodeURIComponent(document.getElementById("h_documentacion2").value)
					   + "&h_documentacion3="+ encodeURIComponent(document.getElementById("h_documentacion3").value)
					   + "&h_documentacion4="+ encodeURIComponent(document.getElementById("h_documentacion4").value)
					   + "&cual_documentacion="+ encodeURIComponent(document.getElementById("cual_documentacion").value)
					   + "&tipo_hecho="+ encodeURIComponent(document.getElementById("tipo_hecho").value)
					   + "&frecuencia_hechos="+ encodeURIComponent(document.getElementById("frecuencia_hechos").value);
	url = "/r-web/nuevaCreacionHecho.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('HECHO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL HECHO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearAgresor(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id
					   + "&conocido="+ encodeURIComponent(document.getElementById("conocido").value)
					   + "&nombre="+ encodeURIComponent(document.getElementById("nombre").value)
					   + "&sexo="+ encodeURIComponent(document.getElementById("sexo").value)
					   + "&genero="+ encodeURIComponent(document.getElementById("genero").value)
					   + "&edad="+ encodeURIComponent(document.getElementById("edad").value)
					   + "&actor="+ encodeURIComponent(document.getElementById("actor").value)
					   + "&cual_actor="+ encodeURIComponent(document.getElementById("cual_actor").value)
					   + "&tipo_actor="+ encodeURIComponent(document.getElementById("tipo_actor").value)
					   + "&cual_tipoactor="+ encodeURIComponent(document.getElementById("cual_tipoactor").value);
	url = "/r-web/nuevaCreacionAgresor.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('AGRESOR AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL AGRESOR');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarCrearAmenaza(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionAmenaza.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('AMENAZA AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA AMENAZA');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearNivel(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/r-web/nuevaCreacionNivel.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('NIVEL DE ESTUDIO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL NIVEL DE ESTUDIO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearParticipacion(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value;
	url = "/r-web/nuevaCreacionParticipacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ORGANIZACION AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA ORGANIZACION');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function nuevoAdmin() {

	var mensaje = "";

	if (document.getElementById('txtDocumento').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL DOCUMENTO DE IDENTIFICACION\n";
	}

	if (document.getElementById('txtNombre1').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL PRIMER NOMBRE\n";
	}

	if (document.getElementById('txtApellido1').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL PRIMER APELLIDO\n";
	}

	if (document.getElementById('txtCorreo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL CORREO ELECTRONICO\n";
	} else {
		isEmailAddress2(document.getElementById('txtCorreo'), 'txtCorreo');
		mensaje = mensaje + mensaje3;
	}

	var claveIncorrecta = 0;
	if (document.getElementById("txtClave").value == "") {
		mensaje = mensaje + "* DIGITE UNA NUEVA CLAVEa\n";
		claveIncorrecta = 1;
	}
	if (claveIncorrecta == 0
			&& document.getElementById("txtClave2").value == "") {
		mensaje = mensaje + "* DEBE DIGITAR NUEVAMENTE LA CLAVE\n";
		claveIncorrecta = 2;
	}
	if (claveIncorrecta == 0
			&& document.getElementById("txtClave").value != document
					.getElementById("txtClave2").value) {
		mensaje = mensaje + "* LAS CLAVES NO COINCIDEN\n";
	} else {
		if (claveIncorrecta == 0
				&& document.getElementById("txtClave").value.length < 4) {
			mensaje = mensaje
					+ "* LA CLAVE DEBE TENER POR LO MENOS 4 CARACTERES\n";
		}
	}

	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAdmin();

	} else {
		alert(mensaje);
	}

}

function cargarCrearMC(id_mujer) {
	ajax = nuevoAjax();
	parametros = "id_mujer=" + id_mujer;
	url = "/r-web/nuevaCreacionMC.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('NUEVO CASO PARA LA MUJER CREADO EXITOSAMENTE');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {  
					alert('NO SE PUEDE CREAR EL CASO');
					window.close();
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearAdmin() {
	ajax = nuevoAjax();
	parametros = "pn=" + document.getElementById("txtNombre1").value + "&sn="
			+ document.getElementById("txtNombre2").value + "&pa="
			+ document.getElementById("txtApellido1").value + "&sa="
			+ document.getElementById("txtApellido2").value + "&correo="
			+ document.getElementById("txtCorreo").value + "&clave="
			+ document.getElementById("txtClave").value + "&doc="
			+ document.getElementById("txtDocumento").value;
	url = "/r-web/nuevaCreacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ADMINISTRADOR(A) CREADO CON EXITO');
					window.opener.cargarAdministradores();
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE CREAR EL ADMINISTRADOR CON ESE DOCUMENTO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}




function nuevoAjax() {
	var xmlhttp = false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // Creacion del objeto
		// AJAX para navegadores
		// no IE.
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Creacion del
			// objet AJAX
			// para IE.
		} catch (E) {
			xmlhttp = false;
		}
	}

	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}



function seleccionarCombo(numero, valor) {

	document.getElementById("control" + numero).value = "" + valor;
}


function cargarEliminarCaso(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR EL CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarCaso.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('CASO ELIMINADO CON EXITO');
						document.form1.submit();

					} else {
						alert('NO SE PUEDE ELIMINAR EL CASO PUES TIENE ASOCIADA CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarMujer(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR LA HOJA DE VIDA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarMujer.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando hoja de vida espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('HOJA DE VIDA ELIMINADA CON EXITO');
						cargarMujeres();

					} else {
						alert('NO SE PUEDE ELIMINAR LA HOJA DE VIDA PUES TIENE ASOCIADA CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarMC(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL LA MUJER DEL CURSO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarMC.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando tema del curso espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('MUJER DEL CURSO ELIMINADA CON EXITO');
						cargarMujeresCurso(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA MUJER DEL CURSO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}






function cargarEliminarActividad(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA OCUPACION ACTUAL SELECCIONADA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarActividad.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('OCUPACION ACTUAL ELIMINADA CON EXITO');
						cargarActividades(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA OCUPACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarParticipaciones(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA ORGANIZACION REGISTRADA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarParticipacion.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('ORGANIZACION ELIMINADA CON EXITO');
						cargarParticipaciones(curso);

					} else {
						
						alert('NO SE PUEDE ELIMINAR LA ORGANIZACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarCapacitacion(admin, curso) {
 
	if (confirm('REALMENTE DESEA ELIMINAR LA CAPACITACION RECIBIDA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarCapacitacion.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert("CAPACITACION ELIMINADA CON EXITO");
						cargarCapacitaciones(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA CAPACITACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarDelito(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL DELITO DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarDelito.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('DELITO ELIMINADO CON EXITO');
						cargarDelitos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL DELITO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarLibertad(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA LIBERTAD DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarLibertad.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('LIBERTAD ELIMINADA CON EXITO');
						cargarLibertades(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA LIBERTAD PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarIndividual(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO INDIVIDUAL DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarIndividual.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO INDIVIDUAL ELIMINADO CON EXITO');
						cargarIndividuales(curso);  

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO INDIVIDUAL PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarFamiliar(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO FAMILIAR DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarFamiliar.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO FAMILIAR ELIMINADO CON EXITO');
						cargarFamiliares(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO FAMILIAR PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarColectivo(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO COLECTIVO DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarColectivo.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO COLECTIVO ELIMINADO CON EXITO');
						cargarColectivos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO COLECTIVO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarHecho(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL HECHO DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarHecho.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('HECHO ELIMINADO CON EXITO');
						cargarHechos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL HECHO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarAcompanamiento(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINA REL ACOMPANAMIENTO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin+"&caso="+curso;
		url = "/r-web/eliminarAcompanamiento.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('ACOMPA�AMIENTO ELIMINADO CON EXITO');
						cargarAcompanamientos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL ACOMPANAMIENTO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarRuta(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA RUTA AGREGADA A ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarRuta.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('RUTA ELIMINADA CON EXITO');
						cargarRutas(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA RUTA PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarAgresor(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL AGRESOR DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarAgresor.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('AGRESOR ELIMINADO CON EXITO');
						cargarAgresores(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL AGRESOR PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarAmenaza(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA AMENAZA DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarAmenaza.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('AMENAZA ELIMINADA CON EXITO');
						cargarAmenazas(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA AMENAZA PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarNivel(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL NIVEL EDUCATIVO DE LA MUJER?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarNivel.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('NIVEL EDUCATIVO ELIMINADO CON EXITO');
						cargarNiveles(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL NIVEL EDUCATIVO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function crearBackupOffline() {

	if (confirm('VA A CREAR UNA COPIA DE SEGURIDAD DE LA INFORMACION INGRESADA SIN CONEXION. DESEA CONTINUAR?')) {
		ajax = nuevoAjax();
		
		url = "/r-web/crearBackupOffline.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Creando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnExito').value) == 1) {
						alert('COPIA CREADA CON EXITO');
						cargarBackups();

					} else {
						alert('NO SE PUEDE CREAR LA COPIA.');

					}

				} else if (ajax.status == 404) {
					
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(null);

	}
}




function cargarEliminarAdministrador(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR EL ADMINISTRADOR?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/r-web/eliminarAdministrador.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando administrador espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('ADMINISTRADOR ELIMINADO CON EXITO');
						cargarAdministradores();

					} else {
						alert('NO SE PUEDE ELIMINAR EL ADMINISTRADOR PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function validarMujer() {
	
	
	
		try {
		
		
			//controles vac�os

			sw = 0;
			mensaje = "";
			hijaosIncorrecto = 0;
			checkLleno = 0;
		
				
			if(document.getElementById("nombres").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;
			}
			if(document.getElementById("apellidos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("tipo_identificacion").value.replace(/^\s*|\s*$/g, "") == ""){
					sw=1;
			
			}else{
				
				datos = document.getElementById('tipo_identificacion').value.split("-");
				if(datos!=null && datos[1]=="S"){
			
					if(document.getElementById("cual_tipo_documento").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
			}
			if(document.getElementById("documento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("departamento_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;		
			}
			if(document.getElementById("municipio_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("fecha_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			//sw=1;//por solicitud	
			}
			if(document.getElementById("sexo").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("genero").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("estado_civil").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				datos = document.getElementById('estado_civil').value.split("-");
				if(datos!=null && datos[1]=="S"){
			
					if(document.getElementById("cual_estado_civil").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
			}
			if(document.getElementById("etnia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("regimen").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				if(document.getElementById('regimen').value!="N"){
					
					if(document.getElementById("eps_ars").value.replace(/^\s*|\s*$/g, "") == ""){
						sw = 1;
					}else{
						
						datos = document.getElementById('eps_ars').value.split("-");
						if(datos!=null && datos[1]=="O"){
							
							if(document.getElementById("cual_eps_ars").value.replace(/^\s*|\s*$/g, "") == ""){
								sw=1;
							}
						}
						
						
					}
					
				}
			}
			if(document.getElementById("profesion").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("cabeza_hogar").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("subsidio").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				if(document.getElementById('subsidio').value!="I"){
					
					if(document.getElementById("cual_subsidio").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
				
			}
			if(document.getElementById("hijas").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				
				var h2 = parseInt(document.getElementById("hijas").value
						.replace(/^\s*|\s*$/g, ""));
				if (isNaN(h2)) {
					hijaosIncorrecto = 1;
					mensaje += "* NUMERO DE HIJAS DEBE SER NUMERICO SIN PUNTOS NI COMAS\n";
				} else {

					if (h2 < 0) {
						mensaje += "* NUMERO DE HIJAS DEBE SER MAYOR O IGUAL A CERO\n";
					}

				}
				
				
				
			}
			if(document.getElementById("hijos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				var h3 = parseInt(document.getElementById("hijos").value
						.replace(/^\s*|\s*$/g, ""));
				if (isNaN(h3)) {
					hijaosIncorrecto = 1; 
					mensaje += "* NUMERO DE HIJOS DEBE SER NUMERICO SIN PUNTOS NI COMAS\n";
				} else {

					if (h3 < 0) {
						mensaje += "* NUMERO DE HIJOS DEBE SER MAYOR O IGUAL A CERO\n";
					}

				}
				
				
			}
			if(document.getElementById("departamento_residencia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("municipio_residencia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("direccion").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("telefonos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("liderazgo").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			
			
			}else{
				
				if(document.getElementById("liderazgo").value.replace(/^\s*|\s*$/g, "") == "S"){
					
						if(document.getElementById("anos_liderazgo").value.replace(/^\s*|\s*$/g, "") == "0" && document.getElementById("meses_liderazgo").value.replace(/^\s*|\s*$/g, "") == "0"){
							
							mensaje += "* SI EJERCE LIDERAZGO POR LO MENOS DEBE SER DE 1 MES\n";
							
						}
				}
				
			}



			if (sw == 1) {
				mensaje = "* EXISTEN CAMPOS REQUERIDOS QUE DEBE DILIGENCIAR (POSEEN UN *)\n" + mensaje;
			}
			
			
			if(hijaosIncorrecto==0){
				suma = parseInt(document.getElementById("hijos").value.replace(/^\s*|\s*$/g, "")) + parseInt(document.getElementById("hijas").value.replace(/^\s*|\s*$/g, ""));
			
				document.getElementById("h_rango_edad1").value = "N";
				document.getElementById("h_rango_edad2").value = "N";
				document.getElementById("h_rango_edad3").value = "N";
				document.getElementById("h_rango_edad4").value = "N";
				document.getElementById("h_rango_edad5").value = "N";
				
				
				if(suma>0){
					checkLleno = 0;
					if(document.getElementById("rango_edad1").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad1").value = "S";
					}
					if(document.getElementById("rango_edad2").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad2").value = "S";
					}
					if(document.getElementById("rango_edad3").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad3").value = "S";
					}
					if(document.getElementById("rango_edad4").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad4").value = "S";
					}
					if(document.getElementById("rango_edad5").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad5").value = "S";
					}
					
					if(checkLleno==0){
						
						mensaje += "* DEBE SELECCIONAR POR LO MENOS UN RANGO DE EDAD\n";
					}
					
				}
				
				if(suma==1){
					checkLleno = 0;
					if(document.getElementById("rango_edad1").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad2").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad3").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad4").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad5").checked){
						checkLleno += 1;
					}
					
				    if(checkLleno>1){
						
						mensaje += "* DEBE SELECCIONAR SOLO UN RANGO DE EDAD\n";
					}
					
				}
				
			}
			
			
		
			} catch (e) {
				snumeros = 1;
				mensaje += "* EXISTE INFORMACI�N INCORRECTA, REVISE.\n";
			}
			

			// valida correo
			if(document.getElementById("correo").value.replace(/^\s*|\s*$/g, "") != ""){
					isEmailAddress2(document.getElementById('correo'), 'correo');
					mensaje = mensaje + mensaje3;
			}
	
	
			if (mensaje != "") {
				alert("CORRIJA LO SIGUIENTE:\n\n" + mensaje);
			} else {
				if (confirm('DESEA ACTUALIZAR LA INFORMACION INGRESADA ?')) {
					document.getElementById("hdnGuardarPublicacion").value = "1";
					document.form1.submit();
				}
			}
	
	
}

function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}






function cargarMujeres2() {
	ajax = nuevoAjax();
	url = "/r-web/mujeresConsultadas.jsp";

	parametros = "n="
	+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="
	+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="
	+ encodeURIComponent(document.getElementById("documento").value);
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
				
			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}






function cargarMujeres() {
	ajax = nuevoAjax();
	url = "/r-web/resultadosMujeres.jsp";
	
	parametros = "n="
	+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="
	+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="
	+ encodeURIComponent(document.getElementById("documento").value)
	+ "&variable_regreso="
	+ encodeURIComponent(document.getElementById("variable_regreso").value);
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
				//document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
				//document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCasos() {
	ajax = nuevoAjax();
	url = "/r-web/resultadosCasos.jsp";
	
	parametros = "n="+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="+ encodeURIComponent(document.getElementById("documento").value)
	+ "&etnia="+ encodeURIComponent(document.getElementById("etnia").value)
	+ "&cabeza_hogar="+ encodeURIComponent(document.getElementById("cabeza_hogar").value)
	+ "&actor="+ encodeURIComponent(document.getElementById("actor").value)
	+ "&hecho_denunciado="+ encodeURIComponent(document.getElementById("hecho_denunciado").value)
	+ "&fecha_hechos="+ encodeURIComponent(document.getElementById("fecha_hechos").value)
	+ "&fecha_hechos2="+ encodeURIComponent(document.getElementById("fecha_hechos2").value)
	+ "&responsable="+ encodeURIComponent(document.getElementById("responsable").value)
	+ "&numero_atencion="+ encodeURIComponent(document.getElementById("numero_atencion").value)
	+ "&fecha_atencion="+ encodeURIComponent(document.getElementById("fecha_atencion").value)
	+ "&fecha_atencion2="+ encodeURIComponent(document.getElementById("fecha_atencion2").value)
	+ "&departamento_hechos="+ encodeURIComponent(document.getElementById("departamento_hechos2").value)
	+ "&municipio_hechos="+ encodeURIComponent(document.getElementById("municipio_hechos2").value);
	
	  
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}




function cargarMujeresCurso(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosMujeresCurso.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cambiarVisibilidadNoDenuncia(){
	
	if(document.getElementById('no_denuncia4').checked == true){

		document.getElementById('span_cual_no_denuncia').style.display = "block";
		document.getElementById('cual_no_denuncia').style.display = "block";
		
		
	}else{
		document.getElementById('span_cual_no_denuncia').style.display = "none";
		document.getElementById('cual_no_denuncia').style.display = "none";
	
	}
}



function cambiarVisibilidadTipoAtencion(){
	
	if(document.getElementById('tipo_atencion7').checked == true){

		document.getElementById('span_tipo_atencion').style.display = "block";
		document.getElementById('cual_tipo_atencion').style.display = "block";
		
		
	}else{
		document.getElementById('span_tipo_atencion').style.display = "none";
		document.getElementById('cual_tipo_atencion').style.display = "none";
	
	}
}


function cambiarVisibilidadLugarDenuncia(){
	
	if(document.getElementById('lugar_denuncia8').checked == true){

		document.getElementById('span_cual_lugar').style.display = "block";
		document.getElementById('cual_lugar').style.display = "block";
		
		
	}else{
		document.getElementById('span_cual_lugar').style.display = "none";
		document.getElementById('cual_lugar').style.display = "none";
	
	}
}


function cambiarVisibilidadDenunciante(){
	
	
	if(document.getElementById('denunciante').value!=""){

		
		if(document.getElementById('denunciante').value=="O"){
			
			document.getElementById('span_denunciante').style.display = "block";
			document.getElementById('cual_denunciante').style.display = "block";
			document.getElementById('span_relacion').style.display = "block";
			document.getElementById('cual_relacion').style.display = "block";

		}else{
		
			document.getElementById('span_denunciante').style.display = "none";
			document.getElementById('cual_denunciante').style.display = "none";
			document.getElementById('span_relacion').style.display = "none";
			document.getElementById('cual_relacion').style.display = "none";
			
		}
		
	
		
		
	}else{
		document.getElementById('span_denunciante').style.display = "none";
		document.getElementById('cual_denunciante').style.display = "none";
		document.getElementById('span_relacion').style.display = "none";
		document.getElementById('cual_relacion').style.display = "none";
	
	}
	
}


function cambiarVisibilidadDenunciado(){
	
	
	if(document.getElementById('denunciado').value!=""){

		
		if(document.getElementById('denunciado').value=="S"){
			document.getElementById('hecho_denunciado').style.display = "block";
			document.getElementById('hecho_no_denunciado').style.display = "none";

		}else{
		
			document.getElementById('hecho_denunciado').style.display = "none";
			document.getElementById('hecho_no_denunciado').style.display = "block";
			
		}
		
	
		
		
	}else{
		document.getElementById('hecho_denunciado').style.display = "none";
		document.getElementById('hecho_no_denunciado').style.display = "none";
	
	}
	
}

function cambiarVisibilidadRestablecimientoDerechos(){
	
	
	if(document.getElementById('restablecimiento').value!=""){

		document.getElementById('span_restablecimiento').style.display = "block";
		document.getElementById('cual_restablecimiento').style.display = "block";
		
		
	}else{
		document.getElementById('span_restablecimiento').style.display = "none";
		document.getElementById('cual_restablecimiento').style.display = "none";
	
	}
	
}


function cambiarVisibilidadVictimaRuta(){
	
	
	if(document.getElementById('victima').value!="" && document.getElementById('victima').value=="S"){

		document.getElementById('span_victima').style.display = "block";
		document.getElementById('cual_victima').style.display = "block";
		
		
	}else{
		document.getElementById('span_victima').style.display = "none";
		document.getElementById('cual_victima').style.display = "none";
	
	}
	
}

function cambiarVisibilidadDenunciaRuta(){
	
	
	if(document.getElementById('denuncia').value!="" && document.getElementById('denuncia').value=="S"){

		document.getElementById('span_denuncia').style.display = "block";
		document.getElementById('cual_denuncia').style.display = "block";
		
		
	}else{
		document.getElementById('span_denuncia').style.display = "none";
		document.getElementById('cual_denuncia').style.display = "none";
	
	}
	
}


function cambiarVisibilidadDocuRura(){
	
	
	if(document.getElementById('documentacion').value!="" && document.getElementById('documentacion').value=="S"){

		document.getElementById('span_documentacion').style.display = "block";
		document.getElementById('cual_documentacion').style.display = "block";
		
		
	}else{
		document.getElementById('span_documentacion').style.display = "none";
		document.getElementById('cual_documentacion').style.display = "none";
	
	}
	
}

function cambiarVisibilidadAtecion(){
	
	
	if(document.getElementById('atencion').value!=""){

		document.getElementById('span_atencion').style.display = "block";
		document.getElementById('cual_atencion').style.display = "block";
		
		
	}else{
		document.getElementById('span_atencion').style.display = "none";
		document.getElementById('cual_atencion').style.display = "none";
	
	}
	
}

function cambiarVisibilidadTipoActor(){
	
	
	if(document.getElementById('tipo_actor').value!=""){

		document.getElementById('span_ta2').style.display = "block";
		document.getElementById('span_ta3').style.display = "block";
		
		
	}else{
		document.getElementById('span_ta2').style.display = "none";
		document.getElementById('span_ta3').style.display = "none";
	
	}
	
}


function cambiarVisibilidadFrecuencia(){
	
	
	if(document.getElementById('tipo_hecho').value!="" && document.getElementById('tipo_hecho').value!="A"){

		document.getElementById('span_frecuencia_hechos').style.display = "block";
		document.getElementById('frecuencia_hechos').style.display = "block";
	
		
		
	}else{
		document.getElementById('span_frecuencia_hechos').style.display = "none";
		document.getElementById('frecuencia_hechos').style.display = "none";
	
	
	}
	
}


function cambiarVisibilidadDocumentacion(){
	
	
	if(document.getElementById('documentacion').value!="" && document.getElementById('documentacion').value!="N"){

		document.getElementById('span_doc1').style.display = "block";
		document.getElementById('span_doc2').style.display = "block";
		document.getElementById('span_doc3').style.display = "block";
		
		
	}else{
		document.getElementById('span_doc1').style.display = "none";
		document.getElementById('span_doc2').style.display = "none";
		document.getElementById('span_doc3').style.display = "none";
	
	}
	
	cambiarVisibilidadOtraDoc();
	
}


function cambiarVisibilidadAdecuada(){
	
	
	if(document.getElementById('adecuada').value!=""){

		document.getElementById('span_adecuada2').style.display = "block";
		document.getElementById('cual_adecuada').style.display = "block";
		
			
		
	}else{
		document.getElementById('span_adecuada2').style.display = "none";
		document.getElementById('cual_adecuada').style.display = "none";
	
	}
	
}


function cambiarVisibilidadProteccion(){
	
	
	if(document.getElementById('proteccion').value!="" && document.getElementById('proteccion').value!="N"){

		document.getElementById('span_proteccion2').style.display = "block";
		document.getElementById('cual_proteccion').style.display = "block";
		document.getElementById('span_tipo_medidas').style.display = "block";
		document.getElementById('tipo_medidas').style.display = "block";
		document.getElementById('span_adecuada').style.display = "block";
		document.getElementById('adecuada').style.display = "block";
		
		
		document.getElementById('span_adecuada2').style.display = "block";
		document.getElementById('cual_adecuada').style.display = "block";
		
		cambiarVisibilidadAdecuada();
		
		
	}else{
		document.getElementById('span_proteccion2').style.display = "none";
		document.getElementById('cual_proteccion').style.display = "none";
		
		document.getElementById('span_tipo_medidas').style.display = "none";
		document.getElementById('tipo_medidas').style.display = "none";
		document.getElementById('span_adecuada').style.display = "none";
		
		document.getElementById('adecuada').style.display = "none";
		document.getElementById('span_adecuada2').style.display = "none";
		document.getElementById('cual_adecuada').style.display = "none";
	}
	
}


function cambiarVisibilidadMedida(){
	
	
	if(document.getElementById('medida').value!="" && document.getElementById('medida').value!="N"){

		document.getElementById('span_medida2').style.display = "block";
		document.getElementById('cual_medida').style.display = "block";
		
			
		
	}else{
		document.getElementById('span_medida2').style.display = "none";
		document.getElementById('cual_medida').style.display = "none";
	
	}
	
}


function cambiarVisibilidadRiesgo(){
	
	
	if(document.getElementById('riesgo').value!="" && document.getElementById('riesgo').value!="N"){

		document.getElementById('span_riesgo').style.display = "block";
		document.getElementById('cual_riesgo').style.display = "block";
		
		document.getElementById('span_medida').style.display = "block";
		document.getElementById('medida').style.display = "block";
		//document.getElementById('medida').value="";
		
		cambiarVisibilidadMedida();
		
		
		document.getElementById('span_proteccion').style.display = "block";
		document.getElementById('proteccion').style.display = "block";
		//document.getElementById('proteccion').value="";
		cambiarVisibilidadProteccion();
		
		
		
	}else{
		
		document.getElementById('span_riesgo').style.display = "none";
		document.getElementById('cual_riesgo').style.display = "none";
		document.getElementById('span_medida').style.display = "none";
		document.getElementById('medida').style.display = "none";
		document.getElementById('span_medida2').style.display = "none";
		document.getElementById('cual_medida').style.display = "none";
		document.getElementById('span_proteccion').style.display = "none";
		document.getElementById('proteccion').style.display = "none";
		document.getElementById('span_proteccion2').style.display = "none";
		document.getElementById('cual_proteccion').style.display = "none";
		document.getElementById('span_tipo_medidas').style.display = "none";
		document.getElementById('tipo_medidas').style.display = "none";
		document.getElementById('adecuada').style.display = "none";
		document.getElementById('span_adecuada').style.display = "none";
		document.getElementById('span_adecuada2').style.display = "none";
		document.getElementById('cual_adecuada').style.display = "none";
	
	}
	
}


function cambiarVisibilidadTestigos(){
	
	
	if(document.getElementById('testigos').value!="" && document.getElementById('testigos').value!="N"){

		document.getElementById('span_cuales_testigos').style.display = "block";
		document.getElementById('cuales_testigos').style.display = "block";
		
		
	}else{
		document.getElementById('span_cuales_testigos').style.display = "none";
		document.getElementById('cuales_testigos').style.display = "none";
	
	}
	
}


function cambiarVisibilidadOtraDoc(){
	
	
	if(document.getElementById('documentacion4').checked){

		document.getElementById('span_cual_documentacion').style.display = "block";
		
		
		
		
	}else{
		document.getElementById('span_cual_documentacion').style.display = "none";
		
	
	}
	
	
	
}

function cambiarVisibilidadLugarHechos(){
	
	
	if(document.getElementById('lugar_hechos').value!=""){

		document.getElementById('span_cual_lugar').style.display = "block";
		document.getElementById('cual_lugar').style.display = "block";
		
		
	}else{
		document.getElementById('span_cual_lugar').style.display = "none";
		document.getElementById('cual_lugar').style.display = "none";
	
	}
	
}


function cambiarVisibilidadConocido(){
	
	
	if(document.getElementById('conocido').value!="" && document.getElementById('conocido').value!="N"){

		document.getElementById('nombre').style.display = "block";
		document.getElementById('span_nombre').style.display = "block";
		
		
	}else{
		document.getElementById('nombre').style.display = "none";
		document.getElementById('span_nombre').style.display = "none";
	
	}
	
}




function cambiarVisibilidadLiderazgo(){
	
	
	if(document.getElementById('liderazgo').value!="" && document.getElementById('liderazgo').value!="N"){

		document.getElementById('anos_liderazgo').style.display = "block";
		document.getElementById('meses_liderazgo').style.display = "block";
		document.getElementById('span_liderazgo').style.display = "block";
		
		
	}else{
		document.getElementById('anos_liderazgo').style.display = "none";
		document.getElementById('meses_liderazgo').style.display = "none";
		document.getElementById('span_liderazgo').style.display = "none";
	}
	
}


function cambiarVisibilidadSubsidio(){
	
	
	if(document.getElementById('subsidio').value!="" && document.getElementById('subsidio').value!="I"){

		document.getElementById('span_subsidio1').style.display = "block";
		document.getElementById('span_subsidio2').style.display = "block";
	
		
	}else{
		document.getElementById('span_subsidio1').style.display = "none";
		document.getElementById('span_subsidio2').style.display = "none";
	}
	
}


function cambiarVisibilidadActor(){
	
	datos = document.getElementById('actor').value.split("-");
	if(datos!=null && datos[1]=="S"){

		document.getElementById('span_ac1').style.display = "block";
		document.getElementById('span_ac2').style.display = "block";
		
	
		
	}else{
		document.getElementById('span_ac1').style.display = "none";
		document.getElementById('span_ac2').style.display = "none";
	}
	
	if(datos!=null && datos!="" && parseInt(datos[0])!=7){
		
		document.getElementById('span_ta1').style.display = "block";
		document.getElementById('span_ta2').style.display = "block";
		document.getElementById('span_ta3').style.display = "block";
		document.getElementById('tipo_actor').style.display = "block";
		
		if(document.getElementById('tipo_actor').value!=""){

			document.getElementById('span_ta2').style.display = "block";
			document.getElementById('span_ta3').style.display = "block";
			
			
		}else{
			document.getElementById('span_ta2').style.display = "none";
			document.getElementById('span_ta3').style.display = "none";
		
		}
		
		
	}else{
		
		document.getElementById('span_ta1').style.display = "none";
		document.getElementById('span_ta2').style.display = "none";
		document.getElementById('span_ta3').style.display = "none";
		document.getElementById('tipo_actor').style.display = "none";
	}
	
	
	
}



function cambiarVisibilidadEpsArs(){
	
	datos = document.getElementById('eps_ars').value.split("-");
	if(datos!=null && datos[1]=="O"){

		document.getElementById('span_eps1').style.display = "block";
		document.getElementById('span_eps2').style.display = "block";
	
		
	}else{
		document.getElementById('span_eps1').style.display = "none";
		document.getElementById('span_eps2').style.display = "none";
	}
	
}


function cargarEpsArs() {
	ajax = nuevoAjax();

	url = "/r-web/resultadosEpsArs.jsp";
	parametros = "regimen=" + document.getElementById('regimen').value;
	
	
	if(document.getElementById('regimen').value=="" || document.getElementById('regimen').value=="N"){
		
		document.getElementById('span_eps_ars2').style.display = "none";
		document.getElementById('span_eps_ars').style.display = "none";
		document.getElementById('span_eps1').style.display = "none";
		document.getElementById('span_eps2').style.display = "none";
		
	}else{
		
		document.getElementById('span_eps_ars2').style.display = "block";
		document.getElementById('span_eps_ars').style.display = "block";
		document.getElementById('span_eps1').style.display = "block";
		document.getElementById('span_eps2').style.display = "block";
		
		
	}

	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('span_eps_ars').innerHTML = "Cargando...";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('span_eps_ars').innerHTML = "";
				document.getElementById('span_eps_ars').style.background = "";
				document.getElementById('span_eps_ars').innerHTML = ajax.responseText;
				
				cambiarVisibilidadEpsArs();

			} else if (ajax.status == 404) {
				document.getElementById('span_eps_ars').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('span_eps_ars').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarMunicipioCombo(combo_municipio,combo_departamento) {
	ajax = nuevoAjax();

	if(combo_municipio=="municipio_hechos2"){
		url = "/r-web/resultadosMunicipios2.jsp";
	}else{
		url = "/r-web/resultadosMunicipios.jsp";
	}
	
	//url = "/r-web/resultadosMunicipios.jsp";
	parametros = "departamento=" + document.getElementById(combo_departamento).value+"&nombre_combo_municipio="+combo_municipio;
	

	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('span_'+combo_municipio).innerHTML = "Cargando...";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('span_'+combo_municipio).innerHTML = "";
				document.getElementById('span_'+combo_municipio).style.background = "";
				document.getElementById('span_'+combo_municipio).innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('span_'+combo_municipio).innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('span_'+combo_municipio).innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}









function cargarActividades(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosActividades.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarParticipaciones(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosParticipaciones.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarDelitos(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosDelitos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarLibertades(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosLibertades.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarIndividuales(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosIndividuales.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarFamiliares(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosFamiliares.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarColectivos(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosColectivos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarHechos(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosHechos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarAcompanamientos(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosAcompanamientos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarRutas(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosRutas.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarAgresores(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosAgresores.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarAmenazas(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosAmenazas.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarNiveles(curso) {
	ajax = nuevoAjax();

	url = "/r-web/resultadosNiveles.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}




function cargarBackups() {
	ajax = nuevoAjax();
	url = "/r-web/resultadosBackups.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(null);
}




function cargarAdministradores() {
	ajax = nuevoAjax();
	url = "/r-web/resultadosAdministradores.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(null);
}



function cambiarVisibilidadEC(){
	
		datos = document.getElementById('estado_civil').value.split("-");
		if(datos!=null && datos[1]=="S"){
	
			document.getElementById('span_ec1').style.display = "block";
			document.getElementById('span_ec2').style.display = "block";
		
			
		}else{
			document.getElementById('span_ec1').style.display = "none";
			document.getElementById('span_ec2').style.display = "none";
		}
		
}


function cambiarVisibilidadTI(){
	if(document.getElementById('tipo_identificacion').value!=""){}
		datos = document.getElementById('tipo_identificacion').value.split("-");
		if(datos!=null && datos[1]=="S"){
	
			document.getElementById('span_ti1').style.display = "block";
			document.getElementById('span_ti2').style.display = "block";
		
			
		}else{
			document.getElementById('span_ti1').style.display = "none";
			document.getElementById('span_ti2').style.display = "none";
		}
}
	










<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.sql.*,java.util.*,java.text.SimpleDateFormat"
     session="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<jsp:useBean id="bSeguridad" class="beans.Seguridad" scope="page" />
<jsp:useBean id="bUsuario" class="beans.Usuario" scope="session" />
<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />
<%@page import="beans.Administrador"%>
<%@page import="beans.Publicacion"%>	<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <title>MUASOFT Software - RUTA PACÍFICA DE LAS MUJERES</title>
    <meta name="Description" content="MUASOFT Software - RUTA PACÍFICA DE LAS MUJERES">
<meta name="viewport" content="initial-scale=1.0,width=device-width">
    <script type="text/javascript" src="Scripts/noticias.js" charset="UTF-8"></script>
<script type="text/javascript" src="Scripts/claves.js" charset="UTF-8"></script>
<link rel="stylesheet" type="text/css" href="home_files/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="home_files/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="home_files/style.css">

<style>
.filters:before {
	width: 0% !important;
}
</style>
<style>
.fluidvids-elem {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
}

.fluidvids {
	width: 100%;
	position: relative;
}
</style>
<style>
.filters:before {
	width: 100% !important;
}
</style>
<style>
.filters:before {
	width: 100% !important;
}
</style>
<style>
.filters:before {
	width: 0% !important;
}
</style>
<style>
.filters:before {
	width: 0% !important;
}
</style>
<link rel="stylesheet" href="assets/css/font-awesome.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="css/epoch_styles.css" />
<script type="text/javascript" src="Scripts/epoch_classes.js"></script>
<script language="JavaScript">
	//Este script debe ponerse antes del Formulario
	//Empieza Calendario
	var dp_cal;
	var dp_cal2;
	window.onload = function() {
		dp_cal = new Epoch('dp_cal', 'popup', document
				.getElementById('fecha_hechos'));


		dp_cal2 = new Epoch('dp_cal2', 'popup', document
				.getElementById('fecha_hechos2'));

		dp_cal3 = new Epoch('dp_cal3', 'popup', document
				.getElementById('fecha_atencion'));

		dp_cal4 = new Epoch('dp_cal4', 'popup', document
				.getElementById('fecha_atencion2'));

	};
	//Termina Calendario
	//Esta funcion asigna el calendario al campo5  del formulario
</script>

</head>  
<!--****************************INICIO SESION************************************* -->
<%
	java.util.Date fechaActual = new java.util.Date();
	SimpleDateFormat vFormato = new SimpleDateFormat("dd'/'MMMM'/'yyyy");
	String vFechaActual = vFormato.format(fechaActual);

	String url = "";
	String field = "";
	String tipoUsuario = new String();
	String contrasena = new String();
	String usuario = new String();
	String rol = new String();
	int usuarioEncontrado = 0;

	if (session.isNew()) {
		//out.println("IdSesion: " + session.getId());
		usuario = (String) request.getParameter("usuario");
		contrasena = (String) request.getParameter("contrasena");


		if (usuario != null && !usuario.trim().equals("")) {
			usuarioEncontrado = bSeguridad.consultarExistenciaUsuario(usuario, contrasena, null).intValue();
			if (usuarioEncontrado != 0) {
				bUsuario = bSeguridad.registrarSesion(usuario, contrasena, usuarioEncontrado);
				if (bUsuario != null) {
					session.setAttribute("sesionCreada", bUsuario);
					session.setMaxInactiveInterval(7200); //2h-7200
					bUsuario = (beans.Usuario) session.getAttribute("sesionCreada");
				} else {
					session.invalidate();
					url = "notificacion.jsp";
					field = "*Su documento y/o contraseñas son incorrectos*";
				}

			} else {
				session.invalidate();
				url = "notificacion.jsp";
				field = "*Su documento y/o contraseñas son incorrectos*";
			}

		}

	} else {
		bUsuario = (beans.Usuario) session.getAttribute("sesionCreada");
		if (bUsuario == null) {
			session.invalidate();
			url = "notificacion.jsp";
			field = "Debe ingresar con su documento y contraseña...";
		}
	}

	if (!field.equals("")) {
%>
<jsp:forward page="<%=url%>">
	<jsp:param name="campo" value="<%=field%>" />
</jsp:forward>
<%
	}
	
	String tipoEgresado = "ADMINISTRADOR";
	
%>


<!--****************************FIN SESION************************************* -->
<body> <form  name="form1" id="form1" method="post"></form> 
<!--Este código debe incluirse para que despliegue el efecto en forma de baballon -->
<script type="text/javascript" src="Scripts/tool/wz_tooltip.js"></script>
<script type="text/javascript" src="Scripts/tool/tip_balloon.js"></script>


<!--HEADER-->  
	<header><img src="home_files/logo.png" alt="logo" width="220px" height="80px">
	<div class="container">
		
		<!--MENU-->
		<a href="" id="responsive-menu-button"><i class="fa fa-bars"></i></a>
		<nav class="menu" style="display: block;">
		
		<%@include file="menu.html" %>
		</nav>
		<!--END MENU-->
		<p><%=bUsuario.getPrimerNombre().trim() + " " + bUsuario.getSegundoNombre().trim() + " " + bUsuario.getPrimerApellido().trim() + " " + bUsuario.getSegundoApellido().trim()%><a
				href="#"
				onclick="document.getElementById('form1').action='index.jsp?sesion=false'; document.getElementById('form1').submit()"
				class="cerrar" style="text-decoration: none;"> (Cerrar sesión)</a>
		</p>
	</div>
	</header>
	<!--END HEADER-->
		<!--MAIN SECTION-->
	<div class="main work-page">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!--POST-->
					<div class="post">
  
						<div class="content">
							<h4>Casos</h4>
  					
<br/><br/>
<a href="#" onclick="window.open('/r-web/crearMC.jsp', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=970, height=600'); return false;" style="text-decoration:none">(Ingresar nuevo caso)</a> - <a href="imprimirFormato.jsp" target="_blank">(Impimir formato)</a><br><br>
<%
List<Object[]> actores = bAdministrarPublicaciones.getActores();
List<Administrador> administradores = bAdministrarPublicaciones.getAdministradores();
List<Object[]> etnias = bAdministrarPublicaciones.getEtnias();

List<Object[]> departamentos = bAdministrarPublicaciones.getDepartamentos();
%>

	    <center>
	    <hr width="100%">
	    <table border="1"><tr><th>Criterios sólo de consulta(cruce campos, presione consultar e infiera en los resultados)</th><tr><td>
	    
	    <table border="0" width="100%" cellpadding="2">
	    
	   			 <tr>

					<td colspan="3" style="font-weight: bold">Filtros por datos generales de la mujer:<br/></td>
					


				</tr>
	    
	    
	    
				
				<tr>

					<td>Etnia:</td>
					<td>
					<select name="etnia" id="etnia" style="width:250px">
													<option value="" selected>---</option>
												<%
												if(etnias!=null && etnias.size()>0){
													for(Object[] d: etnias){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
													

											</select>
					</td>
					<td></td>
					<td></td>


				</tr>
				
				
				
				<tr>

					<td>Nombres o parte de éste:</td>
					<td><input id="nombres" name="nombres" type="text" value="" style="width:250px"/></td>
					<td>Apellidos o parte de éste:</td>
					<td><input id="apellidos" name="apellidos" type="text" value="" style="width:250px"/></td>


				</tr>
				
				<tr>
					<td>No. identificación:</td>
					<td><input id="documento" name="documento" type="text" value="" style="width:250px"/></td>
					<td>Cabeza de hogar: </td>
					<td><select name="cabeza_hogar" id="cabeza_hogar" style="width:250px">
													<option value="" selected>---</option>
													<option value="S" >SI</option>
													<option value="N" >NO</option>
													
											</select></td>
											
										
				</tr>
				
				
				 <tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por información hechos victimizantes:<br/></td>
					


				</tr>
				
				<tr>

					<td>Amenaza:</td>
					<td>
					<select name="amenazas" id="amenazas" style="width:300px" >
	<option value="" selected>---</option>
	<% 
	List<Object[]> amenazas = bAdministrarPublicaciones.getAmenazas();
	if (amenazas!=null && amenazas.size() > 0) {
		for(Object[] c: amenazas){
			%>
			<option value="<%=c[0]%>"><%=c[1]%></option>
			<%
			
		}
		
			}
	%>
</select>
					</td>
						<td>Delito:</td>
											<td><select name="delitos" id="delitos" style="width:300px">
	<option value="" selected>---</option>
	<% 
	
	List<Object[]> delitos = bAdministrarPublicaciones.getDelitos();
	if (delitos!=null && delitos.size() > 0) {
		for(Object[] c: delitos){
			%>
			<option value="<%=c[0]%>"><%=c[1]%></option>
			<%
			
		}
		
			}
	%>
</select></td>


				</tr>
				
				
					<tr>

					<td>Libertad:</td>
					<td>
					<select name="libertades" id="libertades" style="width:300px" >
	<option value="" selected>---</option>
	<%  List<Object[]> libertades = bAdministrarPublicaciones.getLibertades(); 
	if (libertades!=null && libertades.size() > 0) {
		for(Object[] c: libertades){
			%>
			<option value="<%=c[0]%>"><%=c[1]%></option>
			<%
			
		}
		
			}
	%>
</select>
					</td>
						<td></td>
											<td></td>


				</tr>
				
				
				
				
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por información impacto psicosocial:<br/></td>
					


				</tr>
				
				<tr>

					<td>Impacto individual:</td>
					<td>
				<select name="impactosIndividuales" id="impactosIndividuales" style="width:300px" >
	<option value="" selected>---</option>
	<%  
	List<Object[]> impactosIndividuales = bAdministrarPublicaciones.getIndividuales();
	if (impactosIndividuales!=null && impactosIndividuales.size() > 0) {
		for(Object[] c: impactosIndividuales){
			%>
			<option value="<%=c[0]%>"><%=c[1]%></option>
			<%
			
		}
		
			}
	%>
</select>
					</td>
						<td>Impacto organizativo o colectivo :</td>
											<td>
											
											<select name="impactosColectivos" id="impactosColectivos" style="width:300px">
	<option value="" selected>---</option>
	<% 
	List<Object[]> impactosColectivos = bAdministrarPublicaciones.getColectivos();
	if (impactosColectivos!=null && impactosColectivos.size() > 0) {
		for(Object[] c: impactosColectivos){
			%>
			<option value="<%=c[0]%>"><%=c[1]%></option>
			<%
			
		}
		
			}
	%>
</select>
											
											
											
											</td>


				</tr>
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por agresores:<br/></td>
					


				</tr>
				
				<tr>

					<td>¿ Conoce el agresor ?:</td>
		<td><select name="conocido" id="conocido"  style="width:250px" 
			>
				<option value="" selected>---</option>
				<option value="S">SI</option>
				<option value="N">NO</option>
		</select></td>
						<td>Sexo del agresor:</td>
		<td><select name="sexo" id="sexo" style="width:250px">
				<option value="" selected>---</option>
				<option value="M">MASCULINO</option>
				<option value="F">FEMENINO</option>
				<option value="A">AMBOS</option>

		</select></td>


				</tr>
				
				
				<tr>
		
		<td>Género del agresor:</td>
		<td><select name="genero" id="genero" style="width:250px">
				<option value="" selected>---</option>
				<%
				List<Object[]> generos = bAdministrarPublicaciones.getGeneros();
			if(generos!=null && generos.size()>0){
				for(Object[] d: generos){%>
					
					<option value="<%=d[0] %>" ><%=d[1] %></option>
					
					
					<%
				}
				
			}
			%>

		</select></td>
		
		
		
		<td>Edad del agresor:</td>
		<td><select name="edad" id="edad" style="width:250px">
		<option value="">---</option>
		<option value="0">Varias</option>
		<%
		
		for(int i=10; i<=100; i++){
			%>
			
			<option value="<%=i%>"><%=i%> años</option>
			
			<%												
		}
		
		
		%>
		    
		</select>
		
		</td>
		
	</tr>
				
				
				
			<tr>
					<td>Tipo de agresor(actor):</td>
					<td>
					<select name="actor" id="actor" style="width:250px" >
							<option value="" selected>---</option>
							<%
						if(actores!=null && actores.size()>0){
							for(Object[] d: actores){%>
								<%
								if(d[2]!=null && !d[2].equals("S")){
								%>
								<option value="<%=d[0] %>" ><%=d[1] %></option>
								<%
								}
								
								
							}
							
						}
						%>
							
							
							
							
					</select>
					
					</td>	
					
					<td><span id="span_ta1" style="color: black;">Organización del actor:</span></td>
		<td><select name="tipo_actor" id="tipo_actor" style="width:250px" >
				<option value="" selected>---</option>
				<option value="B" >BLOQUE</option>
				<option value="F" >FRENTE</option>
				<option value="U" >UNIDAD</option>
				<option value="O" >OTRO</option>
		</select></td>
					
				
				</tr>
				
				
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por hechos:<br/></td>
					


				</tr>
				
				<tr>
				
		<td>Fecha desde hechos:</td>
		<td><input name="fecha_hechos" id="fecha_hechos" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="" /> <img id="cal" name="cal" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal.toggle();" /></td>
		
		
		<td>Fecha hasta hechos:</td>
		<td><input name="fecha_hechos2" id="fecha_hechos2" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="" /> <img id="cal2" name="cal2" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal2.toggle();" /></td>
				
				</tr>
				
				<tr>
											<td>Departamento hechos:</td>
											<td><select name="departamento_hechos2" id="departamento_hechos2" style="width:250px" onchange="cargarMunicipioCombo('municipio_hechos2','departamento_hechos2')">
													<option value="" selected>---</option>
												<%
												if(departamentos!=null && departamentos.size()>0){
													for(Object[] d: departamentos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
											</select></td>
											<td>Municipio hechos:</td>
											<td><span id="span_municipio_hechos2" style="color: black"><select name="municipio_hechos2" id="municipio_hechos2" style="width:250px">
																<option value="" selected>---</option>
											</select></span></td>
										</tr>
										
										
										
										<tr>
										<td>
										Nombre vereda-corregimiento o parte de este:
										</td>
										<td>	
	<input id="vereda" name="vereda" type="text"
														value="" style="width:250px"/></td>
										<td>
										¿Hay testigos?
										
										</td>
										<td>
										<select name="testigos" id="testigos" style="width:250px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
										</td>
										
										
										
										</tr>
										
										
										
										
									<tr>
									<td>¿ Tiene documentación de los hechos ?:</td>
	<td>
	
	<select name="documentacion" id="documentacion" style="width:250px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
				
		
	
	</td>
	
	<td>Tipo de hecho:</td>
	<td>
	
	<select name="tipo_hecho" id="tipo_hecho" style="width:250px" >
				<option value="" selected>---</option>
				<option value="A" >HECHO AISLADO</option>
				<option value="R" >HECHO QUE SE HA REPETIDO</option>
			
	</select>
				
				
		
	
	</td>
	
									
									</tr>
									
										
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por medidas de protección:<br/></td>
					


				</tr>
				
				<tr>
				<td>¿ Se considera en riesgo ?:</td>
	<td>
	
	<select name="riesgo" id="riesgo" style="width:120px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select></td>
	
	<td><span id="span_medida" style="color: black">¿ Ha solicitado alguna medida de protección ?:</span></td>
	<td>
	
	<select name="medida" id="medida" style="width:120px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
	</td>
	
	
				
				
				</tr>
				
				
				<tr>
				<td><span id="span_proteccion" style="color: black">¿ Le ha sido brindada alguna protección ?:</span></td>
	<td>
	
	<select name="proteccion" id="proteccion" style="width:120px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			</select></td>
				
				
				<td>
				</td>
				
				</tr>
				
				
				
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por rutas de atención:<br/></td>
					


				</tr>
				
				<tr>
				<td>Hechos denunciados: </td>
					<td><select name="hecho_denunciado" id="hecho_denunciado" style="width:250px">
													<option value="" selected>---</option>
													<option value="S" >SI</option>
													<option value="N" >NO</option>
													
											</select></td>
											
											<td>¿Sabe algo sobre lo que ha pasado con la denuncia ?:</td>
	<td>
	
	<select name="denuncia" id="denuncia" style="width:120px"  >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
		
		
	
	</td>
				
				</tr>
				
				
				<tr>
				<td>¿Ha hecho alguna gestión para acreditarse como víctima ?:</td>
	<td>
	
	<select name="victima" id="victima" style="width:120px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
		
		
	
	</td>
	
	<td>¿Donde denunció ?:</td>
	<td>
	
	<select name="donde" id="donde" style="width:120px" >
				<option value="" selected>---</option>
				<option value="lugar_denuncia1" >Fiscalía</option>
				<option value="lugar_denuncia2" >Policía</option>
				<option value="lugar_denuncia3" >Defensoría</option>
				<option value="lugar_denuncia4" >Personería</option>
				<option value="lugar_denuncia5" >Unidad de víctimas</option>
				<option value="lugar_denuncia6" >Comisaría</option>
				<option value="lugar_denuncia7" >Organización social</option>
				<option value="lugar_denuncia8" >Otra</option>
				
				
			
	</select>
		
		
	
	</td>
				
				
				
				</tr>
				
				
				
				
				
				<tr>

					<td colspan="3" style="font-weight: bold"><br/>Filtros por acompañamiento psicosocial:<br/></td>
					


				</tr>
				
				
				
				
				<tr>
					<td>Persona que realizó atención:</td>
					<td>
					<select name="responsable" id="responsable" style="width:250px" >
													<option value="" selected>---</option>
												<%
												if(administradores!=null && administradores.size()>0){
													for(Administrador d: administradores){%>
														
														<option value="<%=d.getIdAdministrador() %>" ><%=d.getPrimerNombre()+" "+d.getSegundoNombre() + " "+d.getPrimerApellido() + " "+d.getSegundoApellido() %></option>
														
														
														<%
													}
													
												}
												%>
	</select>
					
					</td>
					<td>Número de atención: </td>
					<td><select name="numero_atencion" id="numero_atencion" style="width:250px">
													<option value="" selected>---</option>
													<%
													for(int i=1; i<=100; i++){
													%>
													<option value="<%=i %>" ><%=i %></option>
													<%} %>
											</select></td>
				</tr>
				
				
				<tr>
				
		<td>Fecha desde atención:</td>
		<td><input name="fecha_atencion" id="fecha_atencion" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="" /> <img id="cal3" name="cal3" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal3.toggle();" /></td>
		
		
		<td>Fecha hasta atención:</td>
		<td><input name="fecha_atencion2" id="fecha_atencion2" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="" /> <img id="cal4" name="cal4" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal4.toggle();" /></td>
				
				</tr>
				
				
				
				<tr>
				
				<td>Tipo de atención:</td>
	<td>
	
	<select name="tipoAtencion" id="tipoAtencion" style="width:120px" >
				<option value="" selected>---</option>
				<option value="tipo_atencion1" >Atención en crisis</option>
				<option value="tipo_atencion2" >Solución de problemas de momento actual</option>
				<option value="tipo_atencion3" >Manejo de sentimientos de angustia</option>
				<option value="tipo_atencion4" >Orientación para toma de decisiones</option>
				<option value="tipo_atencion5" >Asesoría jurídica sobre las rutas de atención</option>
				<option value="tipo_atencion6" >Acompañamiento a instituciones para restabecimiento de los derechos</option>
				<option value="tipo_atencion7" >Remisión a otra instancia</option>
				
				
				
			
	</select>
		
		
	
	</td>
	
	
	<td>Impacto del acompañamiento psicosocial:</td><td><select name="impacto" id="impacto" style="width:250px" >
				<option value="" selected>---</option>
				<option value="M" >LA MUJER ESTÁ MEJOR</option>
				<option value="I" >LA MUJER SIGUE IGUAL</option>
				<option value="E" >LA MUJER EMPEORÓ</option>
	</select></td>
				
				</tr>
				
				<tr>
				<td>¿Se logra restablecimiento de sus derechos?:</td>
	<td>
	
	<select name="restablecimiento" id="restablecimiento" style="width:250px" >
				<option value="" selected>---</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
			
	</select>
		
		</td>
		<td>¿  A través de cual institución activó la ruta de atención ?:</td>
		<td>
		<select name="donde2" id="donde2" style="width:120px" >
				<option value="" selected>---</option>
				<option value="institucion1" >Fiscalía</option>
				<option value="institucion2" >Policía</option>
				<option value="institucion3" >Defensoría</option>
				<option value="institucion4" >Personería</option>
				<option value="institucion5" >Unidad de víctimas</option>
				<option value="institucion6" >Comisaría</option>
				<option value="institucion7" >Organización social</option>
				<option value="institucion8" >Otra</option>
				
				
			
	</select>
		</td>
		
		
		
		
		
				
				</tr>
			
			</table>
			</td></tr></table>
	    	
	    	    <br/>
	    	<input
									type="button" value=" Consultar, filtrar, cruzar y totalizar" onclick="cargarCasos()" />
									<hr width="100%">


	    <span id="detalleProcesos"></span>
<span id="detalleAdministradores"></span>
<input name="hdnUs" id="hdnUs" type="hidden"
	value="<%=bUsuario.getIdUsuario()%>" />


<%
	String variableRegreso = request.getParameter("variable_regreso");
%>
	<input name="variable_regreso" id="variable_regreso" type="hidden" 
	value="<%=variableRegreso%>" />
	
	<%

	if(variableRegreso==null){
		variableRegreso = "";
	}  
	
	//else{
		%>
		
		<script>
		cargarCasos();

		</script>
		
		<%
		
		
	//}
	
	%>



	    </center>

<br/>
<br/><br/><br/>

						</div>
					</div>
					<!--END POST-->


				</div>
			</div>
		</div>
	</div>
	<!--END MAIN SECTION--> 

	<!--FOOTER-->
	<footer><center>
	<div class="container">
		<img src="home_files/logo-sm.png" alt="">
		<ul class="list-inline social">
			
			
			

		</ul>
		<p>
			Contacto: comunicaciones@rutapacifica.org.co<br>http://www.rutapacifica.org.co<br>Diseñado por: quimerapps.com
		</p>
	</div></center>
	</footer>
	<!--END FOOTER-->

	<script src="home_files/jquery-1.11.0.min.js"></script>
	<script src="home_files/jquery-migrate-1.2.1.js"></script>

	<script src="home_files/smoothscroll.js"></script>
	<script src="home_files/snap.svg-min.js"></script>
	<script src="home_files/jquery.bxslider.js"></script>
	<script src="home_files/retina.min.js"></script>
	<script src="home_files/imagesloaded.pkgd.min.js"></script>
	<script src="home_files/masonry.pkgd.min.js"></script>
	<script src="home_files/classie.js"></script>
	<script src="home_files/modernizr.custom.js"></script>
	<script src="home_files/cbpGridGallery.js"></script>
	<script src="home_files/jquery.resizestop.min.js"></script>
	<script src="home_files/fluidvids.js"></script>
	<script src="home_files/doubletaptogo.js"></script>

	<script src="home_files/main.js"></script>

</body>
</html>
	

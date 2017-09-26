<%@page import="beans.Administrador"%>
<%@page import="java.util.Date"%>
<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*" import="java.util.*,java.text.SimpleDateFormat"
	session="false"%>
	<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
   <title>MUASOFT Software - RUTA PACÍFICA DE LAS MUJERES</title>
    <meta name="Description" content="MUASOFT Software - RUTA PACÍFICA DE LAS MUJERES">
  

<? header("Cache-Control: no-cache, must-revalidate");?>
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta name="resource-type" content="document" />

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="X-UA-Compatible" content="IE=7">
<script type="text/javascript" src="Scripts/noticias.js"></script>


<style type="text/css">
<!--
body {
	background-image: url();
background-color: #FBD7EB;
}
-->
</style>
<style type="text/css">
<!--
.Estilo5 {
	font-size: 12px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
}

.Estilo6 {
	font-size: 12px;
	font-weight: bold;
}
-->
</style>

<link rel="stylesheet" type="text/css" href="css/epoch_styles.css" />
<script type="text/javascript" src="Scripts/epoch_classes.js"></script>
<script language="JavaScript">
	//Este script debe ponerse antes del Formulario
	//Empieza Calendario
	var dp_cal;
	var dp_cal2;
	window.onload = function() {
		dp_cal = new Epoch('dp_cal', 'popup', document
				.getElementById('fecha_atencion'));


		

	};
	//Termina Calendario
	//Esta funcion asigna el calendario al campo5  del formulario
</script>
</head>
<body><div id="contenedor">
<%
String id = request.getParameter("id");

SimpleDateFormat vFormato2 = new SimpleDateFormat("yyy-MM-dd");
String vFechaActual2 = vFormato2.format(new Date());

List<Object[]> departamentos = bAdministrarPublicaciones.getDepartamentos();

List<Administrador> administradores = bAdministrarPublicaciones.getAdministradores();
Object[] acompanamiento = bAdministrarPublicaciones.getAcompanamiento(id);

Object[] municipio = null;
List<Object[]> municipios = null;

if(acompanamiento!=null && acompanamiento[4]!=null && !acompanamiento[4].equals("")){
	
municipio = bAdministrarPublicaciones.getCiudadCompleta(""+acompanamiento[4]);
municipios = bAdministrarPublicaciones.getMunicipios(""+municipio[2]);


}else{
	municipio = new Object[3];
	municipio[2] = "";
	
	municipios = null;
	
}


%>
<form method="post" name="form1" id="form1">  

<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%" >
<tr><td>Persona que realiza la atención*:</td>
	<td>
	
	<select name="responsable" id="responsable" style="width:250px" >
													<option value="" selected>Seleccione..</option>
												<%
												if(administradores!=null && administradores.size()>0){
													for(Administrador d: administradores){%>
														
														<option value="<%=d.getIdAdministrador() %>" ><%=d.getPrimerNombre()+" "+d.getSegundoNombre() + " "+d.getPrimerApellido() + " "+d.getSegundoApellido() %></option>
														
														
														<%
													}
													
												}
												%>
	</select>
		
		<script type="text/javascript">document.getElementById("responsable").value="<%=acompanamiento[2]%>"</script>
	
	</td>
	
	<td>Fecha de la atencion*:</td>
		<td><input name="fecha_atencion" id="fecha_atencion" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="<%=acompanamiento[3] %>" /> <img id="cal" name="cal" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal.toggle();" /></td>
	
</tr>

<tr>
											<td>Departamento atención *:</td>
											<td><select name="departamento_atencion" id="departamento_atencion" style="width:250px" onchange="cargarMunicipioCombo('municipio_atencion','departamento_atencion')">
													<option value="" selected>Seleccione..</option>
												<%
												if(departamentos!=null && departamentos.size()>0){
													for(Object[] d: departamentos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
											</select>
											
											<script>document.getElementById("departamento_atencion").value = "<%= municipio[2]%>";</script>
											
											</td>
											<td>Municipio atención *:</td>
											<td><span id="span_municipio_atencion"><select name="municipio_atencion" id="municipio_atencion" style="width:250px">
																<option value="" selected>Seleccione...</option>
																<%  if (municipios!=null && municipios.size() > 0) {
																	for(Object[] c: municipios){
																		%>
																		<option value="<%=c[0]%>"><%=c[1]%></option>
																		<%
																		
																	}
																	
																		}
																%>
											</select></span>
											
											<script>document.getElementById("municipio_atencion").value = "<%= acompanamiento[4]%>";</script>
											
											</td>
										</tr>
										
										
										



<tr><td>Tipo de atención*:</td>
	<td colspan="3">
	<input type="hidden" name="h_tipo_atencion1" id="h_tipo_atencion1"><input type="checkbox" name="tipo_atencion1" id="tipo_atencion1" value="S">Atención en crisis&nbsp;
	</td>
	</tr>
	<tr><td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion2" id="h_tipo_atencion2"><input type="checkbox" name="tipo_atencion2" id="tipo_atencion2" value="S">Solución de problemas de momento actual &nbsp;
	</td>
	</tr>
	<tr><td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion3" id="h_tipo_atencion3"><input type="checkbox" name="tipo_atencion3" id="tipo_atencion3" value="S">Manejo de sentimientos de angustia&nbsp;
	</td>
	</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion4" id="h_tipo_atencion4"><input type="checkbox" name="tipo_atencion4" id="tipo_atencion4" value="S">Orientación para toma de decisiones&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion5" id="h_tipo_atencion5"><input type="checkbox" name="tipo_atencion5" id="tipo_atencion5" value="S">Asesoría jurídica sobre las rutas de atención&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion6" id="h_tipo_atencion6"><input type="checkbox" name="tipo_atencion6" id="tipo_atencion6" value="S">Acompañamiento a instituciones para restabecimiento de los derechos&nbsp;
	</td>
</tr>

<tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_tipo_atencion7" id="h_tipo_atencion7"> <input type="checkbox" name="tipo_atencion7" id="tipo_atencion7" value="S" onclick="cambiarVisibilidadTipoAtencion()">Remisión a otra instancia&nbsp;
	
	<span id="span_tipo_atencion" style="color: black">¿ Cuál ? &nbsp;<input id="cual_tipo_atencion" name="cual_tipo_atencion" type="text"
														value="<%=acompanamiento[12]%>" style="width:250px"/></span>
														
														<script type="text/javascript">
														document.getElementById('h_tipo_atencion1').value = "<%=acompanamiento[5] %>";
														document.getElementById('h_tipo_atencion2').value = "<%=acompanamiento[6] %>";
														document.getElementById('h_tipo_atencion3').value = "<%=acompanamiento[7] %>";
														document.getElementById('h_tipo_atencion4').value = "<%=acompanamiento[8] %>";
														document.getElementById('h_tipo_atencion5').value = "<%=acompanamiento[9] %>";
														document.getElementById('h_tipo_atencion6').value = "<%=acompanamiento[10] %>";
														document.getElementById('h_tipo_atencion7').value = "<%=acompanamiento[11] %>";
														

														

														if(document.getElementById('h_tipo_atencion1').value=="S"){
															document.getElementById('tipo_atencion1').checked = true;
														}
														if(document.getElementById('h_tipo_atencion2').value=="S"){
															document.getElementById('tipo_atencion2').checked = true;
														}
														if(document.getElementById('h_tipo_atencion3').value=="S"){
															document.getElementById('tipo_atencion4').checked = true;
														}
														if(document.getElementById('h_tipo_atencion4').value=="S"){
															document.getElementById('tipo_atencion4').checked = true;
														}
														if(document.getElementById('h_tipo_atencion5').value=="S"){
															document.getElementById('tipo_atencion5').checked = true;
														}
														if(document.getElementById('h_tipo_atencion6').value=="S"){
															document.getElementById('tipo_atencion6').checked = true;
														}
														if(document.getElementById('h_tipo_atencion7').value=="S"){
															document.getElementById('tipo_atencion7').checked = true;
														}
													
														
														
														</script>
														
														
														<script type="text/javascript">cambiarVisibilidadTipoAtencion();</script>	
	</td>
</tr>



<tr>

<td>Impacto del acompañamiento psicosocial*:</td><td><select name="impacto" id="impacto" style="width:250px" >
				<option value="" selected>Seleccione..</option>
				<option value="M" >LA MUJER ESTÁ MEJOR</option>
				<option value="I" >LA MUJER SIGUE IGUAL</option>
				<option value="E" >LA MUJER EMPEORÓ</option>
	</select>
	
	<script type="text/javascript">document.getElementById("impacto").value="<%=acompanamiento[13]%>"</script>
	</td>

<td>Impacto del acompañamiento jurídico*:</td><td><select name="juridico" id="juridico" style="width:250px" >
				<option value="" selected>Seleccione..</option>
				<option value="I" >LA MUJER ES INCLUÍDA EN LAS RUTAS DE ATENCIÓN</option>
				<option value="I" >NO ES INCLUÍDA EN LAS RUTAS DE ATENCIÓN</option>
				<option value="E" >LA MUJER EMPEORÓ</option>
	</select>
	
	<script type="text/javascript">document.getElementById("juridico").value="<%=acompanamiento[14]%>"</script>
	
	</td>
	
	
	
</tr>

<tr>
<td>¿Se logra restablecimiento de sus derechos?*:</td>
	<td>
	
	<select name="restablecimiento" id="restablecimiento" style="width:250px" onchange="cambiarVisibilidadRestablecimientoDerechos()">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
			
	</select>
		<script type="text/javascript">document.getElementById("restablecimiento").value="<%=acompanamiento[15]%>"</script>
		</td><td>
	
	<span id="span_restablecimiento" style="color: black">Razón *:</span></td><td><input id="cual_restablecimiento" name="cual_restablecimiento" type="text"
														value="<%=acompanamiento[16]%>" style="width:250px"/>
														
														<script type="text/javascript">cambiarVisibilidadRestablecimientoDerechos();</script>
														</td>
</tr>




<tr><td>¿  A través de cual institución activó la ruta de atención ?*:</td>
	<td colspan="3">
	<input type="hidden" name="h_lugar_denuncia1" id="h_lugar_denuncia1"><input type="checkbox" name="lugar_denuncia1" id="lugar_denuncia1" value="S">Fiscalía&nbsp;
	</td>
	</tr>
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_lugar_denuncia2" id="h_lugar_denuncia2"><input type="checkbox" name="lugar_denuncia2" id="lugar_denuncia2" value="S">Policía&nbsp;
	
	</td>
</tr>
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_lugar_denuncia3" id="h_lugar_denuncia3"><input type="checkbox" name="lugar_denuncia3" id="lugar_denuncia3" value="S">Defensoría&nbsp;
	</td>
	</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia4" id="h_lugar_denuncia4"><input type="checkbox" name="lugar_denuncia4" id="lugar_denuncia4" value="S">Personería&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia5" id="h_lugar_denuncia5"><input type="checkbox" name="lugar_denuncia5" id="lugar_denuncia5" value="S">Unidad de víctimas&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia6" id="h_lugar_denuncia6"><input type="checkbox" name="lugar_denuncia6" id="lugar_denuncia6" value="S">Comisaría&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia7" id="h_lugar_denuncia7"><input type="checkbox" name="lugar_denuncia7" id="lugar_denuncia7" value="S">Organización social&nbsp;
	</td>
</tr>
<tr>
	<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia8" id="h_lugar_denuncia8"><input type="checkbox" name="lugar_denuncia8" id="lugar_denuncia8" value="S" onclick="cambiarVisibilidadLugarDenuncia()">Otra&nbsp;
	<span id="span_cual_lugar" style="color: black">¿ Cuál ? &nbsp;<input id="cual_lugar" name="cual_lugar" type="text"
														value="<%=acompanamiento[25]%>" style="width:250px"/></span>
			
			
			<script type="text/javascript">
														document.getElementById('h_lugar_denuncia1').value = "<%=acompanamiento[17] %>";
														document.getElementById('h_lugar_denuncia2').value = "<%=acompanamiento[18] %>";
														document.getElementById('h_lugar_denuncia3').value = "<%=acompanamiento[19] %>";
														document.getElementById('h_lugar_denuncia4').value = "<%=acompanamiento[20] %>";
														document.getElementById('h_lugar_denuncia5').value = "<%=acompanamiento[21] %>";
														document.getElementById('h_lugar_denuncia6').value = "<%=acompanamiento[22] %>";
														document.getElementById('h_lugar_denuncia7').value = "<%=acompanamiento[23] %>";
														document.getElementById('h_lugar_denuncia8').value = "<%=acompanamiento[24] %>";

														

														if(document.getElementById('h_lugar_denuncia1').value=="S"){
															document.getElementById('lugar_denuncia1').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia2').value=="S"){
															document.getElementById('lugar_denuncia2').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia3').value=="S"){
															document.getElementById('lugar_denuncia4').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia4').value=="S"){
															document.getElementById('lugar_denuncia4').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia5').value=="S"){
															document.getElementById('lugar_denuncia5').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia6').value=="S"){
															document.getElementById('lugar_denuncia6').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia7').value=="S"){
															document.getElementById('lugar_denuncia7').checked = true;
														}
														if(document.getElementById('h_lugar_denuncia8').value=="S"){
															document.getElementById('lugar_denuncia8').checked = true;
														}
														
														
														</script>
			
			
			
			<script type="text/javascript">cambiarVisibilidadLugarDenuncia();</script>	

	
	</td>
</tr>



</table>
										
										<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">

									
	<tr>
		<td colspan="4">
		<input type="hidden" id="caso" name="caso" value="<%=acompanamiento[1]%>">
		<div align="center"><span id="detalleActualizarDatos">
		<script type="text/javascript">cambiarVisibilidadDenunciado();</script>
		  <input class="searchbutton"
			name="btnActualizarDatos" id="btnActualizarDatos" type="button"
			style="cursor: hand" value=" Editar "
			onClick="editarAcompanamiento('<%=id%>'); return false;" />
			
		 
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>
</form>
</div>
</body>
</html>

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
				.getElementById('fecha_hechos'));


		

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

Object[] proteccion = bAdministrarPublicaciones.getProteccion(id);
Object[] pr = null;
if(proteccion==null){
	
	pr = new Object[10];
	for(int i=0; i<=9; i++){
		
			pr[i] = "";
		
	}
	
}else{
	
	pr=proteccion;
	
}




%>
<form method="post" name="form1" id="form1">  

	<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">
										

<tr><td>¿ Se considera en riesgo ?*:</td>
	<td>
	
	<select name="riesgo" id="riesgo" style="width:120px" onchange="cambiarVisibilidadRiesgo();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
	<script type="text/javascript">document.getElementById("riesgo").value = "<%=pr[1]%>";</script>		
		
	
	</td><td><span id="span_riesgo" style="color: black">¿ Por qué ? *:</span></td><td><input id="cual_riesgo" name="cual_riesgo" type="text"
														value="<%=pr[2]%>" style="width:250px"/>
														
														</td>
	
	

		
</tr>

<tr><td><span id="span_medida" style="color: black">¿ Ha solicitado alguna medida de protección ?*:</span></td>
	<td>
	
	<select name="medida" id="medida" style="width:120px" onchange="cambiarVisibilidadMedida();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
		<script type="text/javascript">document.getElementById("medida").value = "<%=pr[3]%>";</script>			
		
	
	</td><td><span id="span_medida2" style="color: black">¿ Ante quién ? *:</span></td><td><input id="cual_medida" name="cual_medida" type="text"
														value="<%=pr[4]%>" style="width:250px"/>
														
														</td>
	
	

		
</tr>


<tr><td><span id="span_proteccion" style="color: black">¿ Le ha sido brindada alguna protección ?*:</span></td>
	<td>
	
	<select name="proteccion" id="proteccion" style="width:120px" onchange="cambiarVisibilidadProteccion();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
	<script type="text/javascript">document.getElementById("proteccion").value = "<%=pr[5]%>";</script>				
		
	
	</td><td><span id="span_proteccion2" style="color: black">¿ Por quién ? *:</span></td><td><input id="cual_proteccion" name="cual_proteccion" type="text"
														value="<%=pr[6]%>" style="width:250px"/>
														
														</td>
	
	

		
</tr>

<tr><td><span id="span_tipo_medidas" style="color: black">¿ Que tipo de medidas ?*:</span></td>
	<td>
	
	<input id="tipo_medidas" name="tipo_medidas" type="text"
														value="<%=pr[7]%>" style="width:250px"/>
				
				
		
	
	</td>
	<td></td>
	<td></td>	
</tr>

<tr>
	<td><span id="span_adecuada" style="color: black">¿ Considera que son adecuadas ?*:</span></td>
	<td>
	
	<select name="adecuada" id="adecuada" style="width:120px" onchange="cambiarVisibilidadAdecuada();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
		<script type="text/javascript">document.getElementById("adecuada").value = "<%=pr[8]%>";</script>			
	</td>
	<td><span id="span_adecuada2" style="color: black">¿ Por qué ? *:</span></td><td><input id="cual_adecuada" name="cual_adecuada" type="text"
														value="<%=pr[9]%>" style="width:250px"/>
													
													<script type="text/javascript">cambiarVisibilidadRiesgo();</script>
														</td>
</tr>
									
	<tr>
		<td colspan="4"><div align="center"><span id="detalleActualizarDatos">
		<%if(proteccion==null){ %>
		  <input class="searchbutton"
			name="btnActualizarDatos" id="btnActualizarDatos" type="button"
			style="cursor: hand" value=" Crear "
			onClick="nuevaProteccion('<%=id%>','crear'); return false;" />
			
		<%}else{ %>
		 <input class="searchbutton"
			name="btnActualizarDatos2" id="btnActualizarDatos2" type="button"
			style="cursor: hand" value=" Editar "
			onClick="nuevaProteccion('<%=id%>','editar'); return false;" />
		<%} %>	 
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>
</form>
</div>
</body>
</html>

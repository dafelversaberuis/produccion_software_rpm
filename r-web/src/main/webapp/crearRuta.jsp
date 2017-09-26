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
				.getElementById('fecha_denuncia'));


		

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




%>
<form method="post" name="form1" id="form1">  
<div align="left">
	<table border="0" cellspacing="2" cellpadding="2"
										style="width: 40%">
										

<tr><td>¿ Los hechos fueron denunciados ?*:</td>
	<td >
	<span align="left">
	<select name="denunciado" id="denunciado" style="width:120px" onchange="cambiarVisibilidadDenunciado()">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
			</span>	

		
	
	</td>
</tr>
</table></div>
<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%" id="hecho_denunciado">
<tr><td>¿ Quién denunció los hechos?*:</td>
	<td>
	
	<select name="denunciante" id="denunciante" style="width:120px" onchange="cambiarVisibilidadDenunciante()">
				<option value="" selected>Seleccione..</option>
				<option value="V" >LA VÍCTIMA</option>
				<option value="O" >OTRA PERSONA</option>
			
	</select>
		
		
	
	</td><td><span id="span_denunciante" style="color: black">¿ Quién ? *:</span></td><td><input id="cual_denunciante" name="cual_denunciante" type="text"
														value="" style="width:250px"/>
														
														</td>
	
</tr>
<tr><td></td><td></td>
	<td><span id="span_relacion" style="color: black">Relación con la víctima *:</span></td><td><input id="cual_relacion" name="cual_relacion" type="text"
														value="" style="width:250px"/>
														<script type="text/javascript">cambiarVisibilidadDenunciante();</script>
														</td>
														
	
</tr>


<tr><td>¿  Donde denunció los hechos ?*:</td>
	
	
	
			
	<td>
	<input type="hidden" name="h_lugar_denuncia1" id="h_lugar_denuncia1"><input type="checkbox" name="lugar_denuncia1" id="lugar_denuncia1" value="S">Fiscalía&nbsp;
	<input type="hidden" name="h_lugar_denuncia2" id="h_lugar_denuncia2"><input type="checkbox" name="lugar_denuncia2" id="lugar_denuncia2" value="S">Policía&nbsp;
	<input type="hidden" name="h_lugar_denuncia3" id="h_lugar_denuncia3"><input type="checkbox" name="lugar_denuncia3" id="lugar_denuncia3" value="S">Defensoría&nbsp;
		
	</td>
	
	<td></td><td></td>

		
</tr>
<tr>
	
	
			<td></td>
	<td>
	<input type="hidden" name="h_lugar_denuncia4" id="h_lugar_denuncia4"><input type="checkbox" name="lugar_denuncia4" id="lugar_denuncia4" value="S">Personería&nbsp;
	<input type="hidden" name="h_lugar_denuncia5" id="h_lugar_denuncia5"><input type="checkbox" name="lugar_denuncia5" id="lugar_denuncia5" value="S">Unidad de víctimas&nbsp;
	<input type="hidden" name="h_lugar_denuncia6" id="h_lugar_denuncia6"><input type="checkbox" name="lugar_denuncia6" id="lugar_denuncia6" value="S">Comisaría&nbsp;

	
	</td>
	
	<td></td>
	<td></td>
	
</tr>

<tr>
<td></td> 
	<td><input type="hidden" name="h_lugar_denuncia7" id="h_lugar_denuncia7"><input type="checkbox" name="lugar_denuncia7" id="lugar_denuncia7" value="S">Organización social&nbsp;
	<input type="hidden" name="h_lugar_denuncia8" id="h_lugar_denuncia8"><input type="checkbox" name="lugar_denuncia8" id="lugar_denuncia8" value="S" onclick="cambiarVisibilidadLugarDenuncia()">Otra&nbsp;
	<span id="span_cual_lugar" style="color: black">¿ Cuál ? &nbsp;<input id="cual_lugar" name="cual_lugar" type="text"
														value="" style="width:250px"/></span>
			<script type="text/javascript">cambiarVisibilidadLugarDenuncia();</script>											
	</td>
		<td>
	</td><td></td> 
	

		
</tr>




<tr>
		<td>Fecha de la denuncia:</td>
		<td><input name="fecha_denuncia" id="fecha_denuncia" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="<%=vFechaActual2 %>" /> <img id="cal" name="cal" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal.toggle();" /></td>
												
												<td></td>
</tr>

<tr>
											<td>Departamento denuncia*:</td>
											<td><select name="departamento_denuncia" id="departamento_denuncia" style="width:250px" onchange="cargarMunicipioCombo('municipio_denuncia','departamento_denuncia')">
													<option value="" selected>Seleccione..</option>
												<%
												if(departamentos!=null && departamentos.size()>0){
													for(Object[] d: departamentos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
											</select></td>
											<td>Municipio denuncia*:</td>
											<td><span id="span_municipio_denuncia"><select name="municipio_denuncia" id="municipio_denuncia" style="width:250px">
																<option value="" selected>Seleccione...</option>
											</select></span></td>
										</tr>	
										
										
<tr><td>La atención recibida al momento de presentar la denuncia fue*:</td>
	<td>
	
	<select name="atencion" id="atencion" style="width:120px" onchange="cambiarVisibilidadAtecion()">
				<option value="" selected>Seleccione..</option>
				<option value="B" >BUENA</option>
				<option value="R" >REGULAR</option>
				<option value="M" >MALA</option>
			
	</select>
		
		
	
	</td><td><span id="span_atencion" style="color: black">¿ Por qué ? *:</span></td><td><input id="cual_atencion" name="cual_atencion" type="text"
														value="" style="width:250px"/>
														<script type="text/javascript">cambiarVisibilidadAtecion()</script>
														</td>
	
</tr>	

<tr><td>¿Tiene documentación sobre la denuncia ?*:</td>
	<td>
	
	<select name="documentacion" id="documentacion" style="width:120px" onchange="cambiarVisibilidadDocuRura()" >
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
		
		
	
	</td><td><span id="span_documentacion" style="color: black">¿ Cuál ? *:</span></td><td><input id="cual_documentacion" name="cual_documentacion" type="text"
														value="" style="width:250px"/>
														<script type="text/javascript">cambiarVisibilidadDocuRura()</script>
														</td>
	
</tr>	

<tr><td>¿Sabe algo sobre lo que ha pasado con la denuncia ?*:</td>
	<td>
	
	<select name="denuncia" id="denuncia" style="width:120px" onchange="cambiarVisibilidadDenunciaRuta()" >
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
		
		
	
	</td><td><span id="span_denuncia" style="color: black">¿ Qué sabe ? *:</span></td><td><input id="cual_denuncia" name="cual_denuncia" type="text"
														value="" style="width:250px"/>
														<script type="text/javascript">cambiarVisibilidadDenunciaRuta()</script>
														</td>
	
</tr>	
									
										
<tr><td>¿Ha hecho alguna gestión para acreditarse como víctima ?*:</td>
	<td>
	
	<select name="victima" id="victima" style="width:120px" onchange="cambiarVisibilidadVictimaRuta()">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
		
		
	
	</td><td><span id="span_victima" style="color: black">¿ Ante quién ? *:</span></td><td><input id="cual_victima" name="cual_victima" type="text"
														value="" style="width:250px" />
														<script type="text/javascript">cambiarVisibilidadVictimaRuta()</script>
														</td>
	
</tr>																						
												
</table>



<table border="0" cellspacing="2" cellpadding="2" id="hecho_no_denunciado">
	<tr><td width="26%">¿ Por qué no denunció los hechos?*:</td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia1" id="h_no_denuncia1"><input type="checkbox" name="no_denuncia1" id="no_denuncia1" value="S">Miedo a psoibles retalaiciones por el agresor
	</td>
	</tr>	
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia2" id="h_no_denuncia2"><input type="checkbox" name="no_denuncia2" id="no_denuncia2" value="S">No considera que los hechos violentos sean una violación a sus derechos humanos
	</td>
</tr>
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia3" id="h_no_denuncia3"><input type="checkbox" name="no_denuncia3" id="no_denuncia3" value="S">Vergüenza
	</td>
</tr>	

<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia5" id="h_no_denuncia5"><input type="checkbox" name="no_denuncia5" id="no_denuncia5" value="S">Prevención de habladurías
	</td>
</tr>	
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia6" id="h_no_denuncia6"><input type="checkbox" name="no_denuncia6" id="no_denuncia6" value="S">Desconocimiento de donde denunciar
	</td>
</tr>	
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia7" id="h_no_denuncia7"><input type="checkbox" name="no_denuncia7" id="no_denuncia7" value="S">Falta de credibilidad en autoridades
	</td>
</tr>
<tr><td></td>
	<td colspan="3">
	<input type="hidden" name="h_no_denuncia4" id="h_no_denuncia4"><input type="checkbox" name="no_denuncia4" id="no_denuncia4" value="S" onclick="cambiarVisibilidadNoDenuncia()">Otra&nbsp;
	<span id="span_cual_no_denuncia" style="color: black">¿ Cuál ? &nbsp;<input id="cual_no_denuncia" name="cual_no_denuncia" type="text"
														value="" style="width:250px"/></span>
														
														<script type="text/javascript">cambiarVisibilidadNoDenuncia()</script>
	</td>
</tr>	

<tr><td>¿La víctima está interesada en denunciar los hechos?*:</td>
	<td colspan="3">
	<select name="interesada" id="interesada" style="width:120px" >
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
				
				
			
	</select>
	</td>
</tr>							
</table>
										
										<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">

									
	<tr>
		<td colspan="4"><div align="center"><span id="detalleActualizarDatos">
		<script type="text/javascript">cambiarVisibilidadDenunciado();</script>
		  <input class="searchbutton"
			name="btnActualizarDatos" id="btnActualizarDatos" type="button"
			style="cursor: hand" value=" Crear "
			onClick="nuevaRuta('<%=id%>'); return false;" />
			
		 
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>
</form>
</div>
</body>
</html>

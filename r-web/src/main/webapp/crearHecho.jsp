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

List<Object[]> departamentos = bAdministrarPublicaciones.getDepartamentos();




%>
<form method="post" name="form1" id="form1">  

	<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">
										
	
	<tr>
		<td>Fecha de los hechos:</td>
		<td><input name="fecha_hechos" id="fecha_hechos" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="<%=vFechaActual2 %>" /> <img id="cal" name="cal" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal.toggle();" /></td>
		
		
		<td>
		Hora :
			</td>
		<td>
		<select name="hora" id="hora"  style="width:50px">
				<option value="" selected>HH</option>
				<%
					for(int i=1; i<=12; i++){
						String label = ""+i;
						if(i<=9){
							label = "0"+i;
						}
						%>
						<option value="<%=i%>"><%=label %></option>
						<%
					}
				%>
			
		</select>:
		<select name="minuto" id="minuto"  style="width:50px">
				<option value="" selected>MM</option>
				<%
					for(int i=0; i<=59; i++){
						String label2 = ""+i;
						if(i<=9){
							label2 = "0"+i;
						}
						%>
						<option value="<%=i%>"><%=label2 %></option>
						<%
					}
				%>
		</select> 
		<select name="tipo_hora" id="tipo_hora"  style="width:50px">
				<option value="A" selected>AM</option>
				<option value="P">PM</option>
		</select>
		
		</td>
		</tr>
	
									
										
	<tr>
											<td>Departamento *:</td>
											<td><select name="departamento_hechos" id="departamento_hechos" style="width:250px" onchange="cargarMunicipioCombo('municipio_hechos','departamento_hechos')">
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
											<td>Municipio *:</td>
											<td><span id="span_municipio_hechos"><select name="municipio_hechos" id="municipio_hechos" style="width:250px">
																<option value="" selected>Seleccione...</option>
											</select></span></td>
										</tr>
	<tr><td>Lugar de los hechos*:</td>
	<td>
	
	<select name="lugar_hechos" id="lugar_hechos" style="width:250px" onchange="cambiarVisibilidadLugarHechos();">
				<option value="" selected>Seleccione..</option>
				<option value="C" >CASA</option>
				<option value="I" >INSTITUCIÓN</option>
				<option value="O" >OTRO</option>
				
				
		</select>
	
	</td><td><span id="span_cual_lugar" style="color: black">¿ Cuál ?*:</span></td><td><input id="cual_lugar" name="cual_lugar" type="text"
														value="" style="width:250px"/>
														
														<script type="text/javascript">cambiarVisibilidadLugarHechos();</script>
														</td>
	
	

		
</tr>		


<tr><td>Comunidad (opcional):</td>
	<td>
	
	<input id="comunidad" name="comunidad" type="text"
														value="" style="width:250px"/>
				
				
		
	
	</td><td>Resguardo (opcional):</td><td><input id="resguardo" name="resguardo" type="text"
														value="" style="width:250px"/></td>
	
	

		
</tr>	

<tr><td>Vereda y/o corregimiento (opcional):</td>
	<td>
	
	<input id="vereda" name="vereda" type="text"
														value="" style="width:250px"/>
				
				
		
	
	</td><td></td><td></td>
	
	

		
</tr>	

<tr><td>Relato de los hechos*:</td>
	<td>
	
	
	</td><td></td><td></td>
	
	

		
</tr>	

<tr><td colspan="4">
<textarea rows="10" cols="125" id="relato_hechos" name="relato_hechos"></textarea>

</td>
	
	

		
</tr>	



<tr><td>¿ Hay testigos ?*:</td>
	<td>
	
	<select name="testigos" id="testigos" style="width:250px" onchange="cambiarVisibilidadTestigos();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
				
		
	
	</td><td><span id="span_cuales_testigos" style="color: black">¿ Quién/quienes ? (opcional):</span></td><td><input id="cuales_testigos" name="cuales_testigos" type="text"
														value="" style="width:250px"/>
														<script type="text/javascript">cambiarVisibilidadTestigos();</script>
														</td>
	
	

		
</tr>


<tr><td>¿ Tiene documentación de los hechos ?*:</td>
	<td>
	
	<select name="documentacion" id="documentacion" style="width:250px" onchange="cambiarVisibilidadDocumentacion();">
				<option value="" selected>Seleccione..</option>
				<option value="S" >SI</option>
				<option value="N" >NO</option>
			
	</select>
				
				
		
	
	</td><td><span id="span_doc1" style="color: black">¿ Cuáles ?:</span></td>
	<td><span id="span_doc2" style="color: black">
	<input type="hidden" name="h_documentacion1" id="h_documentacion1"><input type="checkbox" name="documentacion1" id="documentacion1" value="S">Fotos&nbsp;
	<input type="hidden" name="h_documentacion2" id="h_documentacion2"><input type="checkbox" name="documentacion2" id="documentacion2" value="S">Filmaciones&nbsp;
	<input type="hidden" name="h_documentacion3" id="h_documentacion3"><input type="checkbox" name="documentacion3" id="documentacion3" value="S">Notas de prensa&nbsp;
	</span>
	
	</td>
	
	

		
</tr>

<tr><td></td>
	<td>
	</td><td></td> 
	<td><span id="span_doc3" style="color: black">
	<input type="hidden" name="h_documentacion4" id="h_documentacion4"><input type="checkbox" name="documentacion4" id="documentacion4" value="S" onclick="cambiarVisibilidadOtraDoc()">Otra&nbsp;
	<span id="span_cual_documentacion" style="color: black">¿ Cuál ? &nbsp;<input id="cual_documentacion" name="cual_documentacion" type="text"
														value="" style="width:250px"/></span></span>
														<script type="text/javascript">cambiarVisibilidadDocumentacion(); </script>
	</td>
	
	

		
</tr>

<tr><td>Tipo de hecho*:</td>
	<td>
	
	<select name="tipo_hecho" id="tipo_hecho" style="width:250px" onchange="cambiarVisibilidadFrecuencia()">
				<option value="" selected>Seleccione..</option>
				<option value="A" >HECHO AISLADO</option>
				<option value="R" >HECHO QUE SE HA REPETIDO</option>
			
	</select>
				
				
		
	
	</td><td><span id="span_frecuencia_hechos" style="color: black">Frecuencia de los hechos*:</span></td>
	<td>
	<select name="frecuencia_hechos" id="frecuencia_hechos" style="width:250px" >
				<option value="" selected>Seleccione..</option>
				<option value="V" >DE VEZ EN CUANDO</option>
				<option value="D" >TODOS LOS DIAS</option>
				<option value="S" >TODAS LAS SEMANAS</option>
				<option value="Q" >CADA 15 DÍAS</option>
				<option value="M" >TODOS LOS MESES</option>
				<option value="T" >CADA 3 MESES</option>
				<option value="6" >CADA SEIS MESES</option>
				<option value="A" >TODOS LOS AÑOS</option>
			
	</select>
	
	<script type="text/javascript">cambiarVisibilidadFrecuencia();</script>
	</td>
	
	

		
</tr>
						
											
											
									
	<tr>
		<td colspan="4"><div align="center"><span id="detalleActualizarDatos">
		  <input class="searchbutton"
			name="btnActualizarDatos" id="btnActualizarDatos" type="button"
			style="cursor: hand" value=" Crear "
			onClick="nuevoHecho('<%=id%>'); return false;" /> 
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>
</form>
</div>
</body>
</html>

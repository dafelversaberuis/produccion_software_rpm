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
</head>
<body><div id="contenedor">
<%
String id = request.getParameter("id");


List<Object[]> generos = bAdministrarPublicaciones.getGeneros();
List<Object[]> actores = bAdministrarPublicaciones.getActores();
Object[] agresor = bAdministrarPublicaciones.getAgresor(id);

%>
<form method="post" name="form1" id="form1">  

	<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">
										
									
										
	<tr>
		<td>¿ Conoce el agresor ?*:</td>
		<td><select name="conocido" id="conocido"  style="width:250px" onchange="cambiarVisibilidadConocido();"
			>
				<option value="" selected>Seleccione...</option>
				<option value="S">SI</option>
				<option value="N">NO</option>
		</select>
		
		<script type="text/javascript">document.getElementById('conocido').value = "<%=agresor[1]%>";</script>
		</td>
		
		</tr>
		<tr>
		<td><span id="span_nombre" style="color: black;">Nombre y/o alias *:</span></td>
		<td><table><tr><td><input id="nombre" name="nombre" type="text"
			value="<%=agresor[2]%>" style="width:250px"/></td></tr>
			</table>
			<script type="text/javascript">cambiarVisibilidadConocido();</script>
			</td>
	</tr>
	
	
	<tr>
		<td>Sexo *:</td>
		<td><select name="sexo" id="sexo" style="width:250px">
				<option value="" selected>Seleccione..</option>
				<option value="M">MASCULINO</option>
				<option value="F">FEMENINO</option>
				<option value="A">AMBOS</option>

		</select>
		<script type="text/javascript">document.getElementById('sexo').value = "<%=agresor[3]%>";</script>
		</td>
		
	</tr>									
										
	<tr>
		
		<td>Género *:</td>
		<td><select name="genero" id="genero" style="width:250px">
				<option value="" selected>Seleccione..</option>
				<%
			if(generos!=null && generos.size()>0){
				for(Object[] d: generos){%>
					
					<option value="<%=d[0] %>" ><%=d[1] %></option>
					
					
					<%
				}
				
			}
			%>

		</select>
		<script type="text/javascript">document.getElementById('genero').value = "<%=agresor[4]%>";</script>
		</td>
		
	</tr>
										
										
										
										
	<tr>
		<td>Edad *:</td>
		<td><select name="edad" id="edad" style="width:250px">
		<option value="">Seleccione...</option>
		<option value="0">Varias</option>
		<%
		
		for(int i=10; i<=100; i++){
			%>
			
			<option value="<%=i%>"><%=i%> años</option>
			
			<%												
		}
		
		
		%>
		    
		</select>
		<script type="text/javascript">document.getElementById('edad').value = "<%=agresor[5]%>";</script>
		</td>
		
		
		</tr>
		
		<tr>
		<td>Actor :</td>
		<td><select name="actor" id="actor" style="width:250px" onchange="cambiarVisibilidadActor()">
				<option value="" selected>Seleccione..</option>
				<%
			if(actores!=null && actores.size()>0){
				for(Object[] d: actores){%>
					
					<option value="<%=d[0] %>-<%=d[2] %>" ><%=d[1] %></option>
					
					
					<%
				}
				
			}
			%>
				
				
				
				
		</select>
		<%
		String siNo = "S";
		if((""+agresor[7]).trim().equals("")){
			siNo = "N";
		}
		
		if(agresor[7]==null){
			siNo = "N";
		}
		
		%>
		
		<script type="text/javascript">document.getElementById('actor').value = "<%=agresor[6]+"-"+siNo%>";</script>
		</td>
		</tr>
		<tr>
		<td><span id="span_ac1" style="color: black;">¿ Cuál actor ? :</span></td>
													<td><span id="span_ac2"><input id="cual_actor" name="cual_actor" type="text"
														value="<%=agresor[7]%>" style="width:250px"/></span></td>
		
		
		</tr>
		
		
		<tr>
		<td><span id="span_ta1" style="color: black;">Actor pertenece a un(una):</span></td>
		<td><select name="tipo_actor" id="tipo_actor" style="width:250px" onchange="cambiarVisibilidadTipoActor();">
				<option value="" selected>Seleccione..</option>
				<option value="B" >BLOQUE</option>
				<option value="F" >FRENTE</option>
				<option value="U" >UNIDAD</option>
				<option value="O" >OTRO</option>
		</select>
		<script type="text/javascript">document.getElementById('tipo_actor').value = "<%=agresor[8]%>";</script>
			
		</td>
		</tr>
		<tr>
		
		<td><span id="span_ta2" style="color: black;">¿ Cuál  ? :</span></td>
													<td><span id="span_ta3"><input id="cual_tipoactor" name="cual_tipoactor" type="text"
														value="<%=agresor[9]%>" style="width:250px"/></span>
														
														
														
														<script type="text/javascript">cambiarVisibilidadActor();</script></td>
		
		</tr>									
											
											
											
											
									
	<tr>
		<td colspan="4">
		
		<input type="hidden" id="caso" name="caso" value="<%=agresor[10]%>">
		
		<div align="center"><span id="detalleActualizarDatos">
		  <input class="searchbutton"
			name="btnActualizarDatos" id="btnActualizarDatos" type="button"
			style="cursor: hand" value=" Modificar "
			onClick="editarAgresor('<%=id%>'); return false;" /> 
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>
</form>
</div>
</body>
</html>

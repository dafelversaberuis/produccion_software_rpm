
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat" errorPage=""
	session="false"%>
<%@page import="beans.Administrador"%>
<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%


List<Object[]> objetos = bAdministrarPublicaciones.getBackups();

	if (objetos.size() > 0) {
%>
<br>
<br>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">ITEM</div>
		</td>
		
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">NOMBRE COPIA DE SEGURIDAD</div>
		</td>
		<td bgcolor="#EE486C">
		
		</td>
		
	</tr>
	<%
		int j = 0;
			for (Object[] i : objetos) {
				j++;
	%>
	<tr >
		<td align="center" bgcolor="#EEEEEE"><font color="black"><%=j%></font></td>
		<td align="center" bgcolor="#EEEEEE" ><font color="black"><%=i[1] %></font></td>
		<td align="center" bgcolor="#EEEEEE"><a href="backups/<%=i[1]%>">Descargar el archivo para enviar por correo</a></td>
		
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen backups hechos
<%
	}
%>




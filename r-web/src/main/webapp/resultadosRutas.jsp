
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page language="java" contentType="text/html; charset=iso-8859-1" import="java.sql.*,java.util.*,java.text.SimpleDateFormat"
     session="false" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="beans.Administrador"%>
<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />




<%

String id=request.getParameter("id");
    

List<Object[]> cursos = bAdministrarPublicaciones.getRutas(id);

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">HECHO DENUNCIADO</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">FECHA</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		
	</tr>
	<%
		int j = 0;
			for (Object[] i : cursos) {
				j++;
				
				String color ="#EEEEEE";
				if(j%2==0){
					color ="#FFFFFF";
				}
				
				
			
				
				
				
				if(i[1].equals("S")){
					i[1]="SI";
				}else{
					
					i[1]="NO";
				}
				
				
				if(i[13]==null){
					i[13]="NO APLICA";
				}
				
				
				
	%>  
	<tr >
		<td align="left" bgcolor="<%=color %>"><font color="black"><%=j%></font></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[1] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[13] %></font></div></td>

		<td align="center" bgcolor="<%=color %>" "><a href="#" onclick="window.open('/r-web/editarRuta.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=990, height=550'); return false;" style="text-decoration:none">Ver/editar</a></td>
		<td align="center" bgcolor="<%=color %>"><a href="#" onclick="cargarEliminarRuta('<%=i[0]%>','<%=id %>'); return false;">Eliminar</a></td>  
				
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen rutas de atención asignadas
<%
	}
%>




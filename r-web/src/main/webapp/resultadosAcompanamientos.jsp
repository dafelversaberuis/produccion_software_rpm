
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
    

List<Object[]> cursos = bAdministrarPublicaciones.getAcompanamientos(id);

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">No. ATENCIÓN</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">FECHA DE ATENCIÓN</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">PERSONA QUE REALIZÓ LA ATENCIÓN</div>
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
				
				
			
				String nombre = ""+i[27];
				
				
				if(i[28]!=null && !(""+i[28]).trim().equals("")){
					nombre+=" "+i[28];
				}
				
				nombre+=" "+i[29];
				
				if(i[30]!=null && !(""+i[30]).trim().equals("")){
					nombre+=" "+i[30];
				}
				
			
				
				
				
	%>  
	<tr >
		<td align="left" bgcolor="<%=color %>"><font color="black"><%=i[26] %></font></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[3] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=nombre %></font></div></td>

		<td align="center" bgcolor="<%=color %>" "><a href="#" onclick="window.open('/r-web/editarAcompanamiento.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=1024, height=750'); return false;" style="text-decoration:none">Ver/editar</a></td>
		<td align="center" bgcolor="<%=color %>"><a href="#" onclick="cargarEliminarAcompanamiento('<%=i[0]%>','<%=id %>'); return false;">Eliminar</a></td>  
				
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen compañamientos registrados
<%
	}
%>




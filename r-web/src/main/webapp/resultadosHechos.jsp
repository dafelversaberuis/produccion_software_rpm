
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
    

List<Object[]> cursos = bAdministrarPublicaciones.getHechos(id);

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">FECHA</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">HORA</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">CIUDAD</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">HECHOS</div>
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
				
				String tipo ="";
				if(i[2]!=null){
				if(Integer.parseInt(""+i[2])>12){
					i[2] = ""+ (Integer.parseInt(""+i[2]) - 12);
					tipo = "P.M.";
				}else{
					tipo = "A.M.";
					
				}
				
				}
				
				if(i[2]!=null && Integer.parseInt(""+i[2])<10){
					i[2] = "0"+ i[2];
				}
				
				if(i[6]!=null && Integer.parseInt(""+i[6])<10){
					i[6] = "0"+i[6];
				}
				
				
				
				if(i[1]==null){
					i[1]= "";
					tipo="";
				}
				
				if(i[2]==null){
					i[2]= "";
					tipo="";
				}
				
				if(i[6]==null){
					i[6] ="";
				}
				
				
				
				
	%>  
	<tr >
		<td align="left" bgcolor="<%=color %>"><font color="black"><%=j%></font></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[1] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[2] + ":"+i[6] +" "+ tipo%></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[5] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><textarea rows="3" cols="50" disabled="true"><%=i[4] %></textarea></font></div></td>

		<td align="center" bgcolor="<%=color %>" "><a href="#" onclick="window.open('/r-web/editarHecho.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=990, height=590'); return false;" style="text-decoration:none">Ver/Editar</a></td>
		<td align="center" bgcolor="<%=color %>"><a href="#" onclick="cargarEliminarHecho('<%=i[0]%>','<%=id %>'); return false;">Eliminar</a></td>  
				
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen hechos registrados
<%
	}
%>




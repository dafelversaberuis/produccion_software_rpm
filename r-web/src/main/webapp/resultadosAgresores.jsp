
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
    

List<Object[]> cursos = bAdministrarPublicaciones.getAgresores(id);

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">AGRESOR</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">SEXO</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">GENERO</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">EDAD</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">ACTOR</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">ACTOR PERTENECE A</div>
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
				
				
				if(i[3].equals("M")){
					i[3]="MASCULINO";
				}
				if(i[3].equals("F")){
					i[3]="FEMENINO";
				}
				if(i[3].equals("A")){
					i[3]="AMBOS";
				}
				
				
				
				if(i[1].equals("N")){
					i[2]="DESCONOCIDO";
				}
				
				if((i[5]+"").equals("0")){
					i[5]="VARIOS";
				}else{
					i[5]=i[5]+" AÑOS";
				}
				
				
				if(i[7]==null){
					i[7]="";
				}else{
					i[7]=": "+i[7];
				}
				
				if(i[9]==null){
					i[9]="";
				}
				
				
				
				
				if(i[8]==null){
					i[8]="-";
				}else{
					
					
					if(i[8].equals("B")){
						i[8]="BLOQUE";
					}
					if(i[8].equals("F")){
						i[8]="FRENTE";
					}
					if(i[8].equals("U")){
						i[8]="UNIDAD";
					}
					if(i[8].equals("O")){
						i[8]="OTRO";
					}
					
					
					i[8]=i[8]+": "+i[9];
				}
				
				
				
				
	%>  
	<tr >
		<td align="left" bgcolor="<%=color %>"><font color="black"><%=j%></font></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[2] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[3] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[11] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[5] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[12] + " "+ i[7] %></font></div></td>
		<td align="left" bgcolor="<%=color %>"><div align="left"><font color="black"><%=i[8] %></font></div></td>
		<td align="center" bgcolor="<%=color %>" ">
		<%if(i[12]!=null){ %>
		<a href="#" onclick="window.open('/r-web/editarAgresor.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=500, height=350'); return false;" style="text-decoration:none">Editar</a>
		<%} %>
		</td>
		<td align="center" bgcolor="<%=color %>"><a href="#" onclick="cargarEliminarAgresor('<%=i[0]%>','<%=id %>'); return false;">Eliminar</a></td>  
				
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen amenazas asignadas al caso
<%
	}
%>




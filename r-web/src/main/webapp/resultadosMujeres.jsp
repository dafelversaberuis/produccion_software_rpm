
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


//List<Object[]> mujeres = bAdministrarPublicaciones.getMujeres();


String n = request.getParameter("n");
String a = request.getParameter("a");
String d = request.getParameter("d");


String variable_regreso = request.getParameter("variable_regreso");


if(n!=null && n.equals("null")){
	n = null;	
	
}

if(a!=null && a.equals("null")){
	a = null;	
	
}
if(d!=null && d.equals("null")){
	
	d = null;	
}

if(variable_regreso!=null && variable_regreso.equals("null")){
	
	variable_regreso = null;	
}

if(variable_regreso!=null){
	
	n=null;
	a=null;
	d=null;
}


//out.println(n+"*"+a+"*"+d+"*"+variable_regreso);


List<Object[]> mujeres =bAdministrarPublicaciones.getMujeresS(n,a,d,variable_regreso);
	if (mujeres!=null && mujeres.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">NOMBRE</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">No. IDENTIFICACIÓN</div>
		</td>
		
		<td bgcolor="#EE486C" colspan="5">
		<div align="center" style="color:#FFFFFF">ACCIONES</div>
		</td>
		
	
	</tr>
	<%
		int j = 0;
			for (Object[] i : mujeres) {
				j++;
				
				
				String color ="#EEEEEE";
				if(j%2==0){
					color ="#FFFFFF";
				}
	%>
	<tr >
		<td align="center" bgcolor="<%=color %>"><font color="black" ><%=j%></font></td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" ><%=i[1] + " " + i[2]  %></font></div>
		</td>
		<td align="left" bgcolor="<%=color %>" ><font color="black" ><%=i[4] %></font></td>
		  
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Niveles educativos: </b>Todos los niveles de estudio que tiene la mujer', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="nivelesEducativos.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>"><img src="imagenes/n_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Ocupaciones actuales: </b>Actualmente en que está desempeñada la mujer', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="actividadesEconomicas.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>"><img src="imagenes/o_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>		
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Organizaciones pertenecientes: </b>A que organizacione pertenece o ha pertenecido la mujer', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="participaciones.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>"><img src="imagenes/p_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		
		<td align="center" bgcolor="<%=color %>" "><a href="#" onclick="window.open('/r-web/editarInformacionMujer.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=970, height=650'); return false;" style="text-decoration:none">Ver / Editar</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="cargarEliminarMujer('<%=i[0] %>'); return false;">Eliminar</a></td>
		
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen mujeres de la fundación creadas en el sistema
<%
	}
%>




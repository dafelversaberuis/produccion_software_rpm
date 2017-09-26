
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat,java.net.URLEncoder" errorPage=""
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


String etnia = request.getParameter("etnia");
String cabeza_hogar = request.getParameter("cabeza_hogar");
String actor = request.getParameter("actor");
String hecho_denunciado = request.getParameter("hecho_denunciado");
String fecha_hechos = request.getParameter("fecha_hechos");
String fecha_hechos2 = request.getParameter("fecha_hechos2");
String responsable = request.getParameter("responsable");
String numero_atencion = request.getParameter("numero_atencion");
String fecha_atencion = request.getParameter("fecha_atencion");
String fecha_atencion2 = request.getParameter("fecha_atencion2");

String departamento_hechos = request.getParameter("departamento_hechos");
String municipio_hechos = request.getParameter("municipio_hechos");






if(n!=null && n.equals("null")){
	n = null;	
	
}

if(a!=null && a.equals("null")){
	a = null;	
	
}
if(d!=null && d.equals("null")){
	
	d = null;	
}



 

   
List<Object[]> mujeres = bAdministrarPublicaciones.getCasos(n,a,d,etnia,cabeza_hogar,actor,hecho_denunciado,fecha_hechos,fecha_hechos2,responsable,numero_atencion,fecha_atencion,fecha_atencion2,departamento_hechos,municipio_hechos);
	if (mujeres.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	
	<tr>
		<td bgcolor="#EE486C" colspan="17">
		<div align="center" style="color:#FFFFFF; font-size:12px">:::: Listado de resultados según consulta para muejres con casos registrados :::: </div>
		</td>
		
	</tr>
	
	<tr>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">CASO</div>
		</td>
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">FECHA REGISTRO</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">MUJER</div>
		</td>
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">IDENTIFICACIÓN</div>
		</td>

		
		
		<td bgcolor="#EE486C" colspan="12">
		<div align="center" style="color:#FFFFFF; font-size:12px">ACCIONES</div>
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
		<td align="center" bgcolor="<%=color %>"><font color="black" style="font-size: 12px" ><%=j%></font></td>
		<td align="center" bgcolor="<%=color %>">
		<div align="center"><font color="black" style="font-size: 12px"><%="C"+i[0]  %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="center"><font color="black" style="font-size: 12px"><%=i[2]  %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" style="font-size: 12px"><%=i[3] + " " + i[4] %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" style="font-size: 12px"><%= i[5]%></font></div>
		</td>
		
		  
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información de los hechos victamizantes: </b>Amenzas a la vida, integridad y/o seguridad personal', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="amenazas.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>"><img src="imagenes/a_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información de los hechos victamizantes: </b>Delitos contra la libertad e integridd sexual', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="delitos.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>"><img src="imagenes/d_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>	
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información de los hechos victamizantes: </b>Libertad personal', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="libertades.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/l_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>	
		
		
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información del impacto psicosocial: </b>Impactos individuales', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="individuales.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/i_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información del impacto psicosocial: </b>Impactos familiares', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="familiares.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/f_minuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>	
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Información del impacto psicosocial: </b>Impactos organizativos / colectivos', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="colectivos.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/o_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Datos del agresor o agresores</b>', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="agresores.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/a_minuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Descripción de los hechos</b>', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="hechos.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>"><img src="imagenes/h_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		
		<td align="center" bgcolor="<%=color %>" "><a href="#" onmouseover="Tip('<b>Protección</b>', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" onclick="window.open('/r-web/crearProteccion.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=990, height=270'); return false;"><img src="imagenes/p_minuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
	
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Acceso a la justicia / implementación de las rutas de atención</b>', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="rutasAtencion.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" ><img src="imagenes/r_mayuscula.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a onmouseover="Tip('<b>Acompañamiento psicosocial</b>', BALLOON, true, ABOVE, true, OFFSETX, -10, WIDTH, 360, TEXTALIGN, 'justify', FADEIN, 600, FADEOUT, 600, PADDING, 8)" href="acompanamiento.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>"><img src="imagenes/chat_1.png" style="width:17px; height:17px; vertical-align:bottom; align:center; border:none; cursor: pointer;"></a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="cargarEliminarCaso('<%=i[0] %>'); return false;" style="font-size: 12px">Eliminar</a></td>
		
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen casos registrados en el sistema de acuerdo a los criterios de consulta especificados
<%
	}
%>




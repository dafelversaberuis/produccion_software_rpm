
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat" errorPage=""
	session="false"%>

<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<%
	
	
	
	
	
	Object [] valores = new Object[10];
	
	valores[0] = request.getParameter("id"); //id_caso
	valores[1] = request.getParameter("riesgo");
	valores[2] = request.getParameter("cual_riesgo");
	valores[3] = request.getParameter("medida");
	valores[4] = request.getParameter("cual_medida");
	valores[5] = request.getParameter("proteccion");
	valores[6] = request.getParameter("cual_proteccion");
	valores[7] = request.getParameter("tipo_medidas");
	valores[8] = request.getParameter("adecuada");
	valores[9] = request.getParameter("cual_adecuada");

	
	


	
	for(int i = 0; i<=9; i++){
		
		if(valores[i]!=null && (""+valores[i]).trim().equals("")){
			valores[i] = null;
		}
		//out.println("i="+i+" - "+valores[i]+"<br>");
	}
	

	int 	exito = bAdministrarPublicaciones.guardarProteccion(valores);


%>

<input name="hdnExito" type="hidden" value="<%=exito%>" id="hdnExito" />









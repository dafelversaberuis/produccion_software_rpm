
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
	
	
	String id = request.getParameter("id");
	
	
	Object [] valores = new Object[21];
	
	valores[0] = request.getParameter("caso"); //id_caso
	valores[1] = request.getParameter("fecha_hechos"); //conocido
	valores[2] = request.getParameter("hora");
	
	if(request.getParameter("tipo_hora").equals("P")){
		valores[2] =""+(Integer.parseInt(request.getParameter("hora")) + 12);
	}
	
	valores[3]= request.getParameter("minuto"); //
	valores[4] = request.getParameter("municipio_hechos");
	valores[5] = request.getParameter("lugar_hechos");
	valores[6] = request.getParameter("cual_lugar");
	valores[7] = request.getParameter("comunidad");  
	valores[8] = request.getParameter("resguardo");
	valores[9] = request.getParameter("vereda");
	valores[10] = request.getParameter("relato_hechos");
	valores[11] = request.getParameter("testigos");
	valores[12] = request.getParameter("cuales_testigos");
	valores[13] = request.getParameter("documentacion");
	valores[14] = request.getParameter("h_documentacion1");
	valores[15] = request.getParameter("h_documentacion2");
	valores[16] = request.getParameter("h_documentacion3");
	valores[17] = request.getParameter("h_documentacion4");
	valores[18] = request.getParameter("cual_documentacion");
	valores[19] = request.getParameter("tipo_hecho");
	valores[20] = request.getParameter("frecuencia_hechos");

	
	


	
	for(int i = 0; i<=20; i++){
		
		if(valores[i]!=null && (""+valores[i]).trim().equals("")){
			valores[i] = null;
		}
		//out.println("i="+i+" - "+valores[i]+"<br>");
	}
	

	int 	exito = bAdministrarPublicaciones.editarHecho(valores, id);


%>

<input name="hdnExito" type="hidden" value="<%=exito%>" id="hdnExito" />









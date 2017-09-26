
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
	
	
	
	
	
	Object [] valores = new Object[33];
	
	valores[0] = request.getParameter("id"); //id_caso
	valores[1] = request.getParameter("denunciado");
	valores[2] = request.getParameter("denunciante");
	valores[3] = request.getParameter("cual_denunciante");
	valores[4] = request.getParameter("cual_relacion");
	valores[5] = request.getParameter("h_lugar_denuncia1");
	valores[6] = request.getParameter("h_lugar_denuncia2");
	valores[7] = request.getParameter("h_lugar_denuncia3");
	valores[8] = request.getParameter("h_lugar_denuncia4");
	valores[9] = request.getParameter("h_lugar_denuncia5");
	valores[10] = request.getParameter("h_lugar_denuncia6");
	valores[11] = request.getParameter("h_lugar_denuncia7");
	valores[12] = request.getParameter("h_lugar_denuncia8");
	valores[13] = request.getParameter("fecha_denuncia");
	valores[14] = request.getParameter("id_ciudad");
	valores[15] = request.getParameter("atencion");
	valores[16] = request.getParameter("cual_atencion");
	valores[17] = request.getParameter("documentacion");
	valores[18] = request.getParameter("cual_documentacion");
	valores[19] = request.getParameter("denuncia");
	valores[20] = request.getParameter("cual_denuncia");
	valores[21] = request.getParameter("victima");
	valores[22] = request.getParameter("h_no_denuncia1");
	valores[23] = request.getParameter("h_no_denuncia2");
	valores[24] = request.getParameter("h_no_denuncia3");
	valores[25] = request.getParameter("h_no_denuncia4");
	valores[26] = request.getParameter("h_no_denuncia5");
	valores[27] = request.getParameter("h_no_denuncia6");
	valores[28] = request.getParameter("h_no_denuncia7");
	valores[29] = request.getParameter("cual_no_denuncia");
	valores[30] = request.getParameter("interesada");
	valores[31] = request.getParameter("cual_lugar");
	valores[32] = request.getParameter("cual_victima");
	
		


	
	for(int i = 0; i<=31; i++){
		
		if(valores[i]!=null && (""+valores[i]).trim().equals("")){
			valores[i] = null;
		}
		//out.println("i="+i+" - "+valores[i]+"<br>");
	}
	

	int 	exito = bAdministrarPublicaciones.guardarRuta(valores);


%>

<input name="hdnExito" type="hidden" value="<%=exito%>" id="hdnExito" />









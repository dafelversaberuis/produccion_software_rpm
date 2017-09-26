
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
	

	
	
	Object [] valores = new Object[26];
	
	valores[0] = request.getParameter("id"); //id_caso
	valores[1] = request.getParameter("responsable");
	valores[2] = request.getParameter("fecha_atencion");
	valores[3] = request.getParameter("municipio_atencion");
	valores[4] = request.getParameter("h_tipo_atencion1");
	valores[5] = request.getParameter("h_tipo_atencion2");
	valores[6] = request.getParameter("h_tipo_atencion3");
	valores[7] = request.getParameter("h_tipo_atencion4");
	valores[8] = request.getParameter("h_tipo_atencion5");
	valores[9] = request.getParameter("h_tipo_atencion6");
	valores[10] = request.getParameter("h_tipo_atencion7");
	valores[11] = request.getParameter("cual_tipo_atencion");
	valores[12] = request.getParameter("impacto");
	valores[13] = request.getParameter("juridico");
	valores[14] = request.getParameter("restablecimiento");
	valores[15] = request.getParameter("cual_restablecimiento");
	valores[16] = request.getParameter("h_lugar_denuncia1");
	valores[17] = request.getParameter("h_lugar_denuncia2");
	valores[18] = request.getParameter("h_lugar_denuncia3");
	valores[19] = request.getParameter("h_lugar_denuncia4");
	valores[20] = request.getParameter("h_lugar_denuncia5");
	valores[21] = request.getParameter("h_lugar_denuncia6");
	valores[22] = request.getParameter("h_lugar_denuncia7");
	valores[23] = request.getParameter("h_lugar_denuncia8");
	valores[24] = request.getParameter("cual_lugar");
	valores[25] = "0";
		


	
	for(int i = 0; i<=25; i++){
		
		if(valores[i]!=null && (""+valores[i]).trim().equals("")){
			valores[i] = null;
		}
		//out.println("i="+i+" - "+valores[i]+"<br>");
	}
	

	int 	exito = bAdministrarPublicaciones.guardarAcompanamiento(valores);


%>

<input name="hdnExito" type="hidden" value="<%=exito%>" id="hdnExito" />









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




SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
SimpleDateFormat formato2 = new SimpleDateFormat("HH-mm-ss");

String fechaActual = formato.format(new java.util.Date());
String hora = formato2.format(new java.util.Date());
 
String nombre = "B-" + fechaActual + "-"+hora+ ".sql";
 


int ok = 0;


String executeCmd = "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump --no-create-info --extended-insert=false --compact -u"
		+ "root"
		+ " -p"
		+ "12345678"
		+ "  "
		+ "fundacionruta"
		+ " mujeres  participaciones_mujeres niveles_mujeres capacitaciones_mujeres actividades_mujeres casos amenazas_casos delitos_casos libertades_casos individuales_casos familiares_casos colectivos_casos agresores hechos protecciones rutas_atencion acompanamientos -r C:\\tomcatchoco\\webapps\\web\\backups\\"+nombre;



boolean valor = bAdministrarPublicaciones.backupDBOFFLINE(executeCmd);
     
if(valor){
	ok=1;
	
	bAdministrarPublicaciones.crearBackup(nombre);
	
}




	

%>

<input name="hdnExito" id="hdnExito" type="hidden"
	value="<%= ""+ok %>" />



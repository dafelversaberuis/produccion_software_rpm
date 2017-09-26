package beans;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperRunManager;

@WebServlet("/imprimirFormato.jsp")
public class ImprimirFormato extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8662735341191099633L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		try {

			String reporte = new String();
			reporte = "formatoCaso.jasper";

			List<Object[]> tiposDocumento = new AdministrarPublicaciones().getTiposDocumento();
			List<Object[]> generos = new AdministrarPublicaciones().getGeneros();
			List<Object[]> estadosCiviles = new AdministrarPublicaciones().getEstadosCiviles();
			List<Object[]> etnias = new AdministrarPublicaciones().getEtnias();

			List<Object[]> niveles = new AdministrarPublicaciones().getNiveles();
			List<Object[]> ocupaciones = new AdministrarPublicaciones().getActividades();
			List<Object[]> organizaciones = new AdministrarPublicaciones().getOrganizaciones();

			List<Object[]> amenazas = new AdministrarPublicaciones().getAmenazas();
			List<Object[]> delitos = new AdministrarPublicaciones().getDelitos();
			List<Object[]> libertades = new AdministrarPublicaciones().getLibertades();

			List<Object[]> individuales = new AdministrarPublicaciones().getIndividuales();
			List<Object[]> familiares = new AdministrarPublicaciones().getFamiliares();
			List<Object[]> colectivos = new AdministrarPublicaciones().getColectivos();

			List<Object[]> actores = new AdministrarPublicaciones().getActores();

			List<Certificado> tiposDocumentoC = new ArrayList<Certificado>();
			List<Certificado> generosC = new ArrayList<Certificado>();
			List<Certificado> etniasC = new ArrayList<Certificado>();
			List<Certificado> estadosCivilesC = new ArrayList<Certificado>();
			List<Certificado> nivelesC = new ArrayList<Certificado>();
			List<Certificado> ocupacionesC = new ArrayList<Certificado>();
			List<Certificado> organizacionesC = new ArrayList<Certificado>();

			List<Certificado> amenazasC = new ArrayList<Certificado>();
			List<Certificado> delitosC = new ArrayList<Certificado>();
			List<Certificado> libertadesC = new ArrayList<Certificado>();

			List<Certificado> individualesC = new ArrayList<Certificado>();
			List<Certificado> familiaresC = new ArrayList<Certificado>();
			List<Certificado> colectivosC = new ArrayList<Certificado>();

			List<Certificado> actoresC = new ArrayList<Certificado>();
			List<Certificado> generos2C = new ArrayList<Certificado>();

			if (tiposDocumento != null && tiposDocumento.size() > 0) {
				for (Object[] t : tiposDocumento) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					tiposDocumentoC.add(c);
				}
			}

			if (generos != null && generos.size() > 0) {
				for (Object[] t : generos) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					generosC.add(c);
					if (!("" + t[0]).equals("6")) {
						generos2C.add(c);
					}

				}
			}
			if (etnias != null && etnias.size() > 0) {
				for (Object[] t : etnias) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					etniasC.add(c);
				}
			}
			if (estadosCiviles != null && estadosCiviles.size() > 0) {
				for (Object[] t : estadosCiviles) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					estadosCivilesC.add(c);
				}
			}

			if (niveles != null && niveles.size() > 0) {
				for (Object[] t : niveles) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					nivelesC.add(c);
				}
			}
			if (ocupaciones != null && ocupaciones.size() > 0) {
				for (Object[] t : ocupaciones) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					ocupacionesC.add(c);
				}

			}

			if (organizaciones != null && organizaciones.size() > 0) {
				for (Object[] t : organizaciones) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					organizacionesC.add(c);
				}
			}

			if (amenazas != null && amenazas.size() > 0) {
				for (Object[] t : amenazas) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					amenazasC.add(c);
				}
			}
			if (delitos != null && delitos.size() > 0) {
				for (Object[] t : delitos) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					delitosC.add(c);
				}
			}

			if (libertades != null && libertades.size() > 0) {
				for (Object[] t : libertades) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					libertadesC.add(c);
				}
			}

			if (individuales != null && individuales.size() > 0) {
				for (Object[] t : individuales) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					individualesC.add(c);
				}
			}

			if (familiares != null && familiares.size() > 0) {
				for (Object[] t : familiares) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					familiaresC.add(c);
				}
			}

			if (colectivos != null && colectivos.size() > 0) {
				for (Object[] t : colectivos) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					colectivosC.add(c);
				}
			}

			if (actores != null && actores.size() > 0) {
				for (Object[] t : actores) {
					Certificado c = new Certificado();
					c.setNombre("" + t[1]);
					actoresC.add(c);
				}
			}

			String id = request.getParameter("i");
			String ruta_servidor_plantilla = request.getRealPath("/reportes/");
			String logo = request.getRealPath("/imagenes/");

			Map pars = new HashMap();
			pars.put("logo", logo + "/logo20anos.png");
			pars.put("logo2", logo + "/embajadar.png");
			pars.put("tiposDocumento", tiposDocumentoC);
			pars.put("generos", generosC);
			pars.put("etnias", etniasC);
			pars.put("estadosCiviles", estadosCivilesC);

			pars.put("nivelesEducativos", nivelesC);
			pars.put("organizaciones", organizacionesC);
			pars.put("ocupaciones", ocupacionesC);

			pars.put("amenazas", amenazasC);
			pars.put("libertades", libertadesC);
			pars.put("delitos", delitosC);

			pars.put("individuales", individualesC);
			pars.put("familiares", familiaresC);
			pars.put("colectivos", colectivosC);

			pars.put("actores", actoresC);
			pars.put("generos2", generos2C);

			pars.put("SUBREPORT_DIR", ruta_servidor_plantilla + "/");

			//

			// Cuando se quiere usar un listado
			// A la linea de bytes el ultimo parametro se cambia por datasource
			// y se descomentarea la siguiente linea y se le pasa el listado armado un
			// List<>
			// JRBeanCollectionDataSource dataSource = new
			// JRBeanCollectionDataSource(asistencia);

			// Si se quiere usar una conexion se pasa como parmetro un objeto de
			// conexion this.con ó
			// Connection conexion algo asi
			// y el ultimo parametro se de bytes se cambia por la conexion

			// Si solo son parametros, sin conexion ni lista solo como ultimo
			// parametro en la
			// linea de bytes lo siguiente: new JREmptyDataSource()

			byte[] bytes = JasperRunManager.runReportToPdf(ruta_servidor_plantilla + "/" + reporte, pars, new JREmptyDataSource());

			/* Indicamos que la respuesta va a ser en formato PDF */

			response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "attachment; filename=formato_impresion.pdf");
			response.setContentLength(bytes.length);
			ServletOutputStream ouputStream = response.getOutputStream();
			ouputStream.write(bytes, 0, bytes.length);

			/* Limpiamos y cerramos flujos de salida */

			ouputStream.flush();
			ouputStream.close();

		} catch (Exception e) {
			// e.printStackTrace();
			// out.println("NO SE PUEDE MOSTRAR REPORTE" + e.toString());
		}

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
}

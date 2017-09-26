package beans;

import java.text.SimpleDateFormat;
import java.util.Date;

public class prueba {

	public static boolean backupDBOFFLINE(String dbName, String dbUserName,
			String dbPassword, String path) {

		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd H-mm-ss");
		String fechaActual = formato.format(new Date());

		String nombre = "B-" + fechaActual + ".zip";
		// Proceso que realiza el Backup a la base de Datos
		// String[]
		// direccion={"C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump","--opt","-uroot","-p12345678","--databases","fundacionruta","-r","C:\\Web\\"+nombre};

		// String executeCmd =
		// "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump -u " +
		// dbUserName + " -p" + dbPassword + " --add-drop-database -B " + dbName
		// + " -r " + path;

		// String executeCmd =
		// "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump --no-create-info --extended-insert=false --compact -u"
		// + dbUserName + " -p" + dbPassword + " --add-drop-database -B " +
		// dbName + " -r " + path;

		// String executeCmd =
		// "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump --no-create-info --extended-insert=false --compact -u"
		// + dbUserName + " -p" + dbPassword + " " + dbName + " -r " + path;

		String executeCmd = "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump --no-create-info --extended-insert=false --compact -u"
				+ dbUserName
				+ " -p"
				+ dbPassword
				+ "  "
				+ dbName
				+ " mujeres  participaciones_mujeres niveles_mujeres capacitaciones_mujeres actividades_mujeres casos amenazas_casos delitos_casos libertades_casos individuales_casos familiares_casos colectivos_casos agresores hechos protecciones rutas_atencion acompanamientos -r " + path;

		Process runtimeProcess;
		try {

			runtimeProcess = Runtime.getRuntime().exec(executeCmd);

			// runtimeProcess = Runtime.getRuntime().exec(direccion);
			int processComplete = runtimeProcess.waitFor();

			if (processComplete == 0) {
				System.out.println("Backup created successfully");
				return true;
			} else {
				System.out.println("Could not create the backup");
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return false;
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// BigDecimal porcentaje = new BigDecimal(100).divide(new
		// BigDecimal(1),10,RoundingMode.HALF_UP).setScale(2,
		// RoundingMode.HALF_UP);

		// System.setProperty("jsse.enableSNIExtension", "false"); // if you are
		// using Java 7
		//
		// ElibomRestClient elibom = new ElibomRestClient("dannypipe@gmail.com",
		// "KGr49L9KLO");
		//
		// String deliveryId = elibom.sendMessage("573015018048", "dfvergel");
		// System.out.println(deliveryId);

		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat formato2 = new SimpleDateFormat("HH-mm-ss");
		
		String fechaActual = formato.format(new java.util.Date());
		String hora = formato2.format(new java.util.Date());
		 
		String nombre = "B-" + fechaActual + "-"+hora+ ".sql";
		
		
		backupDBOFFLINE("fundacionruta", "root", "12345678",
				"C:\\Web\\"+nombre);

	}

}

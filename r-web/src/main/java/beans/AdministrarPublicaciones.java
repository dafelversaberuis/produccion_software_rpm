package beans;

import java.io.File;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AdministrarPublicaciones {

	private int numeroColumnasMujeres = 42;

	public int contactar(String correo, String nombre, String telefono,
			String contenido) {

		int exito = 0;
		try {

			Parametro parametro = new Parametro();
			Email email = new Email();

			String[] parametros = parametro.getarametros();
			int c = 0;

			String asunto = "";
			String mensaje = "";

			if (c == 0) {
				asunto = "Nuevo contacto desde software MUASOFT - Ruta Pacífica de las Mujeres";
				mensaje = "<table width='100%' border='0'>"
						+ "<tr>"
						+ "<td colspan='2' align='left' valign='middle'><strong><span class='Estilo2'>MUASOFT - Ruta Pacífica de las Mujeres</strong></td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td colspan='2'>&nbsp;</td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td colspan='2'><p>Estimado administrador(a) existe un nuevo comentario de contacto desde el sitio Web. Éstos son los datos:<br><br>-<strong>Nombres:</strong>"
						+ nombre
						+ "<br><br>-<strong>Correo:</strong>"
						+ correo
						+ "<br><br>-<strong>Teléfono:</strong>"
						+ telefono
						+ "<br><br>-<strong>Contenido</strong>:<br>"
						+ contenido
						+ "<br><br>* Puedes visitar nuestro portal en cualquier momento dirigi&eacute;ndote a la direcci&oacute;n de internet: <a href='"
						+ parametros[0] + "'>" + parametros[0]
						+ "</a> &oacute; contactarnos a nuestro correo: "
						+ parametros[1] + " </span></td></tr></table>";

				try {
					email.enviarEmail(mensaje, asunto, parametros[1]);
				} catch (Exception e) {

					// e.printStackTrace();
				}

				exito = 1;

			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {

		}

		return exito;

	}

	public int crearPortafolio(String titulo, String contenido) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO portafolio(titulo_portafolio,contenido_portafolio) VALUES('"
							+ titulo + "','" + contenido + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int valorGrafica(String encuesta, String pregunta, String opcion) {
		Conexion conexion = new Conexion();
		int valor = 0;

		ResultSet rs2 = conexion
				.consultarBD("SELECT COUNT(*) FROM respuestas_encuesta WHERE id_encuesta = "
						+ encuesta
						+ " AND id_pregunta= "
						+ pregunta
						+ " AND id_opcion=" + opcion);
		try {
			if (rs2.next()) {
				valor = rs2.getInt(1);
			}
			rs2.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return valor;

	}

	public int editarPregunta(String nombre, String idPregunta, String tipo) {
		Conexion conexion = new Conexion();
		int exito = 0;

		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE preguntas SET descripcion='"
							+ nombre.trim() + "', tipo_respuesta = '" + tipo
							+ "' WHERE id_pregunta = " + idPregunta);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearPregunta(String nombre, String idEncuesta, String tipo) {
		Conexion conexion = new Conexion();
		int exito = 0;

		int c = 0;

		ResultSet rs2 = conexion
				.consultarBD("SELECT COUNT(*) FROM preguntas WHERE id_encuesta = "
						+ idEncuesta);
		try {
			if (rs2.next()) {
				c = rs2.getInt(1);
			}
			rs2.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		}

		c++;

		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO preguntas(descripcion,id_encuesta,tipo_respuesta,orden) VALUES('"
							+ nombre.trim()
							+ "',"
							+ idEncuesta
							+ ",'"
							+ tipo
							+ "','" + c + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int editarOpcion(String nombre, String idOpcion, String aAmpliar) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE opciones_respuesta SET descripcion= '"
							+ nombre.trim()
							+ "', ampliar='"
							+ aAmpliar
							+ "' where id_op_respuesta=" + idOpcion);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearOpcion(String nombre, String idPregunta, String aAmpliar) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO opciones_respuesta(descripcion,id_pregunta,ampliar) VALUES('"
							+ nombre.trim()
							+ "',"
							+ idPregunta
							+ ",'"
							+ aAmpliar + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearRespuesta(String encuesta, String pregunta, String opcion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO respuestas_encuesta(id_encuesta,id_pregunta,id_opcion) VALUES("
							+ encuesta + "," + pregunta + "," + opcion + ")");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int editarTema(String nombre, String idTema) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE temas SET nombre='" + nombre.trim()
							+ "' WHERE id=" + idTema);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public BigDecimal getRedondeado(String aValor) {

		BigDecimal valor = new BigDecimal(0);
		try {

			valor = new BigDecimal(aValor).setScale(2, RoundingMode.HALF_UP);

		} catch (Exception e) {
			valor = new BigDecimal(0);
		}

		return valor;
	}

	public BigDecimal getValorSemanal(String aValor) {

		BigDecimal valor = new BigDecimal(0);
		try {

			valor = new BigDecimal(aValor).setScale(2, RoundingMode.HALF_UP)
					.divide(new BigDecimal(4), 10, RoundingMode.HALF_UP)
					.setScale(2, RoundingMode.HALF_UP);

		} catch (Exception e) {
			valor = new BigDecimal(0);
		}

		return valor;
	}

	public int crearFinanciadorC(String idFinanciador, String idCurso) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			int c = 0;

			ResultSet rs = conexion
					.consultarBD("SELECT COUNT(*) FROM curso_financiador WHERE id_financiador="
							+ idFinanciador + " AND id_curso=" + idCurso);
			try {
				if (rs.next()) {
					c = rs.getInt(1);
				}
				rs.close();

			} catch (SQLException e) {
				// e.printStackTrace();
			}
			if (c == 0) {

				boolean actualizo = conexion
						.actualizarBD("INSERT INTO curso_financiador(id_financiador,id_curso) VALUES("
								+ idFinanciador + "," + idCurso + ")");
				if (actualizo) {
					c = 0;
					ResultSet rs2 = conexion
							.consultarBD("SELECT COUNT(*) FROM curso_financiador WHERE id_curso="
									+ idCurso);
					try {
						if (rs2.next()) {
							c = rs2.getInt(1);
						}
						rs2.close();

					} catch (SQLException e) {
						// e.printStackTrace();
					}

					BigDecimal porcentaje = new BigDecimal(100).divide(
							new BigDecimal(c), 10, RoundingMode.HALF_UP)
							.setScale(2, RoundingMode.HALF_UP);
					conexion.actualizarBD("UPDATE curso_financiador SET porcentaje="
							+ porcentaje + " WHERE id_curso=" + idCurso);

					exito = 1;
				}

			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearLineaC(String idLinea, String idCurso) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			int c = 0;

			ResultSet rs = conexion
					.consultarBD("SELECT COUNT(*) FROM curso_linea WHERE id_linea="
							+ idLinea + " AND id_curso=" + idCurso);
			try {
				if (rs.next()) {
					c = rs.getInt(1);
				}
				rs.close();

			} catch (SQLException e) {
				// e.printStackTrace();
			}
			if (c == 0) {

				boolean actualizo = conexion
						.actualizarBD("INSERT INTO curso_linea(id_linea,id_curso) VALUES("
								+ idLinea + "," + idCurso + ")");
				if (actualizo) {
					c = 0;
					ResultSet rs2 = conexion
							.consultarBD("SELECT COUNT(*) FROM curso_linea WHERE id_curso="
									+ idCurso);
					try {
						if (rs2.next()) {
							c = rs2.getInt(1);
						}
						rs2.close();

					} catch (SQLException e) {
						// e.printStackTrace();
					}

					BigDecimal porcentaje = new BigDecimal(100).divide(
							new BigDecimal(c), 10, RoundingMode.HALF_UP)
							.setScale(2, RoundingMode.HALF_UP);
					conexion.actualizarBD("UPDATE curso_linea SET porcentaje="
							+ porcentaje + " WHERE id_curso=" + idCurso);

					exito = 1;
				}

			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearActividad(String idActividad, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO actividades_mujeres(id_mujer,id_actividad,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idActividad
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM actividades_mujeres WHERE id_mujer= "
								+ idMujer + " AND id_actividad=" + idActividad);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO actividades_mujeres(id_mujer,id_actividad) VALUES('"
									+ idMujer + "','" + idActividad + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearParticipacion(String idNivel, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO participaciones_mujeres(id_mujer,id_organizacion,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "'"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM participaciones_mujeres WHERE id_mujer= "
								+ idMujer + " AND id_organizacion=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO participaciones_mujeres(id_mujer,id_organizacion) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearCapacitacion(String idNivel, String idMujer,
			String justificacion, String institucion, String percepcion,
			String tiempo, String tipo) {
		Conexion conexion = new Conexion();
		int exito = 0;
		String sql = "";
		try {

			boolean actualizo = false;
			if (justificacion != null) {

				if (tipo != null && tipo.equals("C")) {

					sql = "INSERT INTO capacitaciones_mujeres(id_mujer,id_capacitacion, justificacion,tiempo,institucion,nivel) VALUES("
							+ idMujer
							+ ","
							+ idNivel
							+ ",'"
							+ justificacion
							+ "','"
							+ tiempo
							+ "','"
							+ institucion
							+ "','"
							+ percepcion + "')";
					actualizo = conexion.actualizarBD(sql);

				} else {

					sql = "INSERT INTO capacitaciones_mujeres(id_mujer,id_linea, justificacion,tiempo,institucion,nivel) VALUES("
							+ idMujer
							+ ","
							+ idNivel
							+ ",'"
							+ justificacion
							+ "','"
							+ tiempo
							+ "','"
							+ institucion
							+ "','"
							+ percepcion + "')";
					actualizo = conexion.actualizarBD(sql);

				}

			} else {

				if (tipo != null && tipo.equals("C")) {
					sql = "INSERT INTO capacitaciones_mujeres(id_mujer,id_capacitacion, tiempo,institucion,nivel) VALUES("
							+ idMujer
							+ ","
							+ idNivel
							+ ",'"
							+ tiempo
							+ "','"
							+ institucion + "','" + percepcion + "')";
					actualizo = conexion.actualizarBD(sql);

				} else {

					sql = "INSERT INTO capacitaciones_mujeres(id_mujer,id_linea, tiempo,institucion,nivel) VALUES("
							+ idMujer
							+ ","
							+ idNivel
							+ ",'"
							+ tiempo
							+ "','"
							+ institucion + "','" + percepcion + "')";
					actualizo = conexion.actualizarBD(sql);

				}

			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearDelito(String idNivel, String idMujer, String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO delitos_casos(id_caso,id_delito,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM delitos_casos WHERE id_caso= "
								+ idMujer + " AND id_delito=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO delitos_casos(id_caso,id_delito) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearLibertad(String idNivel, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO libertades_casos(id_caso,id_libertad,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM libertades_casos WHERE id_caso= "
								+ idMujer + " AND id_libertad=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO libertades_casos(id_caso,id_libertad) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearIndividual(String idNivel, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO individuales_casos(id_caso,id_individual,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM individuales_casos WHERE id_caso= "
								+ idMujer + " AND id_individual=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO individuales_casos(id_caso,id_individual) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearFamiliar(String idNivel, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO familiares_casos(id_caso,id_familiar,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM familiares_casos WHERE id_caso= "
								+ idMujer + " AND id_familiar=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO familiares_casos(id_caso,id_familiar) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearColectivo(String idNivel, String idMujer,
			String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO colectivos_casos(id_caso,id_colectivo,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM colectivos_casos WHERE id_caso= "
								+ idMujer + " AND id_colectivo=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO colectivos_casos(id_caso,id_colectivo) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearAmenaza(String idNivel, String idMujer, String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO amenazas_casos(id_caso,id_amenaza,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM amenazas_casos WHERE id_caso= "
								+ idMujer + " AND id_amenaza=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO amenazas_casos(id_caso,id_amenaza) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearNivel(String idNivel, String idMujer, String justificacion) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = false;
			if (justificacion != null) {
				actualizo = conexion
						.actualizarBD("INSERT INTO niveles_mujeres(id_mujer,id_nivel,justificacion) VALUES('"
								+ idMujer
								+ "','"
								+ idNivel
								+ "','"
								+ justificacion + "')");
			} else {

				int c = 0;

				ResultSet rs = conexion
						.consultarBD("SELECT COUNT(*) FROM niveles_mujeres WHERE id_mujer= "
								+ idMujer + " AND id_nivel=" + idNivel);
				try {
					if (rs.next()) {
						c = rs.getInt(1);
					}
					rs.close();

				} catch (SQLException e) {
					// e.printStackTrace();
				}

				if (c == 0) {
					actualizo = conexion
							.actualizarBD("INSERT INTO niveles_mujeres(id_mujer,id_nivel) VALUES('"
									+ idMujer + "','" + idNivel + "')");

				}
			}

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearTema(String nombre, String idCurso) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO temas(nombre,id_curso) VALUES('"
							+ nombre.trim() + "'," + idCurso + ")");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearMC(String idMujer) {
		Conexion conexion = new Conexion();
		int exito = 0;
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");

		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO casos(id_mujer,fecha_registro) VALUES('"
							+ idMujer
							+ "','"
							+ formato.format(new Date())
							+ "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int editarEncuesta(String id, String encuesta, String fechaDesde,
			String fechaHasta) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE encuestas SET descripcion='"
							+ encuesta.trim() + "', fecha_desde='" + fechaDesde
							+ "',fecha_hasta='" + fechaHasta
							+ "' WHERE id_encuesta=" + id);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearEncuesta(String encuesta, String fechaDesde,
			String fechaHasta) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO encuestas(descripcion,fecha_desde,fecha_hasta) VALUES('"
							+ encuesta.trim()
							+ "','"
							+ fechaDesde
							+ "','"
							+ fechaHasta + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearProyectoLinea(String proyecto, String linea,
			String financiador) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			int c = 0;

			ResultSet rs = conexion
					.consultarBD("SELECT COUNT(*) FROM proyecto_linea_finan WHERE id_proyecto= "
							+ proyecto
							+ " AND id_linea = "
							+ linea
							+ " AND id_financiador=" + financiador);

			try {
				if (rs.next()) {
					c = rs.getInt(1);
				}
				rs.close();

			} catch (SQLException e) {
				// e.printStackTrace();
			}

			if (c == 0) {

				boolean actualizo = conexion
						.actualizarBD("INSERT INTO proyecto_linea_finan(id_proyecto,id_linea,id_financiador) VALUES("
								+ proyecto
								+ ","
								+ linea
								+ ","
								+ financiador
								+ ")");
				if (actualizo) {
					exito = 1;
				}

			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearLinea(String proyecto) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO lineas(nombre) VALUES('"
							+ proyecto.trim() + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}
	
	
	public int crearBackup(String nombre) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO backups(nombre) VALUES('"
							+ nombre + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}
	
	

	public int crearProyecto(String proyecto) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO proyectos(nombre) VALUES('"
							+ proyecto.trim() + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int actualizarArchivoTema(String id, String nombreArchivo) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE temas SET archivo ='"
							+ nombreArchivo.toLowerCase() + "' WHERE id =" + id);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int actualizarFinanciador(String financiador) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE financiadores SET posee_logo ='S' WHERE id ="
							+ financiador);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearFinanciador(String financiador) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO financiadores(nombre) VALUES('"
							+ financiador.trim() + "')");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int editarCurso(String id, String curso, String proyecto) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("UPDATE cursos SET nombre='" + curso.trim()
							+ "', id_proyecto=" + proyecto + " WHERE id=" + id);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearCurso(String curso, String proyecto) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO cursos(nombre,id_proyecto) VALUES('"
							+ curso.trim() + "'," + proyecto + ")");
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int crearAdmin(String pn, String sn, String pa, String sa, int doc,
			String correo, String clave) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			Parametro parametro = new Parametro();
			Email email = new Email();

			String[] parametros = parametro.getarametros();
			int c = 0;

			ResultSet rs = conexion
					.consultarBD("SELECT COUNT(*) FROM administradores WHERE documento= "
							+ doc);
			try {
				if (rs.next()) {
					c = rs.getInt(1);
				}
				rs.close();

			} catch (SQLException e) {
				// e.printStackTrace();
			}

			String asunto = "";
			String mensaje = "";

			if (c == 0) {
				asunto = "Nueva cuenta en software MUASOFT - Ruta Pacífica de las Mujeres";
				mensaje = "<table width='100%' border='0'>"
						+ "<tr>"
						+ "<td colspan='2' align='left' valign='middle'><strong>software MUASOFT - Ruta Pacífica de las Mujeres</strong></td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td colspan='2'>&nbsp;</td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td colspan='2'><p>Estimado administrador(a) <strong>"
						+ pn
						+ " "
						+ sn
						+ " "
						+ pa
						+ " "
						+ sa
						+ "</strong> se le ha creado una nueva cuenta en software MUASOFT - Ruta Pacífica de las Mujeres. Le recordamos su nueva contraseña, cámbiela cuando desee desde el menú administrador. La contraseña es: "
						+ clave
						+ ".</p>"
						+ "<p>&nbsp; </p></td>"
						+ "</tr>"
						+ "<tr>"
						+ "<td colspan='2'><span class='Estilo6'>* Puedes visitar nuestro portal en cualquier momento dirigi&eacute;ndote a la direcci&oacute;n de internet: <a href='"
						+ parametros[0]
						+ "'>"
						+ parametros[0]
						+ "</a> &oacute; contactarnos a nuestro correo: "
						+ parametros[1]
						+ " </span></td>"
						+ "</tr>"
						+ "</table>";

				try {
					email.enviarEmail(mensaje, asunto, correo);
				} catch (Exception e) {

					// e.printStackTrace();
				}

				boolean actualizo = conexion
						.actualizarBD("INSERT INTO administradores(primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,documento,clave,correo) VALUES('"
								+ pn
								+ "','"
								+ sn
								+ "','"
								+ pa
								+ "','"
								+ sa
								+ "',"
								+ doc
								+ ",\""
								+ clave
								+ "\",'"
								+ correo
								+ "')");
				if (actualizo) {
					exito = 1;
				}
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public int getEnviarNuevaClaveAdmin(String correo, int id, String m,
			String clave) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			Parametro parametro = new Parametro();
			Email email = new Email();

			String[] parametros = parametro.getarametros();
			Administrador admin = new Administrador();

			String asunto = "";
			String mensaje = "";

			if (m.equals("0")) {
				admin.setClave(this.getClaveAleatoria());
			} else {
				admin.setClave(clave);
			}
			asunto = "Nueva clave para el software MUASOFT - Ruta Pacífica de las Mujeres";
			mensaje = "<table width='100%' border='0'>"
					+ "<tr>"
					+ "<td colspan='2' align='left' valign='middle'><strong>Sistema de informaci&oacute;n de MUASOFT - Ruta Pacífica de las Mujeres</strong></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td colspan='2'>&nbsp;</td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td colspan='2'><p>Estimado administrador(a), se le ha asignado una nueva contraseña. Cámbiela cuando desee. La contraseña es: "
					+ admin.getClave()
					+ "</p>"
					+ "<p>&nbsp; </p></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td colspan='2'><span class='Estilo6'>* Puedes visitar nuestro portal en cualquier momento dirigi&eacute;ndote a la direcci&oacute;n de internet: <a href='"
					+ parametros[0] + "'>" + parametros[0]
					+ "</a> &oacute; contactarnos a nuestro correo: "
					+ parametros[1] + " </span></td></tr>" + "</table>";

			try {
				email.enviarEmail(mensaje, asunto, correo);
			} catch (Exception e) {

				// e.printStackTrace();
			}

			boolean actualizo = conexion
					.actualizarBD("UPDATE administradores SET clave=(\""
							+ admin.getClave() + "\") WHERE id_administrador="
							+ id);
			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// e//e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	private String getClaveAleatoria() {
		String clave = "";
		for (int i = 0; i <= 3; i++) {
			int n = (int) (10.0 * Math.random()) + 0;
			clave = clave + String.valueOf(n);

		}
		return clave;

	}

	public int eliminarArchivoPlano(String pArchivo, String idArchivo) {
		Parametro parametro = new Parametro();
		String[] parametros = parametro.getarametros();
		java.io.File directorio = new java.io.File(parametros[5] + pArchivo);
		directorio.delete();

		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;
		actualizo = conexion
				.actualizarBD("DELETE FROM archivos_planos WHERE id_archivo="
						+ Integer.parseInt(idArchivo));
		// conexion.commitBD();
		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarPortafolio(String idPortafolio) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM portafolio WHERE id_portafolio="
						+ Integer.parseInt(idPortafolio));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarCaso(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		conexion.actualizarBD("DELETE FROM protecciones WHERE id_caso="
				+ Integer.parseInt(idAdministrador));

		actualizo = conexion.actualizarBD("DELETE FROM casos WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarMujer(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM mujeres WHERE id_mujer="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarMC(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM mujeres_curso WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarPregunta(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM preguntas WHERE id_pregunta="
						+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarOpcion(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM opciones_respuesta WHERE id_op_respuesta="
						+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarFinanciadorC(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		int curso = 0;
		ResultSet rs2 = conexion
				.consultarBD("SELECT id_curso FROM  curso_financiador WHERE id="
						+ idAdministrador);
		try {
			if (rs2.next()) {
				curso = rs2.getInt(1);
			}
			rs2.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		}

		actualizo = conexion
				.actualizarBD("DELETE FROM curso_financiador WHERE id="
						+ Integer.parseInt(idAdministrador));

		int c = 0;
		ResultSet rs = conexion
				.consultarBD("SELECT COUNT(*) FROM curso_financiador WHERE id_curso ="
						+ curso);
		try {
			if (rs.next()) {
				c = rs.getInt(1);
			}
			rs.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		}

		BigDecimal porcentaje = new BigDecimal(100).divide(new BigDecimal(c),
				10, RoundingMode.HALF_UP).setScale(2, RoundingMode.HALF_UP);
		conexion.actualizarBD("UPDATE curso_financiador SET porcentaje="
				+ porcentaje + " WHERE id_curso=" + curso);

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarLineaC(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		int curso = 0;
		ResultSet rs2 = conexion
				.consultarBD("SELECT id_curso FROM  curso_linea WHERE id="
						+ idAdministrador);
		try {
			if (rs2.next()) {
				curso = rs2.getInt(1);
			}
			rs2.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		}

		actualizo = conexion.actualizarBD("DELETE FROM curso_linea WHERE id="
				+ Integer.parseInt(idAdministrador));

		int c = 0;
		ResultSet rs = conexion
				.consultarBD("SELECT COUNT(*) FROM curso_linea WHERE id_curso ="
						+ curso);
		try {
			if (rs.next()) {
				c = rs.getInt(1);
			}
			rs.close();

		} catch (SQLException e) {
			// e.printStackTrace();
		}

		BigDecimal porcentaje = new BigDecimal(100).divide(new BigDecimal(c),
				10, RoundingMode.HALF_UP).setScale(2, RoundingMode.HALF_UP);
		conexion.actualizarBD("UPDATE curso_linea SET porcentaje=" + porcentaje
				+ " WHERE id_curso=" + curso);

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarActividad(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM actividades_mujeres WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarParticipacion(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM participaciones_mujeres WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarCapacitacion(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM capacitaciones_mujeres WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarDelito(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM delitos_casos WHERE id="
				+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarLibertad(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM libertades_casos WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarIndividual(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM individuales_casos WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarFamiliar(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM familiares_casos WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarColectivo(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM colectivos_casos WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarHecho(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM hechos WHERE id="
				+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarAcompanamiento(String id, String caso) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM acompanamientos WHERE id="
						+ Integer.parseInt(id));

		String sentencia = "SELECT * FROM acompanamientos a WHERE a.id_caso="
				+ caso + " ORDER BY a.fecha_atencion, a.numero_acompanamiento";
		int orden = 0;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {

				orden++;

				conexion.actualizarBD("UPDATE acompanamientos SET numero_acompanamiento = "
						+ orden + " WHERE id=" + rs.getObject(1));

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarRuta(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM rutas_atencion WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarAgresor(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM agresores WHERE id="
				+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarAmenaza(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM amenazas_casos WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarNivel(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM niveles_mujeres WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarTema(String idAdministrador, String ruta) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM temas WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();

		if (actualizo) {
			java.io.File archivo = new java.io.File(ruta);

			if (archivo.exists()) {
				archivo.delete();
			}
		}

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarAsistencia(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM asistencia WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int activarEncuesta(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int sw = 1;

		List<Object[]> preguntas = getPreguntas(idAdministrador);
		if (preguntas != null && preguntas.size() > 0) {
			for (Object[] pregunta : preguntas) {
				if (pregunta[3] != null
						&& (((String) pregunta[3]).equals("M") || ((String) pregunta[3])
								.equals("U"))) {
					List<Object[]> opciones = this
							.getOpciones("" + pregunta[0]);
					if (!(opciones != null && opciones.size() > 0)) {
						sw = 0;
						break;
					}
				}
			}

		} else {
			sw = 0;

		}

		if (sw == 1) {
			boolean actualizo = conexion
					.actualizarBD("UPDATE encuestas SET activa = 'S' WHERE id_encuesta = "
							+ Integer.parseInt(idAdministrador));
			if (!actualizo) {
				sw = 0;
			}

		}

		return sw;
	}

	public int eliminarEncuesta(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM encuestas WHERE id_encuesta="
						+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarProyectoLinea(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM proyecto_linea_finan WHERE id="
						+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarLinea(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM lineas WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarProyecto(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM proyectos WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarArchivoTema(String id, String ruta) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int exito = 0;
		boolean actualizo = conexion
				.actualizarBD("UPDATE temas SET archivo = NULL WHERE id =" + id);

		java.io.File archivo = new java.io.File(ruta);
		if (actualizo) {
			if (archivo.exists()) {
				archivo.delete();
			}

			if (actualizo) {
				exito = 1;
			}
		}
		return exito;
	}

	public int eliminarLogoFinanciador(String id, String ruta) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int exito = 0;
		boolean actualizo = conexion
				.actualizarBD("UPDATE financiadores SET posee_logo ='N' WHERE id ="
						+ id);

		java.io.File archivo = new java.io.File(ruta);
		if (actualizo) {
			if (archivo.exists()) {
				archivo.delete();
			}

			if (actualizo) {
				exito = 1;
			}
		}
		return exito;
	}

	public int eliminarFinanciador(String idAdministrador, String ruta) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM financiadores WHERE id="
				+ Integer.parseInt(idAdministrador));

		if (actualizo) {
			java.io.File archivo = new java.io.File(ruta);

			if (archivo.exists()) {
				archivo.delete();
			}
		}

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarCurso(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("DELETE FROM cursos WHERE id="
				+ Integer.parseInt(idAdministrador));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarAdministrador(String idAdministrador) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		ResultSet rs = conexion
				.consultarBD("SELECT COUNT(*) FROM administradores");
		int c = 0;
		try {
			while (rs.next()) {
				c = rs.getInt(1);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		}

		if (c > 1) {
			actualizo = conexion
					.actualizarBD("DELETE FROM administradores WHERE id_administrador="
							+ Integer.parseInt(idAdministrador));
		}

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarCertificado(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM certificados WHERE id_certificado="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int eliminarArchivo(String pArchivo, String idFoto, String ruta) {
		Parametro parametro = new Parametro();
		String[] parametros = parametro.getarametros();
		java.io.File directorio = new java.io.File(pArchivo);
		// java.io.File directorio = new java.io.File(parametros[2] + pArchivo);
		// //antes
		directorio.delete();

		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;
		actualizo = conexion
				.actualizarBD("DELETE FROM repositorio_fotos WHERE id_foto="
						+ Integer.parseInt(idFoto));
		// conexion.commitBD();

		if (actualizo) {
			g = 1;
		}

		List<RepositorioFotos> fotos = new ArrayList<RepositorioFotos>();

		String sentencia = "";

		sentencia = "SELECT rf.fecha_publicacion, rf.direccion_foto, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, id_foto FROM repositorio_fotos rf, egresados eg WHERE rf.id_egresado = eg.id_egresado"
				+ " UNION ALL"
				+ " SELECT rf.fecha_publicacion, rf.direccion_foto, 'ADMINISTRADOR' AS nombre, id_foto FROM repositorio_fotos rf WHERE rf.id_administrador IS NOT NULL AND id_egresado IS NULL";

		RepositorioFotos foto2 = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				foto2 = new RepositorioFotos();
				foto2.setIdFoto(rs.getInt(4));
				foto2.setNombre(rs.getString(3));
				foto2.setFechaPublicacion(rs.getString(1));
				foto2.setDireccionFoto(rs.getString(2));

				fotos.add(foto2);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		int cuenta = 0;
		if (fotos != null && fotos.size() > 0) {
			for (RepositorioFotos p : fotos) {
				actualizo = false;
				cuenta++;
				g = cuenta;
				File f1 = new File(ruta + "/cursos/" + p.getDireccionFoto());
				f1.renameTo(new File(ruta + "/cursos/T" + p.getDireccionFoto()));

				if (!f1.exists()) {
					f1 = new File(ruta + "\\cursos\\" + p.getDireccionFoto());
					f1.renameTo(new File(ruta + "\\cursos\\T"
							+ p.getDireccionFoto()));
				}

				actualizo = conexion
						.actualizarBD("UPDATE repositorio_fotos SET direccion_foto='curso_"
								+ cuenta
								+ ".jpg' WHERE id_foto="
								+ p.getIdFoto());
			}

			cuenta = 0;
			for (RepositorioFotos p : fotos) {

				cuenta++;

				File f3 = new File(ruta + "/cursos/T" + p.getDireccionFoto());
				f3.renameTo(new File(ruta + "/cursos/curso_" + cuenta + ".jpg"));

				if (!f3.exists()) {
					f3 = new File(ruta + "\\cursos\\T" + p.getDireccionFoto());
					f3.renameTo(new File(ruta + "\\cursos\\curso_" + cuenta
							+ ".jpg"));
				}

			}

		}

		conexion.cerrarConexion();

		return g;
	}

	public List<RepositorioFotos> getRepositorioFotosEliminar(
			String tipoUsuario, String usuario) {
		List<RepositorioFotos> fotos = new ArrayList<RepositorioFotos>();
		Conexion conexion = new Conexion();
		String sentencia = "";
		if (tipoUsuario.equals("1")) {
			sentencia = "SELECT rf.fecha_publicacion, rf.direccion_foto, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, id_foto FROM repositorio_fotos rf, egresados eg WHERE rf.id_egresado = eg.id_egresado AND eg.id_egresado="
					+ usuario;
		} else {
			sentencia = "SELECT rf.fecha_publicacion, rf.direccion_foto, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, id_foto FROM repositorio_fotos rf, egresados eg WHERE rf.id_egresado = eg.id_egresado"
					+ " UNION ALL"
					+ " SELECT rf.fecha_publicacion, rf.direccion_foto, 'ADMINISTRADOR' AS nombre, id_foto FROM repositorio_fotos rf WHERE rf.id_administrador IS NOT NULL AND id_egresado IS NULL";
		}
		RepositorioFotos foto = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			while (rs.next()) {
				foto = new RepositorioFotos();
				foto.setIdFoto(rs.getInt(4));
				foto.setNombre(rs.getString(3));
				foto.setFechaPublicacion(rs.getString(1));
				foto.setDireccionFoto(rs.getString(2));
				fotos.add(foto);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return fotos;
	}

	public List<RepositorioFotos> getRepositorioFotos() {
		List<RepositorioFotos> fotos = new ArrayList<RepositorioFotos>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT rf.fecha_publicacion, rf.direccion_foto, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre FROM repositorio_fotos rf, egresados eg WHERE rf.id_egresado = eg.id_egresado"
				+ " UNION ALL"
				+ " SELECT rf.fecha_publicacion, rf.direccion_foto, 'ADMINISTRADOR' AS nombre FROM repositorio_fotos rf WHERE rf.id_administrador IS NOT NULL AND id_egresado IS NULL";
		RepositorioFotos foto = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			while (rs.next()) {
				foto = new RepositorioFotos();
				foto.setNombre(rs.getString(3));
				foto.setFechaPublicacion(rs.getString(1));
				foto.setDireccionFoto(rs.getString(2));
				fotos.add(foto);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return fotos;
	}

	public int guardarArchivoPlano(String usuario, String archivo) {
		Conexion conexion = new Conexion();
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
		int g = 0;
		boolean actualizo = false;
		actualizo = conexion
				.actualizarBD("INSERT INTO archivos_planos(archivo, id_administrador, fecha) VALUES('"
						+ archivo
						+ "',"
						+ usuario
						+ ",'"
						+ formato.format(new Date()) + "' )");
		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;

	}

	public int guardarRepositorio(String tipoEgresado, String usuario,
			String foto) {
		Conexion conexion = new Conexion();
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("INSERT INTO repositorio_fotos(direccion_foto, id_administrador, fecha_publicacion) VALUES('"
						+ foto + "',1,'" + formato.format(new Date()) + "')");

		if (actualizo) {
			g = 1;
		}

		List<RepositorioFotos> fotos = new ArrayList<RepositorioFotos>();

		String sentencia = "";

		sentencia = "SELECT rf.fecha_publicacion, rf.direccion_foto, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, id_foto FROM repositorio_fotos rf, egresados eg WHERE rf.id_egresado = eg.id_egresado"
				+ " UNION ALL"
				+ " SELECT rf.fecha_publicacion, rf.direccion_foto, 'ADMINISTRADOR' AS nombre, id_foto FROM repositorio_fotos rf WHERE rf.id_administrador IS NOT NULL AND id_egresado IS NULL";

		RepositorioFotos foto2 = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				foto2 = new RepositorioFotos();
				foto2.setIdFoto(rs.getInt(4));
				foto2.setNombre(rs.getString(3));
				foto2.setFechaPublicacion(rs.getString(1));
				foto2.setDireccionFoto(rs.getString(2));
				fotos.add(foto2);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		int cuenta = 0;
		if (fotos != null && fotos.size() > 0) {
			for (RepositorioFotos p : fotos) {
				actualizo = false;
				cuenta++;
				g = cuenta;
				actualizo = conexion
						.actualizarBD("UPDATE repositorio_fotos SET direccion_foto='curso_"
								+ cuenta
								+ ".jpg' WHERE id_foto="
								+ p.getIdFoto());
			}

		}

		conexion.cerrarConexion();

		return g;

	}

	public int guardarPlanilla2(String[][] datos, int longitud)
			throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;

		for (int i = 0; i <= datos.length - 1; i++) {
			conexion.actualizarBD("INSERT INTO asistencia(id_tema,fecha, asistio, horas,nombres_otra,documento_otra,comuna_otra,telefono_otra,fundacion_otra) VALUES ('"
					+ datos[i][5]
					+ "','"
					+ datos[i][2]
					+ "','S','"
					+ datos[i][3]
					+ "','"
					+ datos[i][0]
					+ "','"
					+ datos[i][1]
					+ "','"
					+ datos[i][6]
					+ "','"
					+ datos[i][7]
					+ "','"
					+ datos[i][8] + "')");

		}

		g = 1;

		return g;

	}

	public int guardarPlanilla(String[][] datos, int longitud) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;

		for (int i = 0; i <= datos.length - 1; i++) {
			conexion.actualizarBD("INSERT INTO asistencia(id_mujer_curso,id_tema,fecha, asistio, horas, id_financiador, id_linea) VALUES ('"
					+ datos[i][0]
					+ "','"
					+ datos[i][5]
					+ "','"
					+ datos[i][2]
					+ "','"
					+ datos[i][1]
					+ "','"
					+ datos[i][3]
					+ "','"
					+ datos[i][6] + "','" + datos[i][7] + "')");

		}

		g = 1;

		return g;

	}

	public int guardarCertificado(String[][] datos, int longitud)
			throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;

		for (int i = 0; i <= longitud - 1; i++) {
			conexion.actualizarBD("INSERT INTO certificados(tipo_documento,documento,ciudad_documento,nombre_completo,fecha_inicio,fecha_fin,fecha_disponibilidad,tipo_certificado,ciudad_depto_curso,numero_horas) VALUES ('"
					+ datos[i][9]
					+ "','"
					+ datos[i][2]
					+ "','"
					+ datos[i][1]
					+ "','"
					+ datos[i][6]
					+ "','"
					+ datos[i][5]
					+ "','"
					+ datos[i][4]
					+ "','"
					+ datos[i][3]
					+ "','"
					+ datos[i][8]
					+ "','" + datos[i][0] + "','" + datos[i][7] + "')");

		}

		g = 1;

		return g;

	}

	public int guardarSeccion(String titulo, String contenido, String foto,
			String receptor) throws Exception {
		Conexion conexion = new Conexion();
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
		int g = 0;
		boolean actualizo = false;
		if (foto == null || foto.equals("null")) {
			foto = "";
		}
		actualizo = conexion
				.actualizarBD("UPDATE secciones SET titulo_seccion = '"
						+ titulo + "',  direccion_foto_seccion = '" + foto
						+ "', fecha = '" + formato.format(new Date())
						+ "', contenido_seccion ='" + contenido
						+ "' WHERE id_seccion =" + Integer.parseInt(receptor));

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int actualizarLineaC(String id, String valor) throws Exception {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion.actualizarBD("UPDATE curso_linea SET porcentaje="
				+ valor + " WHERE id=" + Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;

	}

	public int actualizarFinanciadorC(String id, String valor) throws Exception {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("UPDATE curso_financiador SET porcentaje="
						+ valor + " WHERE id=" + Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;

	}

	public int actualizarParametro(String id, String titulo, String valor)
			throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		String[] campos = { "titulo", "valor" };
		String[] valores = new String[2];
		String[][] condiciones = new String[1][2];

		valores[0] = titulo;
		valores[1] = valor;

		condiciones[0][0] = "id";
		condiciones[0][1] = "" + id;

		boolean bandera = conexion.actualizarBD2("parametros_globales", campos,
				valores, condiciones);
		if (bandera) {
			g = 1;
		}

		return g;

	}

	public int eliminarParametro(String id) {
		Conexion conexion = new Conexion();
		conexion.setAutoCommitBD(true);
		int g = 0;
		boolean actualizo = false;

		actualizo = conexion
				.actualizarBD("DELETE FROM parametros_globales WHERE id="
						+ Integer.parseInt(id));

		conexion.cerrarConexion();

		if (actualizo) {
			g = 1;
		}
		return g;
	}

	public int crearParametro(String titulo, String valor) {
		Conexion conexion = new Conexion();
		int exito = 0;
		try {

			boolean actualizo = conexion
					.actualizarBD("INSERT INTO parametros_globales(titulo,valor) VALUES('"
							+ titulo.trim() + "','" + valor.trim() + "')");

			if (actualizo) {
				exito = 1;
			}

		} catch (Exception ee) {
			// ee
		} finally {
			conexion.cerrarConexion();
		}

		return exito;

	}

	public List<Object[]> getEPSARS(String id) {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM eps_ars WHERE tipo IN( '" + id
				+ "','O') AND estado = 'A' ORDER BY nombre";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getMunicipios(String id) {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM ciudades WHERE id_departamento = "
				+ id + " ORDER BY nombre_ciudad";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}
	
	
	public List<Object[]> getBackups() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM backups order by id DESC";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[2];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
			

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}
	

	public List<Object[]> getActores() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM actores_armados order by nombre";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getGeneros() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM generos ORDER BY nombre";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[2];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getEtnias() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM etnias ORDER BY nombre";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[2];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getEstadosCiviles() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM estados_civiles";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getTiposDocumento() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM tipos_documento";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getDepartamentos() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM departamentos WHERE id_pais = 1 ORDER BY nombre_departamento";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public List<Object[]> getParametrosGlobales() {
		List<Object[]> parametros = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM parametros_globales ORDER BY titulo";

		Object[] parametro = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				parametro = new Object[3];
				parametro[0] = rs.getObject(1);
				parametro[1] = rs.getObject(2);
				parametro[2] = rs.getObject(3);

				parametros.add(parametro);

			}
			rs.close();
		} catch (SQLException e) {
			// e
		} finally {
			conexion.cerrarConexion();
		}
		return parametros;
	}

	public int actualizarHojaVida(String[] valores, String id) throws Exception {
		String[][] condiciones = new String[1][2];

		Conexion conexion = new Conexion();
		int g = 0;
		boolean actualizo = false;

		condiciones[0][0] = "id_mujer";
		condiciones[0][1] = id;

		String[] campos = {

		"nombres", "apellidos", "id_tipo_documento", "justificacion_documento",
				"documento", "id_ciudad", "fecha_nacimiento", "sexo",
				"id_genero", "id_estado_civil", "justificacion_estado_civil",
				"id_etnia", "regimen", "id_eps_ars", "justificacion_eps_ars",
				"profesion", "cabeza_hogar", "tipo_subsidio",
				"justificacion_subsidio", "hijas", "hijos",
				"ciudad_residencia", "direccion", "telefonos", "liderazgo",
				"anos_liderazgo", "meses_liderazgo", "rango_edad1",
				"rango_edad2", "rango_edad3", "rango_edad4", "rango_edad5",
				"correo"

		};

		actualizo = conexion.actualizarBD2("mujeres", campos, valores,
				condiciones);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int actualizarHojaVida2(Object[] valores, String id)
			throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

				// "primer_nombre", "segundo_nombre", "primer_apellido",
				// "segundo_apellido", "documento", "fecha_nacimiento",
				// "estado_civil", "correo", "sexo", "hijas", "hijos",
				// "direccion", "telefonos", "tipo_sitio", "nombre_comuna",
				// "numero_comuna", "nivel_educativo", "actividad_economica",
				// "participa_organizacion", "organizaciones", "anos_liderazgo",
				// "meses_liderazgo", "institucion_capacitacion_1",
				// "nivel_capacitacion_1", "institucion_capacitacion_2",
				// "nivel_capacitacion_2", "institucion_capacitacion_3",
				// "nivel_capacitacion_3", "institucion_capacitacion_4",
				// "nivel_capacitacion_4", "institucion_capacitacion_5",
				// "nivel_capacitacion_5", "capacitacion_6",
				// "institucion_capacitacion_6", "nivel_capacitacion_6",
				// "observaciones"
				"primer_nombre", "segundo_nombre", "primer_apellido",
				"segundo_apellido", "documento", "fecha_nacimiento",
				"estado_civil", "correo", "sexo", "hijas", "hijos",
				"direccion", "telefonos", "tipo_sitio", "id_comuna",
				"id_barrio", "inscrita", "id_corregimiento", "id_vereda"

		};

		String[] campos2 = {

				// "primer_nombre", "segundo_nombre", "primer_apellido",
				// "segundo_apellido", "documento", "fecha_nacimiento",
				// "estado_civil", "correo", "sexo", "hijas", "hijos",
				// "direccion", "telefonos", "tipo_sitio", "nombre_comuna",
				// "numero_comuna", "nivel_educativo", "actividad_economica",
				// "participa_organizacion", "organizaciones", "anos_liderazgo",
				// "meses_liderazgo", "institucion_capacitacion_1",
				// "nivel_capacitacion_1", "institucion_capacitacion_2",
				// "nivel_capacitacion_2", "institucion_capacitacion_3",
				// "nivel_capacitacion_3", "institucion_capacitacion_4",
				// "nivel_capacitacion_4", "institucion_capacitacion_5",
				// "nivel_capacitacion_5", "capacitacion_6",
				// "institucion_capacitacion_6", "nivel_capacitacion_6",
				// "observaciones"
				"primer_nombre", "segundo_nombre", "primer_apellido",
				"segundo_apellido", "documento", "fecha_nacimiento",
				"estado_civil", "correo", "sexo", "hijas", "hijos",
				"direccion", "telefonos", "tipo_sitio", "id_corregimiento",
				"id_vereda", "inscrita", "id_comuna", "id_barrio"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id";
		condiciones[0][1] = "" + id;

		if (valores != null && ("" + valores[13]).equals("C")) {
			actualizo = conexion.actualizarBD2("mujeres", campos, valores,
					condiciones);

		} else {
			actualizo = conexion.actualizarBD2("mujeres", campos2, valores,
					condiciones);
		}

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int editarAgresor(Object[] valores, String id) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "conocido", "nombre", "sexo", "id_genero", "edad",
				"justificacion_actor", "tipo_actor",
				"justificacion_tipo_actor", "id_actor"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id";
		condiciones[0][1] = id;

		actualizo = conexion.actualizarBD2("agresores", campos, valores,
				condiciones);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int editarHecho(Object[] valores, String id) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "fecha", "hora", "minuto", "id_ciudad", "lugar",
				"justificacion_lugar", "comunidad", "resguardo",
				"vereda_corregimiento", "relato_hechos", "testigo",
				"justificacion_testigos", "documentacion", "documentacion1",
				"documentacion2", "documentacion3", "documentacion4",
				"justificacion_documentacion", "tipo_hecho", "frecuencia"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id";
		condiciones[0][1] = id;

		actualizo = conexion.actualizarBD2("hechos", campos, valores,
				condiciones);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int editarProteccion(Object[] valores, String id) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"riesgo", "justificacion_riesgo", "medida", "justificacion_medida",
				"proteccion", "justificacion_proteccion", "tipo_medidas",
				"adecuada", "justificacion_adecuada"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id_caso";
		condiciones[0][1] = id;

		actualizo = conexion.actualizarBD2("protecciones", campos, valores,
				condiciones);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int editarRuta(Object[] valores, String id) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "hecho_denunciado", "denunciante",
				"justificacion_denunciante", "justificacion_relacion",
				"lugar_denuncia1", "lugar_denuncia2", "lugar_denuncia3",
				"lugar_denuncia4", "lugar_denuncia5", "lugar_denuncia6",
				"lugar_denuncia7", "lugar_denuncia8", "fecha_denuncia",
				"id_ciudad", "atencion", "justificacion_atencion",
				"documentacion", "justificacion_documentacion", "denuncia",
				"justificacion_denuncia", "victima", "no_denuncia1",
				"no_denuncia2", "no_denuncia3", "no_denuncia4", "no_denuncia5",
				"no_denuncia6", "no_denuncia7", "justificacion_no_denuncia",
				"interesada", "justificacion_lugar", "justificacion_victima"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id";
		condiciones[0][1] = id;

		actualizo = conexion.actualizarBD2("rutas_atencion", campos, valores,
				condiciones);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int editarAcompanamiento(Object[] valores, String id)
			throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "id_administrador", "fecha_atencion", "id_municipio",
				"tipo_atencion1", "tipo_atencion2", "tipo_atencion3",
				"tipo_atencion4", "tipo_atencion5", "tipo_atencion6",
				"tipo_atencion7", "justificacion_tipo_atencion", "impacto",
				"juridico", "restablecimiento",
				"justificacion_restablecimiento", "institucion1",
				"institucion2", "institucion3", "institucion4", "institucion5",
				"institucion6", "institucion7", "institucion8",
				"justificacion_institucion", "numero_acompanamiento"

		};

		String[][] condiciones = new String[1][2];
		condiciones[0][0] = "id";
		condiciones[0][1] = id;

		actualizo = conexion.actualizarBD2("acompanamientos", campos, valores,
				condiciones);

		String sentencia = "SELECT * FROM acompanamientos a WHERE a.id_caso="
				+ valores[0]
				+ " ORDER BY a.fecha_atencion, a.numero_acompanamiento";
		int orden = 0;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {

				orden++;

				conexion.actualizarBD("UPDATE acompanamientos SET numero_acompanamiento = "
						+ orden + " WHERE id=" + rs.getObject(1));

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarAcompanamiento(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "id_administrador", "fecha_atencion", "id_municipio",
				"tipo_atencion1", "tipo_atencion2", "tipo_atencion3",
				"tipo_atencion4", "tipo_atencion5", "tipo_atencion6",
				"tipo_atencion7", "justificacion_tipo_atencion", "impacto",
				"juridico", "restablecimiento",
				"justificacion_restablecimiento", "institucion1",
				"institucion2", "institucion3", "institucion4", "institucion5",
				"institucion6", "institucion7", "institucion8",
				"justificacion_institucion", "numero_acompanamiento"

		};

		actualizo = conexion.insertarBD2("acompanamientos", campos, valores);

		String sentencia = "SELECT * FROM acompanamientos a WHERE a.id_caso="
				+ valores[0]
				+ " ORDER BY a.fecha_atencion, a.numero_acompanamiento";
		int orden = 0;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {

				orden++;

				conexion.actualizarBD("UPDATE acompanamientos SET numero_acompanamiento = "
						+ orden + " WHERE id=" + rs.getObject(1));

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarRuta(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "hecho_denunciado", "denunciante",
				"justificacion_denunciante", "justificacion_relacion",
				"lugar_denuncia1", "lugar_denuncia2", "lugar_denuncia3",
				"lugar_denuncia4", "lugar_denuncia5", "lugar_denuncia6",
				"lugar_denuncia7", "lugar_denuncia8", "fecha_denuncia",
				"id_ciudad", "atencion", "justificacion_atencion",
				"documentacion", "justificacion_documentacion", "denuncia",
				"justificacion_denuncia", "victima", "no_denuncia1",
				"no_denuncia2", "no_denuncia3", "no_denuncia4", "no_denuncia5",
				"no_denuncia6", "no_denuncia7", "justificacion_no_denuncia",
				"interesada", "justificacion_lugar", "justificacion_victima"

		};

		String sentencia = "SELECT * FROM rutas_atencion a WHERE a.id_caso="
				+ valores[0] + " AND hecho_denunciado='S'";
		int denunciado = 0;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				denunciado = 1;
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		sentencia = "SELECT * FROM rutas_atencion a WHERE a.id_caso="
				+ valores[0] + " AND hecho_denunciado='N'";
		int no_denunciado = 0;
		ResultSet rs2 = conexion.consultarBD(sentencia);
		try {
			if (rs2.next()) {
				no_denunciado = 1;
			}
			rs2.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {

		}

		if (valores[1] != null && ("" + valores[1]).equals("N")) {

			if (no_denunciado == 1) {
				return 2; // ya existe un hecho no denunciado
			}

			if (denunciado == 1) {
				return 3; // ya existe un hecho denunciado
			}

		}

		actualizo = conexion.insertarBD2("rutas_atencion", campos, valores);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarProteccion(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "riesgo", "justificacion_riesgo", "medida",
				"justificacion_medida", "proteccion",
				"justificacion_proteccion", "tipo_medidas", "adecuada",
				"justificacion_adecuada"

		};

		actualizo = conexion.insertarBD2("protecciones", campos, valores);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarHecho(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "fecha", "hora", "minuto", "id_ciudad", "lugar",
				"justificacion_lugar", "comunidad", "resguardo",
				"vereda_corregimiento", "relato_hechos", "testigo",
				"justificacion_testigos", "documentacion", "documentacion1",
				"documentacion2", "documentacion3", "documentacion4",
				"justificacion_documentacion", "tipo_hecho", "frecuencia"

		};

		actualizo = conexion.insertarBD2("hechos", campos, valores);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarAgresor(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"id_caso", "conocido", "nombre", "sexo", "id_genero", "edad",
				"justificacion_actor", "tipo_actor",
				"justificacion_tipo_actor", "id_actor"

		};

		actualizo = conexion.insertarBD2("agresores", campos, valores);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarHojaVida(Object[] valores) throws Exception {
		Conexion conexion = new Conexion();

		int g = 0;
		boolean actualizo = false;

		String[] campos = {

		"nombres", "apellidos", "id_tipo_documento", "justificacion_documento",
				"documento", "id_ciudad", "fecha_nacimiento", "sexo",
				"id_genero", "id_estado_civil", "justificacion_estado_civil",
				"id_etnia", "regimen", "id_eps_ars", "justificacion_eps_ars",
				"profesion", "cabeza_hogar", "tipo_subsidio",
				"justificacion_subsidio", "hijas", "hijos",
				"ciudad_residencia", "direccion", "telefonos", "liderazgo",
				"anos_liderazgo", "meses_liderazgo", "rango_edad1",
				"rango_edad2", "rango_edad3", "rango_edad4", "rango_edad5",
				"correo"

		};

		actualizo = conexion.insertarBD2("mujeres", campos, valores);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int guardarPublicacion(int tipoUsuario, int administrador,
			int egresado, int privacidad, String titulo, String contenido,
			String foto, String receptor) throws Exception {
		Conexion conexion = new Conexion();
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd");
		int g = 0;
		boolean actualizo = false;
		if (receptor.equals("0")) {
			receptor = null;
		}

		Object[] objeto = new Object[7];

		objeto[0] = administrador;
		objeto[1] = privacidad;
		titulo = titulo.replace("“", "\'");
		titulo = titulo.replace("”", "\'");
		objeto[2] = titulo;
		contenido = contenido.replace("“", "\'");
		contenido = contenido.replace("”", "\'");
		objeto[3] = contenido;
		objeto[4] = foto;
		objeto[5] = receptor;
		objeto[6] = formato.format(new Date());

		String[] campos = { "id_administrador", "privacidad_publicacion",
				"titulo_publicacion", "contenido_publicacion",
				"direccion_foto_publicacion", "receptor", "fecha" };

		actualizo = conexion.insertarBD2("publicaciones", campos, objeto);

		if (actualizo) {
			g = 1;

		}
		return g;

	}

	public int eliminarPublicacion(int aIdPublicacion) {
		Conexion conexion = new Conexion();
		boolean actualizo = false;
		int g = 0;
		actualizo = conexion
				.actualizarBD("DELETE FROM publicaciones WHERE id_publicacion='"
						+ aIdPublicacion + "'");

		conexion.cerrarConexion();
		if (actualizo) {
			g = 1;
		}
		return g;

	}

	public List<Publicacion> getPublicaciones(int aEgresado) {
		List<Publicacion> publicaciones = new ArrayList<Publicacion>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion  FROM publicaciones pu LEFT JOIN egresados eg  ON  pu.id_egresado = eg.id_egresado WHERE privacidad_publicacion = 1 UNION ALL"
				+ " SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion FROM publicaciones pu, egresados eg WHERE privacidad_publicacion =3 AND receptor = "
				+ aEgresado
				+ " AND pu.id_egresado = eg.id_egresado"
				+ " ORDER BY fecha DESC, id_publicacion DESC FIRST 10";
		Publicacion publicacion = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			while (rs.next()) {
				publicacion = new Publicacion();
				publicacion.setIdPublicacion(rs.getInt(1));
				publicacion.setIdEgresado(rs.getInt(2));
				publicacion.setIdAdministrador(rs.getInt(3));
				publicacion.setNombre(rs.getString(4));
				publicacion.setFecha(rs.getString(5));
				publicacion.setTituloPublicacion(rs.getString(6));
				publicacion.setContenidoPublicacion(rs.getString(7));

				publicacion.setPrivacidadPublicacion(rs.getInt(9));

				if (rs.getString(8) == null
						|| rs.getString(8).trim().equals("")) {
					c++;
					// publicacion.setDireccionFotoPublicacion("sinImagen" + c +
					// ".jpg");
				} else {
					publicacion.setDireccionFotoPublicacion(rs.getString(8));
				}

				if (c == 4) {
					c = 0;
				}

				if (publicacion.getIdAdministrador() != 0) {
					publicacion.setNombre("Administrador");

				}

				publicaciones.add(publicacion);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return publicaciones;
	}

	public List<Publicacion> getPublicacionesEgresado(int aEgresado,
			int tipoUsuario) {
		List<Publicacion> publicaciones = new ArrayList<Publicacion>();
		Conexion conexion = new Conexion();
		String sentencia = "";
		if (tipoUsuario == 2) {
			sentencia = "SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion  FROM publicaciones pu, egresados eg  WHERE  pu.id_egresado = eg.id_egresado AND (receptor IS NULL OR receptor = 0) ORDER BY fecha DESC, id_publicacion DESC";
		} else {
			sentencia = "SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion  FROM publicaciones pu, egresados eg  WHERE  pu.id_egresado = eg.id_egresado AND eg.id_egresado="
					+ aEgresado
					+ " ORDER BY fecha DESC, id_publicacion DESC FIRST 10";
		}
		Publicacion publicacion = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			while (rs.next()) {
				publicacion = new Publicacion();
				publicacion.setIdPublicacion(rs.getInt(1));
				publicacion.setIdEgresado(rs.getInt(2));
				publicacion.setIdAdministrador(rs.getInt(3));
				publicacion.setNombre(rs.getString(4));
				publicacion.setFecha(rs.getString(5));
				publicacion.setTituloPublicacion(rs.getString(6));
				publicacion.setContenidoPublicacion(rs.getString(7));

				publicacion.setPrivacidadPublicacion(rs.getInt(9));

				if (rs.getString(8) == null
						|| rs.getString(8).trim().equals("")) {
					c++;
					// publicacion.setDireccionFotoPublicacion("sinImagen" + c +
					// ".jpg");
				} else {
					publicacion.setDireccionFotoPublicacion(rs.getString(8));
				}

				if (c == 4) {
					c = 0;
				}

				publicaciones.add(publicacion);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return publicaciones;
	}

	public Publicacion getNotaPublica(int id) {
		Conexion conexion = new Conexion();
		String sentencia = "SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion  FROM publicaciones pu LEFT JOIN egresados eg ON pu.id_egresado = eg.id_egresado WHERE privacidad_publicacion = 2 AND pu.id_publicacion="
				+ id;
		Publicacion publicacion = new Publicacion();
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			if (rs.next()) {
				publicacion = new Publicacion();
				publicacion.setIdPublicacion(rs.getInt(1));
				publicacion.setIdEgresado(rs.getInt(2));
				publicacion.setIdAdministrador(rs.getInt(3));
				publicacion.setNombre(rs.getString(4));
				publicacion.setFecha(rs.getString(5));
				publicacion.setTituloPublicacion(rs.getString(6));
				publicacion.setContenidoPublicacion(rs.getString(7));

				publicacion.setPrivacidadPublicacion(rs.getInt(9));

				if (rs.getString(8) == null
						|| rs.getString(8).trim().equals("")) {
					c++;
					// publicacion.setDireccionFotoPublicacion("sinImagen" + c +
					// ".jpg");
				} else {
					publicacion.setDireccionFotoPublicacion(rs.getString(8));
				}

				if (c == 4) {
					c = 0;
				}

				if (publicacion.getIdAdministrador() != 0) {
					publicacion.setNombre("Administrador");
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return publicacion;
	}

	public String getTextoCortado(String aTexto) {
		String texto = "";
		int longitud = 220;
		if (aTexto != null) {
			if (aTexto.trim().length() >= longitud) {
				String[] vector = aTexto.split("");
				for (int i = 0; i < longitud; i++) {
					texto += vector[i];
				}
				texto += " ...";
			} else {
				texto = aTexto.trim();
			}
		}

		return texto;

	}

	public Seccion getSeccion(int id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM secciones s WHERE s.id_seccion=" + id;

		Seccion seccion = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			if (rs.next()) {
				seccion = new Seccion();
				seccion.setSeccion(rs.getInt(1));

				seccion.setTitulo(rs.getString(2));
				seccion.setContenido(rs.getString(3));

				if (rs.getString(4) == null
						|| rs.getString(4).trim().equals("")) {

				} else {
					seccion.setDireccionFoto(rs.getString(4));
				}
				seccion.setFecha(rs.getString(5));

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return seccion;
	}

	public List<Seccion> getSecciones() {
		List<Seccion> secciones = new ArrayList<Seccion>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM secciones s ORDER BY s.id_seccion";

		Seccion seccion = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			while (rs.next()) {
				seccion = new Seccion();
				seccion.setSeccion(rs.getInt(1));

				seccion.setTitulo(rs.getString(2));
				seccion.setContenido(rs.getString(3));

				if (rs.getString(4) == null
						|| rs.getString(4).trim().equals("")) {

				} else {
					seccion.setDireccionFoto(rs.getString(4));
				}
				seccion.setFecha(rs.getString(5));

				secciones.add(seccion);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return secciones;
	}

	public List<Publicacion> getNotasPublicas() {
		List<Publicacion> publicaciones = new ArrayList<Publicacion>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT pu.id_publicacion, pu.id_egresado, id_administrador, (eg.primer_nombre||' '|| eg.segundo_nombre|| ' '|| eg.primer_apellido|| ' '|| eg.segundo_apellido) AS nombre, fecha, titulo_publicacion, contenido_publicacion, direccion_foto_publicacion, privacidad_publicacion  FROM publicaciones pu LEFT JOIN egresados eg ON pu.id_egresado = eg.id_egresado WHERE privacidad_publicacion = 2 ORDER BY fecha DESC, id_publicacion DESC";
		// " DESC, id_publicacion DESC";
		Publicacion publicacion = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		int c = 0;
		try {
			while (rs.next()) {
				publicacion = new Publicacion();
				publicacion.setIdPublicacion(rs.getInt(1));
				publicacion.setIdEgresado(rs.getInt(2));
				publicacion.setIdAdministrador(rs.getInt(3));
				publicacion.setNombre(rs.getString(4));
				publicacion.setFecha(rs.getString(5));
				publicacion.setTituloPublicacion(rs.getString(6));
				publicacion.setContenidoPublicacion(rs.getString(7));

				publicacion.setPrivacidadPublicacion(rs.getInt(9));

				if (rs.getString(8) == null
						|| rs.getString(8).trim().equals("")) {
					c++;
					// publicacion.setDireccionFotoPublicacion("sinImagen" + c +
					// ".jpg");
				} else {
					publicacion.setDireccionFotoPublicacion(rs.getString(8));
				}

				if (c == 4) {
					c = 0;
				}

				if (publicacion.getIdAdministrador() != 0) {
					publicacion.setNombre("Administrador");
				}

				publicaciones.add(publicacion);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return publicaciones;
	}

	public List<ArchivoPlano> getArchivosPlanos() {
		List<ArchivoPlano> archivos = new ArrayList<ArchivoPlano>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT *  FROM archivos_planos a ORDER BY a.fecha DESC, a.id_archivo DESC";
		ArchivoPlano archivo = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				archivo = new ArchivoPlano();
				archivo.setIdArchivo(rs.getInt(1));
				archivo.setArchivo(rs.getString(2));
				archivo.setFecha(rs.getString(3));
				archivos.add(archivo);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return archivos;
	}

	public List<Portafolio> getPortafolios() {
		List<Portafolio> portafolios = new ArrayList<Portafolio>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM portafolio a ORDER BY id_portafolio DESC";
		Portafolio portafolio = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				portafolio = new Portafolio();
				portafolio.setIdPortafolio(rs.getInt("id_portafolio"));
				portafolio.setTitulo(rs.getString("titulo_portafolio"));
				portafolio.setContenido(rs.getString("contenido_portafolio"));

				portafolios.add(portafolio);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return portafolios;
	}

	public List<Certificado> getTiposCertificados() {
		List<Certificado> tipos = new ArrayList<Certificado>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM tipo_certificacion a ORDER BY nombre_certificacion";
		Certificado tipo = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				tipo = new Certificado();
				tipo.setId(rs.getInt("id"));
				tipo.setNombre(rs.getString("nombre_certificacion"));

				tipos.add(tipo);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return tipos;
	}

	public List<Object[]> getCasos(String n, String a, String d, String etnia,
			String cabeza_hogar, String actor, String hecho_denunciado,
			String fecha_hechos, String fecha_hechos2, String responsable,
			String numero_atencion, String fecha_atencion,
			String fecha_atencion2, String departamento_hechos,
			String municipio_hechos,
			String amenazas,
			String delitos,
			String libertades,
			String impactosIndividuales,
			String impactosColectivos,
			String conocido,
			String sexo,
			String genero,
			String edad,
			String tipo_actor,
			String vereda,
			String testigos,
			String documentacion,
			String tipo_hecho,
			String riesgo,
			String medida,
			String proteccion,
			String denuncia,
			String victima,
			String donde,
			String tipoAtencion,
			String impacto,
			String restablecimiento,
			String donde2){
		
		
		
		

		Conexion conexion = new Conexion();
		String sentencia = "SELECT DISTINCT c.*, m.nombres, m.apellidos, m.documento FROM casos c INNER JOIN mujeres m  ON c.id_mujer = m.id_mujer ";

		// variables from
		
		
		
		if (amenazas != null && !amenazas.trim().equals("")) {
					sentencia += " INNER JOIN amenazas_casos ac ON c.id = ac.id_caso ";
		}
		
		if (delitos != null && !delitos.trim().equals("")) {
			sentencia += " INNER JOIN delitos_casos dc ON c.id = dc.id_caso ";
		}
		
		if (libertades != null && !libertades.trim().equals("")) {
			sentencia += " INNER JOIN libertades_casos lc ON c.id = lc.id_caso ";
		}
		
			
		if (impactosIndividuales != null && !impactosIndividuales.trim().equals("")) {
			sentencia += " INNER JOIN individuales_casos ic ON c.id = ic.id_caso ";
		}
		
		if (impactosColectivos != null && !impactosColectivos.trim().equals("")) {
			sentencia += " INNER JOIN colectivos_casos cc ON c.id = cc.id_caso ";
		}
	
		
		
		if ((riesgo != null && !riesgo.trim().equals(""))
				|| (medida != null && !medida.trim().equals(
						""))
				|| (proteccion != null && !proteccion.trim().equals(""))
			

		) {
			sentencia += " INNER JOIN protecciones prt ON c.id = prt.id_caso ";
		}
		
		
		
		
		
		

		if( (actor != null && !actor.trim().equals(""))
		
		||
		(conocido != null && !conocido.trim().equals(""))
				||
				(sexo != null && !sexo.trim().equals(""))
						||
						(genero != null && !genero.trim().equals(""))
								||
								(edad != null && !edad.trim().equals(""))
										||
										(tipo_actor != null && !tipo_actor.trim().equals(""))
		
		
		)
		{
			sentencia += " INNER JOIN agresores g ON c.id = g.id_caso ";
		}

		if ((hecho_denunciado != null && !hecho_denunciado.trim().equals(""))
				
				||
				(denuncia != null && !denuncia.trim().equals(""))
				
				||
				(victima != null && !victima.trim().equals(""))
				
				||
				(donde != null && !donde.trim().equals(""))
				
				
				
				) {
			sentencia += " INNER JOIN rutas_atencion r ON c.id = r.id_caso ";
		}

		//
		int entroHechos = 0;
		if ((fecha_hechos != null && !fecha_hechos.trim().equals(""))
				|| (fecha_hechos2 != null && !fecha_hechos2.trim().equals(""))
				
				||
				(vereda != null && !vereda.trim().equals(""))
				||
				(testigos != null && !testigos.trim().equals(""))
				||
				(documentacion != null && !documentacion.trim().equals(""))
				||
				(tipo_hecho != null && !tipo_hecho.trim().equals(""))
				
		
		) {
			entroHechos = 1;
			sentencia += " INNER JOIN hechos h ON c.id = h.id_caso ";
		}

		if ((departamento_hechos != null && !departamento_hechos.trim().equals(
				""))
				|| (municipio_hechos != null && !municipio_hechos.trim()
						.equals(""))

		) {

			if (entroHechos == 0) {

				sentencia += " INNER JOIN hechos h ON c.id = h.id_caso ";

			}

			if (departamento_hechos != null
					&& !departamento_hechos.trim().equals("")) {
				sentencia += " INNER JOIN ciudades ciud ON h.id_ciudad = ciud.id_ciudad ";
			}

		}

		if ((responsable != null && !responsable.trim().equals(""))
				|| (numero_atencion != null && !numero_atencion.trim().equals(
						""))
				|| (fecha_atencion != null && !fecha_atencion.trim().equals(""))
				|| (fecha_atencion2 != null && !fecha_atencion2.trim().equals(
						""))
				
				
				
				|| (tipoAtencion != null && !tipoAtencion.trim().equals(""))
				|| (impacto != null && !impacto.trim().equals(""))
				|| (restablecimiento != null && !restablecimiento.trim().equals(""))
				|| (donde2 != null && !donde2.trim().equals(""))
				

		) {

			sentencia += " INNER JOIN acompanamientos a ON c.id = a.id_caso ";
		}

		// variables condicionadas a los inner

		// fijas
		sentencia += " WHERE 1=1 ";

		if (municipio_hechos != null && !municipio_hechos.trim().equals("")) {
			sentencia += " AND h.id_ciudad =  " + municipio_hechos;
		}

		if (departamento_hechos != null
				&& !departamento_hechos.trim().equals("")) {
			sentencia += " AND ciud.id_departamento =  " + departamento_hechos;
		}

		if (fecha_atencion != null && !fecha_atencion.trim().equals("")) {
			sentencia += " AND h.fecha_atencion >=  '" + fecha_atencion + "'";
		}

		if (fecha_atencion2 != null && !fecha_atencion2.trim().equals("")) {
			sentencia += " AND h.fecha_atencion <=  '" + fecha_atencion2 + "'";
		}

		if (numero_atencion != null && !numero_atencion.trim().equals("")) {
			sentencia += " AND a.numero_acompanamiento =  '" + numero_atencion
					+ "'";
		}

		if (responsable != null && !responsable.trim().equals("")) {
			sentencia += " AND a.id_administrador =  '" + responsable + "'";
		}

		if (fecha_hechos != null && !fecha_hechos.trim().equals("")) {
			sentencia += " AND h.fecha >=  '" + fecha_hechos + "'";
		}

		if (fecha_hechos2 != null && !fecha_hechos2.trim().equals("")) {
			sentencia += " AND h.fecha <=  '" + fecha_hechos2 + "'";
		}

		if (actor != null && !actor.trim().equals("")) {
			sentencia += " AND g.id_actor =  '" + actor + "'";
		}

		if (hecho_denunciado != null && !hecho_denunciado.trim().equals("")) {
			sentencia += " AND r.hecho_denunciado =  '" + hecho_denunciado
					+ "'";
		}

		if (etnia != null && !etnia.trim().equals("")) {
			sentencia += " AND m.id_etnia =  " + etnia;
		}

		if (cabeza_hogar != null && !cabeza_hogar.trim().equals("")) {
			sentencia += " AND m.cabeza_hogar =  '" + cabeza_hogar + "'";
		}

		if (n != null & !n.trim().equals("")) {

			sentencia += " AND UPPER(m.nombres) LIKE '%"
					+ n.toUpperCase().trim() + "%'";

		}
		if (a != null &&  !a.trim().equals("")) {

			sentencia += " AND UPPER(m.apellidos) LIKE '%"
					+ a.toUpperCase().trim() + "%'";

		}

		if (d != null &&  !d.trim().equals("")) {

			sentencia += " AND m.documento = " + d;

		}
		
		
		
		
		
		if (amenazas != null &&  !amenazas.trim().equals("")) {
			sentencia += " AND ac.id_amenaza = " + amenazas;
		}
		if (delitos != null &&  !delitos.trim().equals("")) {
			sentencia += " AND dc.id_delito = " + delitos;
		}
		
		if (libertades != null &&  !libertades.trim().equals("")) {
			sentencia += " AND lc.id_libertad = " + libertades;
		}
		
		if (impactosIndividuales != null &&  !impactosIndividuales.trim().equals("")) {
			sentencia += " AND ic.id_individual = " + impactosIndividuales;
		}
		
		
		if (impactosColectivos != null &&  !impactosColectivos.trim().equals("")) {
			sentencia += " AND cc.id_colectivo = " + impactosColectivos;
		}
		
		if (conocido != null &&  !conocido.trim().equals("")) {
			sentencia += " AND g.conocido = '" + conocido+"'";
		}
		
		if (sexo != null &&  !sexo.trim().equals("")) {
			sentencia += " AND g.sexo = '" + sexo+"'";
		}
		if (genero != null &&  !genero.trim().equals("")) {
			sentencia += " AND g.id_genero = '" + genero+"'";
		}
		
		if (edad != null &&  !edad.trim().equals("")) {
			sentencia += " AND g.edad = '" + edad+"'";
		}
		
		if (tipo_actor != null &&  !tipo_actor.trim().equals("")) {
			sentencia += " AND g.tipo_actor = '" + tipo_actor+"'";
		}
		
		if (vereda != null &&  !vereda.trim().equals("")) {

			sentencia += " AND UPPER(h.vereda_corregimiento) LIKE '%"
					+ vereda.toUpperCase().trim() + "%'";

		}
		
		if (testigos != null &&  !testigos.trim().equals("")) {
			sentencia += " AND h.testigo = '" + testigos+"'";
		}
		
		if (documentacion != null &&  !documentacion.trim().equals("")) {
			sentencia += " AND h.documentacion = '" + documentacion+"'";
		}
		
		if (tipo_hecho != null &&  !tipo_hecho.trim().equals("")) {
			sentencia += " AND h.tipo_hecho = '" + tipo_hecho+"'";
		}
		
		
		if (riesgo != null &&  !riesgo.trim().equals("")) {
			sentencia += " AND prt.riesgo = '" + riesgo+"'";
		}
		if (medida != null &&  !medida.trim().equals("")) {
			sentencia += " AND prt.medida = '" + medida+"'";
		}
		if (proteccion != null &&  !proteccion.trim().equals("")) {
			sentencia += " AND prt.proteccion = '" + proteccion+"'";
		}
		
		
		if (denuncia != null &&  !denuncia.trim().equals("")) {
			sentencia += " AND r.denuncia = '" + denuncia+"'";
		}
		if (victima != null &&  !victima.trim().equals("")) {
			sentencia += " AND r.victima = '" + victima+"'";
		}
		if (donde != null &&  !donde.trim().equals("")) {
			sentencia += " AND r."+donde+" = 'S'";
		}
		
		
		
		if (tipoAtencion != null &&  !tipoAtencion.trim().equals("")) {
			sentencia += " AND a."+tipoAtencion+" = 'S'";
		}
		if (impacto != null &&  !impacto.trim().equals("")) {
			sentencia += " AND a.impacto = '" + impacto+"'";
		}
		if (restablecimiento != null &&  !restablecimiento.trim().equals("")) {
			sentencia += " AND a.restablecimiento = '" + restablecimiento+"'";
		}
		
		if (donde2 != null &&  !donde2.trim().equals("")) {
			sentencia += " AND a."+donde2+" = 'S'";
		}
		
		
		
		
		
		
		
		
		

		sentencia += " ORDER BY c.id, m.nombres, m.apellidos";

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[6];
				for (int i = 0; i <= 5; i++) {

					mujer[i] = rs.getObject(i + 1);

				}
				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public List<Object[]> getMujeresS2(String n, String a, String d) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM mujeres WHERE 1=1 ";

		if (n != null & !n.trim().equals("")) {

			sentencia += " AND UPPER(nombres) LIKE '%" + n.toUpperCase().trim()
					+ "%'";

		}
		if (a != null & !a.trim().equals("")) {

			sentencia += " AND UPPER(apellidos) LIKE '%"
					+ a.toUpperCase().trim() + "%'";

		}

		if (d != null & !d.trim().equals("")) {

			sentencia += " AND documento = " + d;

		}

		sentencia += " ORDER BY nombres, apellidos";

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[34];
				for (int i = 0; i <= 33; i++) {

					mujer[i] = rs.getObject(i + 1);

				}
				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public List<Object[]> getMujeresS(String n, String a, String d, String regreso) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM mujeres WHERE 1=1 ";
		
		if(regreso!=null && !regreso.trim().equals("") && n==null && a==null && d==null){
			
			//regreso = null;
			
			sentencia += " AND id_mujer = " + regreso;
		}
		

		if (n != null && !n.trim().equals("")) {

			sentencia += " AND UPPER(nombres) LIKE '%" + n.toUpperCase().trim()
					+ "%'";

		}
		if (a != null && !a.trim().equals("")) {

			sentencia += " AND UPPER(apellidos) LIKE '%"
					+ a.toUpperCase().trim() + "%'";

		}

		if (d != null && !d.trim().equals("")) {

			sentencia += " AND documento = " + d;

		}
		
			

		sentencia += " ORDER BY nombres, apellidos";

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[34];
				for (int i = 0; i <= 33; i++) {

					mujer[i] = rs.getObject(i + 1);

				}
				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public Object[] getMujerDoc(String doc) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM mujeres a WHERE documento="
				+ doc
				+ " ORDER BY primer_nombre, segundo_nombre, primer_apellido, segundo_apellido";
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[numeroColumnasMujeres];
				for (int i = 0; i <= numeroColumnasMujeres - 1; i++) {

					mujer[i] = rs.getObject(i + 1);
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujer;
	}

	public Object[] getCiudadCompleta(String idMunicipio) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM ciudades  WHERE id_ciudad="
				+ idMunicipio;

		Object[] depa = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				depa = new Object[3];
				for (int i = 0; i <= 2; i++) {

					depa[i] = rs.getObject(i + 1);
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return depa;
	}

	public Object[] getMujer(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, t.justificable, e.justificable, ep.tipo  FROM mujeres a, tipos_documento t, estados_civiles e, eps_ars ep WHERE a.id_mujer="
				+ id
				+ " AND a.id_tipo_documento = t.id AND a.id_estado_civil = e.id AND ep.id = a.id_eps_ars"
				+ " ORDER BY a.nombres, a.apellidos";
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[37];
				for (int i = 0; i <= 36; i++) {

					mujer[i] = rs.getObject(i + 1);
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujer;
	}

	public List<Object[]> getMujeresAsistencia3(String curso, String tema,
			String fechaDesde, String fechaHasta, String tipo, String asisitio,
			String proyecto, String linea, String financiador, String documento) {

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT a.id, a.id_mujer_curso, a.asistio, a.fecha, a.horas, mu.primer_nombre, mu.segundo_nombre, mu.primer_apellido, mu.segundo_apellido, mu.documento, mu.telefonos, t.nombre nombre_tema, c.nombre nombre_curso, p.nombre proyecto, l.nombre linea, f.nombre financiador, mu.inscrita "
				+ " FROM asistencia a"
				+ " LEFT JOIN mujeres_curso m ON a.id_mujer_curso = m.id"
				+ " LEFT JOIN mujeres mu ON m.id_mujer = mu.id_mujer "
				+ " INNER JOIN temas t ON t.id = a.id_tema "
				+ " INNER JOIN cursos c ON c.id = t.id_curso "
				+ " INNER JOIN proyectos p ON c.id_proyecto = p.id "
				+ " INNER JOIN curso_linea cl ON a.id_linea = cl.id "
				+ " INNER JOIN curso_financiador cf ON a.id_financiador = cf.id "
				+ " INNER JOIN lineas l ON cl.id_linea = l.id "
				+ " INNER JOIN financiadores f ON cf.id_financiador = f.id "
				+ " WHERE 1=1";

		if (tipo != null && tipo.equals("1")) {

			sentencia += " AND mu.inscrita = 'S'";

		} else if (tipo != null && tipo.equals("2")) {

			sentencia += " AND mu.inscrita = 'N'";

		}

		if (fechaDesde != null && !fechaDesde.trim().equals("")) {

			sentencia += " AND a.fecha >= '" + fechaDesde + "'";

		}

		if (fechaHasta != null && !fechaHasta.trim().equals("")) {

			sentencia += " AND a.fecha <= '" + fechaHasta + "'";
		}

		if (curso != null && !curso.trim().equals("")) {

			sentencia += " AND t.id_curso = '" + curso + "'";
		}

		if (tema != null && !tema.trim().equals("")) {

			sentencia += " AND t.id_tema = '" + tema + "'";
		}

		if (proyecto != null && !proyecto.trim().equals("")) {

			sentencia += " AND c.id_proyecto = '" + proyecto + "'";
		}

		if (linea != null && !linea.trim().equals("")) {

			sentencia += " AND l.id = '" + linea + "'";
		}

		if (financiador != null && !financiador.trim().equals("")) {

			sentencia += " AND fa.id = '" + financiador + "'";
		}

		if (documento != null && !documento.trim().equals("")) {

			sentencia += " AND (mu.documento = '" + documento + "')";
		}

		if (asisitio != null && !asisitio.trim().equals("0")) {

			sentencia += " AND a.asistio = '" + asisitio + "'";
		}

		sentencia += " ORDER BY a.fecha, c.nombre, t.nombre, p.nombre, l.nombre, f.nombre, mu.primer_nombre, mu.segundo_nombre, mu.primer_apellido, mu.segundo_apellido";

		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[19];
				mujer[0] = rs.getObject(1);
				mujer[9] = rs.getObject("id_mujer_curso");

				mujer[1] = rs.getObject("primer_nombre");
				mujer[2] = rs.getObject("segundo_nombre");
				mujer[3] = rs.getObject("primer_apellido");
				mujer[4] = rs.getObject("segundo_apellido");
				mujer[5] = rs.getObject("documento");
				mujer[6] = "";// rs.getObject("nombre_comuna");
				mujer[7] = "";// rs.getObject("numero_comuna");
				mujer[8] = rs.getObject("telefonos");
				// mujer[9] = rs.getObject("inscrita");
				mujer[10] = rs.getObject("inscrita");

				mujer[11] = rs.getObject("asistio");

				if (mujer[11] != null && mujer[11].equals("S")) {
					mujer[11] = "Si";
				} else {
					mujer[11] = "No";
				}

				mujer[12] = rs.getObject("nombre_tema");
				mujer[13] = rs.getObject("nombre_curso");
				mujer[14] = rs.getObject("fecha");
				mujer[15] = rs.getObject("horas");

				mujer[16] = rs.getObject("proyecto");
				mujer[17] = rs.getObject("linea");
				mujer[18] = rs.getObject("financiador");
				// mujer[18] = sentencia;

				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public List<Object[]> getMujeresAsistencia(String curso, String tema,
			String fecha) {

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT * FROM mujeres_curso a, mujeres m WHERE a.id_mujer = m.id_mujer AND a.id_curso="
				+ curso
				+ "  AND a.id NOT IN("
				+ "  											SELECT c.id_mujer_curso FROM asistencia c WHERE c.id_tema="
				+ tema
				+ " AND c.fecha='"
				+ fecha
				+ "' AND c.id_mujer_curso IS NOT NULL"
				+ "  								)"
				+ " order by primer_nombre, segundo_nombre, primer_apellido, segundo_apellido";
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[10];
				mujer[0] = rs.getObject("id");
				mujer[1] = rs.getObject("primer_nombre");
				mujer[2] = rs.getObject("segundo_nombre");
				mujer[3] = rs.getObject("primer_apellido");
				mujer[4] = rs.getObject("segundo_apellido");
				mujer[5] = rs.getObject("documento");
				mujer[6] = rs.getObject("nombre_comuna");
				mujer[7] = rs.getObject("numero_comuna");
				mujer[8] = rs.getObject("telefonos");
				mujer[9] = rs.getObject("inscrita");
				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public List<Object[]> getMujeresCurso(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM mujeres_curso a, mujeres m WHERE a.id_mujer = m.id_mujer AND a.id_curso="
				+ id
				+ " ORDER BY m.primer_nombre, m.segundo_nombre, m.primer_apellido, m.segundo_apellido";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[10];
				curso[0] = rs.getObject("id");
				curso[1] = rs.getObject("primer_nombre");
				curso[2] = rs.getObject("segundo_nombre");
				curso[3] = rs.getObject("primer_apellido");
				curso[4] = rs.getObject("segundo_apellido");
				curso[5] = rs.getObject("documento");
				curso[6] = rs.getObject("nombre_comuna");
				curso[7] = rs.getObject("numero_comuna");
				curso[8] = rs.getObject("telefonos");
				curso[9] = rs.getObject("inscrita");
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public Object[] getNombrePregunta(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM preguntas a WHERE a.id_pregunta="
				+ id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getPreguntas(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM preguntas a WHERE a.id_encuesta="
				+ id + " ORDER BY a.id_pregunta";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public Object[] getOpcion(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM opciones_respuesta a WHERE a.id_op_respuesta="
				+ id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getOpciones(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM opciones_respuesta a WHERE a.id_pregunta="
				+ id + " ORDER BY a.id_op_respuesta";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getFinanciadoresCurso(String idCurso) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, l.nombre FROM curso_financiador a, financiadores l WHERE a.id_financiador = l.id AND a.id_curso="
				+ idCurso + " ORDER BY l.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getBarriosVeredas(String idTipo, String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = null;

		if (idTipo != null && idTipo.equals("C")) {

			sentencia = "SELECT id, nombre, completo as tipo FROM barrios WHERE id_comuna="
					+ id + "  ORDER BY nombre";

		} else {

			sentencia = "SELECT id, nombre, tipo FROM veredas WHERE id_corregimiento="
					+ id + " ORDER BY nombre";

		}
		// sentencia =
		// "SELECT a.*, l.nombre FROM curso_linea a, lineas l WHERE a.id_linea = l.id AND a.id_curso="
		// + idCurso + " ORDER BY l.nombre";

		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				if (idTipo != null && idTipo.equals("C")) {

					if (("" + curso[2]).trim().equals("N")) {

						curso[1] = curso[1] + " ** BARRIO INCOMPLETO **";
					}

				} else {

					if (("" + curso[2]).trim().equals("A")) {

						curso[1] = curso[1] + " ** ASENTAMIENTO **";
					}

				}

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getTipoDirecciones(String idTipo) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = null;

		if (idTipo != null && idTipo.equals("C")) {

			sentencia = "SELECT * FROM comunas ORDER BY id";

		} else {

			sentencia = "SELECT * FROM corregimientos ORDER BY id";

		}
		// sentencia =
		// "SELECT a.*, l.nombre FROM curso_linea a, lineas l WHERE a.id_linea = l.id AND a.id_curso="
		// + idCurso + " ORDER BY l.nombre";

		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[2];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getLineasCurso(String idCurso) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, l.nombre FROM curso_linea a, lineas l WHERE a.id_linea = l.id AND a.id_curso="
				+ idCurso + " ORDER BY l.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getActividades(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM actividades_mujeres a, actividades_economicas n WHERE a.id_mujer="
				+ id + " AND a.id_actividad = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getParticipaciones(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM participaciones_mujeres a, organizaciones n WHERE a.id_mujer="
				+ id + " AND  a.id_organizacion = n.id   ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getCapacitaciones(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT a.*, c.nombre, l.nombre FROM capacitaciones_mujeres a"
				+ " LEFT JOIN  capacitaciones c ON a.id_capacitacion = c.id "
				+ " LEFT JOIN  lineas l ON a.id_linea = l.id "
				+ " WHERE a.id_mujer=" + id + " ORDER BY c.nombre, l.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[10];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				curso[5] = rs.getObject(6);
				curso[6] = rs.getObject(7);
				curso[7] = rs.getObject(8);
				curso[8] = rs.getObject(9);
				curso[9] = rs.getObject(10);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getDelitos(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM delitos_casos a, delitos n WHERE a.id_caso="
				+ id + " AND a.id_delito = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getLibertades(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM libertades_casos a, libertades n WHERE a.id_caso="
				+ id + " AND a.id_libertad = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getIndividuales(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM individuales_casos a, impactos_individuales n WHERE a.id_caso="
				+ id + " AND a.id_individual = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getFamiliares(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM familiares_casos a, impactos_familiares n WHERE a.id_caso="
				+ id + " AND a.id_familiar = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getColectivos(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM colectivos_casos a, impactos_colectivos n WHERE a.id_caso="
				+ id + " AND a.id_colectivo = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public Object[] getAgresor(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, g.nombre, ar.nombre FROM agresores a, generos g, actores_armados ar, casos c WHERE a.id ="
				+ id
				+ " AND a.id_caso = c.id AND a.id_genero = g.id AND a.id_actor = ar.id ORDER BY a.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[13];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				curso[5] = rs.getObject(6);
				curso[6] = rs.getObject(7);
				curso[7] = rs.getObject(8);
				curso[8] = rs.getObject(9);
				curso[9] = rs.getObject(10);
				curso[10] = rs.getObject(11);
				curso[11] = rs.getObject(12);
				curso[12] = rs.getObject(13);

				for (int i = 0; i <= 12; i++) {
					if (curso[i] == null) {
						curso[i] = "";
					}

				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public Object[] getProteccion(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM protecciones WHERE id_caso = " + id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			if (rs.next()) {
				curso = new Object[10];
				for (int i = 0; i <= 9; i++) {
					curso[i] = rs.getObject(i + 1);
					if (curso[i] == null) {
						curso[i] = "";
					}
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public Object[] getHecho(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM hechos WHERE id = " + id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);

		try {
			if (rs.next()) {
				curso = new Object[22];
				for (int i = 0; i <= 21; i++) {
					curso[i] = rs.getObject(i + 1);
					if (curso[i] == null) {
						curso[i] = "";
					}
				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getHechos(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT h.id, h.fecha,h.hora,h.id_ciudad,h.relato_hechos, c.nombre_ciudad, h.minuto FROM hechos h, ciudades c WHERE h.id_caso="
				+ id
				+ " AND h.id_ciudad =  c.id_ciudad ORDER BY h.fecha, h.hora, h.minuto";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[7];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				curso[5] = rs.getObject(6);
				curso[6] = rs.getObject(7);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public Object[] getRuta(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM rutas_atencion a WHERE a.id=" + id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[34];

				for (int i = 0; i <= 33; i++) {
					curso[i] = rs.getObject(i + 1);

					if (curso[i] == null) {
						curso[i] = "";
					}

				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;

	}

	public Object[] getAcompanamiento(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM acompanamientos a WHERE a.id="
				+ id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[27];

				for (int i = 0; i <= 26; i++) {
					curso[i] = rs.getObject(i + 1);

				}

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getAcompanamientos(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*,ad.primer_nombre, ad.segundo_nombre, ad.primer_apellido, ad.segundo_apellido FROM acompanamientos a, administradores ad WHERE a.id_caso="
				+ id
				+ " AND a.id_administrador = ad.id_administrador ORDER BY a.numero_acompanamiento, a.fecha_atencion";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[31];

				for (int i = 0; i <= 30; i++) {
					curso[i] = rs.getObject(i + 1);

				}

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getRutas(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM rutas_atencion a WHERE a.id_caso="
				+ id + " ORDER BY a.fecha_denuncia";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[34];

				for (int i = 0; i <= 33; i++) {
					curso[i] = rs.getObject(i + 1);

				}

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getAgresores(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia =
				" SELECT a . * , g.nombre, ar.nombre"+
				" FROM agresores a"+
				" INNER JOIN generos g ON a.id_genero = g.id"+
				" INNER JOIN casos c ON a.id_caso = c.id"+
				" LEFT JOIN actores_armados ar ON a.id_actor = ar.id"+
				" WHERE a.id_caso ="+id+
				" ORDER BY a.nombre";
				
				
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[13];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				curso[5] = rs.getObject(6);
				curso[6] = rs.getObject(7);
				curso[7] = rs.getObject(8);
				curso[8] = rs.getObject(9);
				curso[9] = rs.getObject(10);
				curso[10] = rs.getObject(11);
				curso[11] = rs.getObject(12);
				curso[12] = rs.getObject(13);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getAmenazas(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM amenazas_casos a, amenazas n WHERE a.id_caso="
				+ id + " AND a.id_amenaza = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getNiveles(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.*, n.nombre FROM niveles_mujeres a, niveles_educativos n WHERE a.id_mujer="
				+ id + " AND a.id_nivel = n.id ORDER BY n.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);
				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getActividades() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT a.* FROM actividades_economicas a ORDER BY a.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {

				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getCargos() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM cargos";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getOrganizaciones() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM organizaciones";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getCapacitaciones() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = " SELECT id, nombre, justificable, 'C' FROM capacitaciones"
				+ " UNION ALL "
				+ " SELECT id, nombre, 'N', 'L' FROM lineas"
				+ " ORDER BY nombre";

		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[4];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getDelitos() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM delitos";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getLibertades() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM libertades";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getIndividuales() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM impactos_individuales";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getFamiliares() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM impactos_familiares";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getColectivos() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM impactos_colectivos";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getAmenazas() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM amenazas";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getNiveles() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM niveles_educativos";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[3];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getTemas(String id) {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM temas a WHERE a.id_curso=" + id
				+ " ORDER BY a.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[4];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public Object[] getCursoTema(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT c.nombre, t.nombre FROM cursos c, temas t  WHERE c.id = t.id_curso AND t.id =   "
				+ id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[2];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public Object[] getNombreEncuesta(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM encuestas a WHERE a.id_encuesta =  "
				+ id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getEncuestasVigentesActivas() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM encuestas a WHERE a.activa = 'S' AND a.fecha_desde <= current_date AND fecha_hasta >=  current_date ORDER BY a.descripcion ASC ";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getEncuestas() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM encuestas a ORDER BY a.fecha_desde DESC, a.fecha_hasta DESC, a.descripcion ASC ";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[5];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);
				curso[4] = rs.getObject(5);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getProyectosLineas() {

		List<Object[]> resultados = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "  SELECT pl.id, p.nombre , l.nombre, f.nombre FROM proyecto_linea_finan pl, lineas l, proyectos p, financiadores f"
				+ " WHERE pl.id_linea = l.id AND  pl.id_proyecto = p.id AND pl.id_financiador = f.id  ORDER BY p.nombre, l.nombre, f.nombre";
		Object[] res = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				res = new Object[4];

				res[0] = rs.getObject(1);
				res[1] = rs.getObject(2);
				res[2] = rs.getObject(3);
				res[3] = rs.getObject(4);

				resultados.add(res);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return resultados;
	}

	public List<Object[]> getLineas() {

		List<Object[]> lineas = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM lineas a ORDER BY a.nombre";
		Object[] linea = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				linea = new Object[2];

				linea[0] = rs.getObject(1);
				linea[1] = rs.getObject(2);

				lineas.add(linea);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return lineas;
	}

	public List<Object[]> getProyectos() {

		List<Object[]> proyectos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM proyectos a ORDER BY a.nombre";
		Object[] proyecto = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				proyecto = new Object[2];

				proyecto[0] = rs.getObject(1);
				proyecto[1] = rs.getObject(2);

				proyectos.add(proyecto);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return proyectos;
	}

	public List<Object[]> getFinanciadores() {

		List<Object[]> financiadores = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM financiadores a ORDER BY a.nombre";
		Object[] financiador = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				financiador = new Object[3];

				financiador[0] = rs.getObject(1);
				financiador[1] = rs.getObject(2);
				financiador[2] = rs.getObject(3);

				financiadores.add(financiador);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return financiadores;
	}

	public Object[] getTema(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "   SELECT *  FROM temas WHERE id=" + id;
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[4];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);
				curso[3] = rs.getObject(4);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public Object[] getCursoCompleto(String id) {

		Conexion conexion = new Conexion();
		String sentencia = "   SELECT a.*, p.nombre  FROM cursos a, proyectos p"
				+ " WHERE a.id_proyecto = p.id AND a.id="
				+ id
				+ " ORDER BY a.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			if (rs.next()) {
				curso = new Object[6];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				curso[3] = rs.getObject(4);
				// curso[4] = rs.getObject(5);
				// curso[5] = rs.getObject(6);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return curso;
	}

	public List<Object[]> getCursos() {

		List<Object[]> cursos = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "   SELECT a.*, p.nombre  FROM cursos a, proyectos p"
				+ " WHERE a.id_proyecto = p.id " + " ORDER BY a.nombre";
		Object[] curso = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				curso = new Object[6];

				curso[0] = rs.getObject(1);
				curso[1] = rs.getObject(2);
				curso[2] = rs.getObject(3);

				curso[3] = rs.getObject(4);
				// curso[4] = rs.getObject(5);
				// curso[5] = rs.getObject(6);

				cursos.add(curso);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return cursos;
	}

	public List<Object[]> getMujeres() {

		List<Object[]> mujeres = new ArrayList<Object[]>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM mujeres a ORDER BY primer_nombre, segundo_nombre, primer_apellido, segundo_apellido";
		Object[] mujer = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				mujer = new Object[numeroColumnasMujeres + 1];
				for (int i = 1; i <= numeroColumnasMujeres; i++) {

					mujer[i] = rs.getObject(i);
				}

				mujeres.add(mujer);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return mujeres;
	}

	public List<Administrador> getAdministradores() {
		List<Administrador> administradores = new ArrayList<Administrador>();
		Conexion conexion = new Conexion();
		String sentencia = "SELECT * FROM administradores a WHERE a.id_administrador <> 1  ORDER BY primer_nombre, segundo_nombre, primer_apellido, segundo_apellido";
		Administrador admin = null;
		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				admin = new Administrador();
				admin.setIdAdministrador(rs.getInt("id_administrador"));
				admin.setPrimerApellido(rs.getString("primer_apellido"));
				admin.setCorreo(rs.getString("correo"));
				admin.setDocumento(rs.getInt("documento"));
				admin.setPrimerNombre(rs.getString("primer_nombre"));
				admin.setSegundoApellido(rs.getString("segundo_apellido"));
				admin.setSegundoNombre(rs.getString("segundo_nombre"));

				administradores.add(admin);
			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return administradores;
	}

	public List<Certificado> getCertificados(String tipoCertificado,
			String documento, String nombre, String fechaI, String fechaF) {
		List<Certificado> certificados = new ArrayList<Certificado>();
		Certificado certificado = null;
		Conexion conexion = new Conexion();
		String sentencia = "SELECT c .* , t.nombre_certificacion FROM certificados c, tipo_certificacion t WHERE c.tipo_certificado = t.id ";

		if (tipoCertificado != null && !tipoCertificado.trim().equals("0")) {

			sentencia += " AND c.tipo_certificado='" + tipoCertificado + "'";
		}

		if (documento != null && !documento.trim().equals("")) {

			sentencia += " AND c.documento='" + documento + "'";
		}

		if (nombre != null && !nombre.trim().equals("")) {

			sentencia += " AND UPPER(c.nombre_completo) LIKE '%"
					+ nombre.trim().toUpperCase() + "%'";
		}

		if (fechaI != null && !fechaI.trim().equals("")) {

			sentencia += " AND c.fecha_inicio >='" + fechaI + "'";
		}

		if (fechaF != null && !fechaF.trim().equals("")) {

			sentencia += " AND c.fecha_fin <='" + fechaF + "'";
		}

		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				certificado = new Certificado();
				certificado.setCiudadDepartamentoCurso(rs
						.getString("ciudad_depto_curso"));
				certificado
						.setCiudadDocumento(rs.getString("ciudad_documento"));
				certificado.setDocumento(rs.getLong("documento"));
				certificado.setFechaDisponibilidad(rs
						.getString("fecha_disponibilidad"));
				certificado.setFechaFin(rs.getString("fecha_fin"));
				certificado.setFechaInicio(rs.getString("fecha_inicio"));
				certificado.setId(rs.getInt("id_certificado"));
				certificado.setNombre(rs.getString("nombre_completo"));
				certificado.setTipoCertificado(rs
						.getString("nombre_certificacion"));
				certificado.setTipoDocumento(rs.getString("tipo_documento"));
				certificado.setNumeroHoras(rs.getInt("numero_horas"));
				certificados.add(certificado);

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return certificados;
	}

	public Certificado getCertificado(int id) {
		Certificado certificado = null;
		Conexion conexion = new Conexion();
		String sentencia = "SELECT c .* , t.nombre_certificacion FROM certificados c, tipo_certificacion t WHERE c.tipo_certificado = t.id AND c.id_certificado ="
				+ id;

		ResultSet rs = conexion.consultarBD(sentencia);
		try {
			while (rs.next()) {
				certificado = new Certificado();
				certificado.setCiudadDepartamentoCurso(rs
						.getString("ciudad_depto_curso"));
				certificado
						.setCiudadDocumento(rs.getString("ciudad_documento"));
				certificado.setDocumento(rs.getLong("documento"));
				certificado.setFechaDisponibilidad(rs
						.getString("fecha_disponibilidad"));
				certificado.setFechaFin(rs.getString("fecha_fin"));
				certificado.setFechaInicio(rs.getString("fecha_inicio"));
				certificado.setId(rs.getInt("id_certificado"));
				certificado.setNombre(rs.getString("nombre_completo"));
				certificado.setTipoCertificado(rs
						.getString("nombre_certificacion"));
				certificado.setTipoDocumento(rs.getString("tipo_documento"));
				certificado.setNumeroHoras(rs.getInt("numero_horas"));

			}
			rs.close();
		} catch (SQLException e) {
			// e.printStackTrace();
		} finally {
			conexion.cerrarConexion();
		}
		return certificado;
	}

	public boolean backupDBOFFLINE(String cadena) {

		Process runtimeProcess;    
		try {
   
			runtimeProcess = Runtime.getRuntime().exec(cadena);

			// runtimeProcess = Runtime.getRuntime().exec(direccion);
			int processComplete = runtimeProcess.waitFor();

			if (processComplete == 0) {
				//System.out.println("Backup created successfully");
				return true;
			} else {
				//System.out.println("Could not create the backup");
				return false;
			}
		} catch (Exception ex) {
			//ex.printStackTrace();
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

		AdministrarPublicaciones obj = new AdministrarPublicaciones();
		
		SimpleDateFormat formato = new SimpleDateFormat("yyyy-MM-dd H-mm-ss");
		String fechaActual = formato.format(new java.util.Date());
		 
		String nombre = "B-" + fechaActual + "-.sql";
		
		
		String executeCmd = "C:\\Program Files\\MySQL\\MySQL Server 5.5\\bin\\mysqldump --no-create-info --extended-insert=false --compact -u"
				+ "root"
				+ " -p"
				+ "12345678"
				+ "  "
				+ "fundacionruta"
				+ " mujeres  participaciones_mujeres niveles_mujeres capacitaciones_mujeres actividades_mujeres casos amenazas_casos delitos_casos libertades_casos individuales_casos familiares_casos colectivos_casos agresores hechos protecciones rutas_atencion acompanamientos -r C:\\tomcatchoco\\webapps\\web\\backups\\"+nombre;


		
		obj.backupDBOFFLINE(executeCmd);

	}

}

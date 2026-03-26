// ==================== DATOS GLOBALES ====================
let permisos = [];
let constancias = [];
let incapacidades = [];
let personal = [];
let personalDetalles = {};
let currentFilter = '';

// ==================== DATOS DE PERMISOS ECONÓMICOS (DEL ARCHIVO EXCEL COMPLETO) ====================
const permisosEconomicosData = [
    // FEBRERO 2026
    { nombre: "PROFR. LUIS CESAR ANDRADE GONZÁLEZ", matricula: "DIR-001", fecha: "11,12,13", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "PROFRA. MARIA FELICITAS HERNÁNDEZ RODRÍGUEZ", matricula: "DOC-001", fecha: "02,03,04", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "PROFRA. MARIA FELICITAS HERNÁNDEZ RODRÍGUEZ", matricula: "DOC-001", fecha: "17", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "PROFRA. VERÓNICA VEGA TREJO", matricula: "SUB-001", fecha: "13,14", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "PROFRA. VERÓNICA VEGA TREJO", matricula: "SUB-001", fecha: "18,19,20", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "ARACELI CAMARGO BARRÓN", matricula: "DOC-002", fecha: "12,15,17", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ARACELI CAMARGO BARRÓN", matricula: "DOC-002", fecha: "10", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "ALMA DELIA MORENO GUTIÉRREZ", matricula: "DOC-003", fecha: "26,27,28", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ALMA DELIA MORENO GUTIÉRREZ", matricula: "DOC-003", fecha: "11,12,13", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "ALMA DELIA MORENO GUTIÉRREZ", matricula: "DOC-003", fecha: "11,12", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "MARIA EDITH IVONNE NAVA BAUTISTA", matricula: "DOC-004", fecha: "20,21,22", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARIA EDITH IVONNE NAVA BAUTISTA", matricula: "DOC-004", fecha: "26,27,28", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARIA EDITH IVONNE NAVA BAUTISTA", matricula: "DOC-004", fecha: "25", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "MARIA GUADALUPE PÉREZ BATALLA", matricula: "DOC-005", fecha: "29,30,31", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARIA GUADALUPE PÉREZ BATALLA", matricula: "DOC-005", fecha: "09,10,11", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "FERNANDO VENTURA GUTIÉRREZ", matricula: "DOC-006", fecha: "17,19,20", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "CECILIA ALFARO PARAMO", matricula: "DOC-007", fecha: "01,02,03", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "CECILIA ALFARO PARAMO", matricula: "DOC-007", fecha: "2", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "GERARDO DAVID GARCÍA GONZÁLEZ", matricula: "DOC-009", fecha: "15,16,17", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ALAN ESQUIVEL CAMPOS", matricula: "DOC-013", fecha: "03,04,05", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ALAN ESQUIVEL CAMPOS", matricula: "DOC-013", fecha: "17", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "MARÍA DEL ROCÍO NAVA BAUTISTA", matricula: "DOC-023", fecha: "20,21,22", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARÍA DEL ROCÍO NAVA BAUTISTA", matricula: "DOC-023", fecha: "26,27,28", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ERIK DAVID BARRERA JUÁREZ", matricula: "ADM-015", fecha: "01,02", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "ANDRÉS ISAÍAS CHÁVEZ NOLASCO", matricula: "DOC-011", fecha: "5,6,7", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "SANTIAGO BALDERAS BAEZA", matricula: "DOC-012", fecha: "22,23,24", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "SANTIAGO BALDERAS BAEZA", matricula: "DOC-012", fecha: "18,19,20", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "JONATHAN JAIR MIRAMONTES AGUILAR", matricula: "DOC-014", fecha: "7,24", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "JONATHAN JAIR MIRAMONTES AGUILAR", matricula: "DOC-014", fecha: "1", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BLANCA ESTELA VALDIVIA RAZO", matricula: "DOC-029", fecha: "03,04,05", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "BLANCA ESTELA VALDIVIA RAZO", matricula: "DOC-029", fecha: "10,11,12", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "DIEGO EDUARDO PRADO CALDERÓN", matricula: "DOC-030", fecha: "10", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "DIANA VALERIA ORTEGA DIAZ", matricula: "DOC-027", fecha: "27", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "ELVA ALEJANDRA MORALES MARTÍNEZ", matricula: "DOC-028", fecha: "23", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "ELVA ALEJANDRA MORALES MARTÍNEZ", matricula: "DOC-028", fecha: "10,11,12", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "GLORIA MATILDE BARRERA JUÁREZ", matricula: "ADM-016", fecha: "13", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "ITZEL MARICELA GALLARDO ÁLVAREZ", matricula: "DOC-015", fecha: "03,04", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "CLAUDIA ROCIO GUERRERO ALTAMIRANO", matricula: "DOC-014", fecha: "6", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "CLAUDIA ROCIO GUERRERO ALTAMIRANO", matricula: "DOC-014", fecha: "3,4,5", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "CLAUDIA ROCIO GUERRERO ALTAMIRANO", matricula: "DOC-014", fecha: "5", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "CLAUDIA ROCIO GUERRERO ALTAMIRANO", matricula: "DOC-014", fecha: "4", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "AMALIA KARINA SANTIAGO LARA", matricula: "DOC-016", fecha: "1", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "AMALIA KARINA SANTIAGO LARA", matricula: "DOC-016", fecha: "24,25,26", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "MANUEL GONZÁLEZ SILVA", matricula: "DOC-017", fecha: "02,03,04", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "CORNELIO MOGOLLÓN MONDRAGÓN", matricula: "DOC-018", fecha: "21", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "CORNELIO MOGOLLÓN MONDRAGÓN", matricula: "DOC-018", fecha: "12,13,14", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "CORNELIO MOGOLLÓN MONDRAGÓN", matricula: "DOC-018", fecha: "27", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "SILVIA MARGARITA FLORES TORRES", matricula: "DOC-041", fecha: "4,15", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "DULCE BRISA BARRERA JUÁREZ", matricula: "ADM-017", fecha: "7", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "EDUARDO FUERTE LONGORIA", matricula: "DOC-021", fecha: "3,4,5", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "GENOVEVA AYALA RENTERIA", matricula: "DOC-026", fecha: "13,14", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "CELIA PIÑA HURTADO", matricula: "DOC-044", fecha: "27,28", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "CELIA PIÑA HURTADO", matricula: "DOC-044", fecha: "1", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "CELIA PIÑA HURTADO", matricula: "DOC-044", fecha: "11,12", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "ÁNGEL MARTÍNEZ JUÁREZ", matricula: "DOC-045", fecha: "24,25", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "AARÓN HERNÁNDEZ MONTES", matricula: "DOC-019", fecha: "06,07,08", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "AARÓN HERNÁNDEZ MONTES", matricula: "DOC-019", fecha: "3", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "GABRIEL BUENDIA RAMÍREZ", matricula: "DOC-020", fecha: "9", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "GABRIEL BUENDIA RAMÍREZ", matricula: "DOC-020", fecha: "07,30", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "ARMANDO ALMANZA GONZÁLEZ", matricula: "DOC-022", fecha: "8,9,10", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARIA DE LOURDES VILLAGÓMEZ HERNÁNDEZ", matricula: "DOC-025", fecha: "29,30,31", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARIA DE LOURDES VILLAGÓMEZ HERNÁNDEZ", matricula: "DOC-025", fecha: "13,17", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "FRANCISCO ARTURO YAÑEZ PEREZ", matricula: "DOC-024", fecha: "17,27,30", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "FRANCISCO ARTURO YAÑEZ PEREZ", matricula: "DOC-024", fecha: "7,24", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "HÉCTOR JAVIER OJEDA RICO", matricula: "ADM-018", fecha: "22", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "HÉCTOR JAVIER OJEDA RICO", matricula: "ADM-018", fecha: "4,6", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "ADILENE FUNES MIRANDA", matricula: "DOC-033", fecha: "6", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "ADILENE FUNES MIRANDA", matricula: "DOC-033", fecha: "24,25,26", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ROSA MARIA DIAZ ZULOAGA", matricula: "DOC-034", fecha: "01,02,03", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ROSA MARIA DIAZ ZULOAGA", matricula: "DOC-034", fecha: "24,25", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "ROBERTO NAVA BAUTISTA", matricula: "DOC-035", fecha: "15,17,18", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ROBERTO NAVA BAUTISTA", matricula: "DOC-035", fecha: "20,21,22", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "GABRIEL PEDRAZA ÁLVAREZ", matricula: "DOC-036", fecha: "24,25", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "GABRIEL PEDRAZA ÁLVAREZ", matricula: "DOC-036", fecha: "23,24,25", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "ILIUSI VIRIDIANA RODRÍGUEZ CORTES", matricula: "DOC-046", fecha: "04,05,08", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ILIUSI VIRIDIANA RODRÍGUEZ CORTES", matricula: "DOC-046", fecha: "17,19,20", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "VANIA YITSSELL ECHEVERRÍA GALLEGOS", matricula: "DOC-031", fecha: "26", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "OSCAR HILARIO ARENAS SAUCEDA", matricula: "DOC-032", fecha: "20,21", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "MARTHA ANGÉLICA ZAVALA RODRÍGUEZ", matricula: "DOC-038", fecha: "14,19,24", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "MARTHA ANGÉLICA ZAVALA RODRÍGUEZ", matricula: "DOC-038", fecha: "11", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "MARTHA ANGÉLICA ZAVALA RODRÍGUEZ", matricula: "DOC-038", fecha: "20", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "MARTHA ANGÉLICA ZAVALA RODRÍGUEZ", matricula: "DOC-038", fecha: "19,20", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "ENRIQUE GALLARDO SILVA", matricula: "DOC-039", fecha: "06,07,08", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ENRIQUE GALLARDO SILVA", matricula: "DOC-039", fecha: "21", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "ADAN GABRIEL LOREDO CARDENAS", matricula: "DOC-040", fecha: "15,16,17", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ADAN GABRIEL LOREDO CARDENAS", matricula: "DOC-040", fecha: "23,24", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "FRANCISCO JAVIER RAYÓN GONZÁLEZ", matricula: "DOC-043", fecha: "03,06", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "CLAUDIO FABIAN GALLARDO ÁLVAREZ", matricula: "ADM-001", fecha: "17", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "CLAUDIO FABIAN GALLARDO ÁLVAREZ", matricula: "ADM-001", fecha: "21,22,23", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "15", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "27", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "21", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "8", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "19", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", matricula: "ADM-002", fecha: "24", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUANA TERESA MARTINEZ CALDERÓN", matricula: "ADM-019", fecha: "13", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUANA TERESA MARTINEZ CALDERÓN", matricula: "ADM-019", fecha: "10,11", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "JUANA TERESA MARTINEZ CALDERÓN", matricula: "ADM-019", fecha: "29", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUANA TERESA MARTINEZ CALDERÓN", matricula: "ADM-019", fecha: "19", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUANA TERESA MARTINEZ CALDERÓN", matricula: "ADM-019", fecha: "20,23", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "GUILLERMINA CALDERÓN BARRERA", matricula: "ADM-020", fecha: "05,08", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "GUILLERMINA CALDERÓN BARRERA", matricula: "ADM-020", fecha: "21", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "GUILLERMINA CALDERÓN BARRERA", matricula: "ADM-020", fecha: "16,17,18", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "OLGA LIDIA GARCIA NAVARRO", matricula: "ADM-021", fecha: "11", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "OLGA LIDIA GARCIA NAVARRO", matricula: "ADM-021", fecha: "12,13", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "GERARDO FLORES MARTÍNEZ", matricula: "ADM-006", fecha: "17,20,21", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "RAMIRO GARCÍA MARTÍNEZ", matricula: "ADM-007", fecha: "20,21,22", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "RAMIRO GARCÍA MARTÍNEZ", matricula: "ADM-007", fecha: "8", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "RAMIRO GARCÍA MARTÍNEZ", matricula: "ADM-007", fecha: "16", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "ERIKA LUGO HERRERA", matricula: "ADM-018", fecha: "28,29", mes: "AGO", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "MARIA MERCEDES BRAVO BUTANDA", matricula: "ADM-022", fecha: "03,04,05", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "JUAN MARCOS GÓMEZ FLORES", matricula: "ADM-023", fecha: "04,17", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "JUAN MARCOS GÓMEZ FLORES", matricula: "ADM-023", fecha: "17", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUAN MARCOS GÓMEZ FLORES", matricula: "ADM-023", fecha: "16", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "JUAN MARCOS GÓMEZ FLORES", matricula: "ADM-023", fecha: "5,25", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "LEONOR MARTÍNEZ", matricula: "ADM-017", fecha: "1", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "LEONOR MARTÍNEZ", matricula: "ADM-017", fecha: "06,07", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "LEONOR MARTÍNEZ", matricula: "ADM-017", fecha: "19,20", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "PERLA LIZBETH FLORES MURILLO", matricula: "ADM-020", fecha: "03,04,05", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "PERLA LIZBETH FLORES MURILLO", matricula: "ADM-020", fecha: "20", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "PERLA LIZBETH FLORES MURILLO", matricula: "ADM-020", fecha: "18,19,20", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "ERNESTINA CHÁVEZ LÓPEZ", matricula: "ADM-008", fecha: "06,10,11", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "ERNESTINA CHÁVEZ LÓPEZ", matricula: "ADM-008", fecha: "27,28,29", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 3 },
    { nombre: "MA CARMEN GARCÍA OROZCO", matricula: "ADM-009", fecha: "19", mes: "AGO", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "MA CARMEN GARCÍA OROZCO", matricula: "ADM-009", fecha: "02,03", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "MITZI CARMEN CORONA MOSQUEDA", matricula: "ADM-019", fecha: "05,08,18", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "LUIS ALEJANDRO LÓPEZ CAMARGO", matricula: "ADM-024", fecha: "04,05,08", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 3 },
    { nombre: "RAÚL LUCERO HERNÁNDEZ", matricula: "ADM-025", fecha: "9", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "JESÚS ABRAHAM REYES PERALES", matricula: "ADM-026", fecha: "16", mes: "OCT", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "JESÚS ABRAHAM REYES PERALES", matricula: "ADM-026", fecha: "11,12", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "RAFAEL RAMÍREZ AMEZQUITA", matricula: "ADM-010", fecha: "26", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "RAFAEL RAMÍREZ AMEZQUITA", matricula: "ADM-010", fecha: "5", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "RAFAEL RAMÍREZ AMEZQUITA", matricula: "ADM-010", fecha: "6", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "RAFAEL RAMÍREZ AMEZQUITA", matricula: "ADM-010", fecha: "6", mes: "MAR", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "JOSÉ JORGE LARA RAMÍREZ", matricula: "ADM-011", fecha: "18,19", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "JOSÉ JORGE LARA RAMÍREZ", matricula: "ADM-011", fecha: "7", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "JOSÉ JORGE LARA RAMÍREZ", matricula: "ADM-011", fecha: "22,23", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "JOSÉ CRISTOBAL GONZÁLEZ RAMÍREZ", matricula: "ADM-012", fecha: "8", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fecha: "10,11", mes: "SEP", anio: "2025", motivo: "Permiso económico", dias: 2 },
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fecha: "3", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fecha: "2", mes: "DIC", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fecha: "17,18", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "SAN JUANA FONSECA HERNÁNDEZ", matricula: "ADM-021", fecha: "3", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 1 },
    { nombre: "SAN JUANA FONSECA HERNÁNDEZ", matricula: "ADM-021", fecha: "19", mes: "ENE", anio: "2026", motivo: "Permiso económico", dias: 1 },
    { nombre: "SAN JUANA FONSECA HERNÁNDEZ", matricula: "ADM-021", fecha: "09,10", mes: "FEB", anio: "2026", motivo: "Permiso económico", dias: 2 },
    { nombre: "SONIA NÚÑEZ VÁZQUEZ", matricula: "ADM-014", fecha: "12,13,14", mes: "NOV", anio: "2025", motivo: "Permiso económico", dias: 3 }
];

// ==================== DATOS DE INCAPACIDADES ====================
const incapacidadesData = [
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fechaInicio: "2025-08-18", fechaFin: "2025-08-24", serie: "1032501125005234", dias: 7, motivo: "Incapacidad médica" },
    { nombre: "BRENDA MICHELLE CISNEROS ACOSTA", matricula: "ADM-013", fechaInicio: "2025-08-25", fechaFin: "2025-08-31", serie: "1032501125005367", dias: 7, motivo: "Incapacidad médica" },
    { nombre: "LEONOR MARTÍNEZ", matricula: "ADM-017", fechaInicio: "2025-09-02", fechaFin: "2025-09-04", serie: "1032501125005514", dias: 3, motivo: "Incapacidad médica" },
    { nombre: "ARACELI CAMARGO BARRÓN", matricula: "DOC-002", fechaInicio: "2025-09-03", fechaFin: "2025-09-03", serie: "1032501125005548", dias: 1, motivo: "Incapacidad médica" },
    { nombre: "ITZEL MARICELA GALLARDO ÁLVAREZ", matricula: "DOC-015", fechaInicio: "2025-09-09", fechaFin: "2025-09-11", serie: "1032501125005674", dias: 3, motivo: "Incapacidad médica" },
    { nombre: "SILVIA MARGARITA FLORES TORRES", matricula: "DOC-041", fechaInicio: "2025-09-10", fechaFin: "2025-09-23", serie: "1008601125007825", dias: 14, motivo: "Incapacidad médica" },
    { nombre: "ROBERTO NAVA BAUTISTA", matricula: "DOC-035", fechaInicio: "2025-09-11", fechaFin: "2025-09-12", serie: "1032501125005714", dias: 2, motivo: "Incapacidad médica" },
    { nombre: "MARIA EDITH IVONNE NAVA BAUTISTA", matricula: "DOC-004", fechaInicio: "2025-09-11", fechaFin: "2025-09-12", serie: "1032501125005721", dias: 2, motivo: "Incapacidad médica" },
    { nombre: "ERIKA LUGO HERRERA", matricula: "ADM-018", fechaInicio: "2025-09-11", fechaFin: "2025-09-12", serie: "1032501125005730", dias: 2, motivo: "Incapacidad médica" }
];

// ==================== DATOS DE CONSTANCIAS ====================
const constanciasData = [
    { nombre: "ITZEL MARICELA GALLARDO ÁLVAREZ", matricula: "DOC-015", fecha: "2025-08-25", tipo: "CITA MEDICA", horario: "", descripcion: "CITA MEDICA CENTRO MEDICO NACIONAL" },
    { nombre: "ELVA ALEJANDRA MORALES MARTÍNEZ", matricula: "DOC-028", fecha: "2025-08-25", tipo: "TIEMPO", horario: "11:15 a 12:30", descripcion: "Constancia de tiempo" },
    { nombre: "PERLA LIZBETH FLORES MURILLO", matricula: "ADM-020", fecha: "2025-08-27", tipo: "TIEMPO", horario: "12:45 a 13:25", descripcion: "Constancia de tiempo" },
    { nombre: "MARTHA ANGELICA ZAVALA RODRÍGUEZ", matricula: "DOC-038", fecha: "2025-08-29", tipo: "TIEMPO", horario: "07:30 a 07:55", descripcion: "Constancia de tiempo" }
];

// ==================== INICIALIZACIÓN DE DATOS ====================
function initSampleData() {
    // Cargar datos de permisos económicos
    permisos = permisosEconomicosData.map(p => ({
        matricula: p.matricula,
        nombre: p.nombre,
        fecha: p.fecha,
        mes: p.mes,
        anio: p.anio || "2026",
        motivo: p.motivo,
        dias: p.dias
    }));
    
    // Cargar datos de incapacidades
    incapacidades = incapacidadesData.map(i => ({
        matricula: i.matricula,
        nombre: i.nombre,
        fechaInicio: i.fechaInicio,
        fechaFin: i.fechaFin,
        serie: i.serie,
        dias: i.dias,
        motivo: i.motivo
    }));
    
    // Cargar datos de constancias
    constancias = constanciasData.map(c => ({
        matricula: c.matricula,
        nombre: c.nombre,
        fecha: c.fecha,
        tipo: c.tipo,
        horario: c.horario || "",
        descripcion: c.descripcion
    }));
}

// ==================== FUNCIÓN PARA ACTUALIZAR RESÚMENES ====================
function updateResumenPermisos() {
    const resumenBody = document.getElementById('resumenPermisosBody');
    if (!resumenBody) return;
    
    // Agrupar permisos por profesor
    const resumen = {};
    
    permisos.forEach(permiso => {
        const key = permiso.matricula;
        if (!resumen[key]) {
            resumen[key] = {
                matricula: permiso.matricula,
                nombre: permiso.nombre,
                totalPermisos: 0,
                totalDias: 0,
                meses: new Set()
            };
        }
        resumen[key].totalPermisos++;
        resumen[key].totalDias += permiso.dias;
        if (permiso.mes) {
            resumen[key].meses.add(permiso.mes);
        }
    });
    
    const resumenArray = Object.values(resumen);
    const resumenCount = document.getElementById('resumenCount');
    if (resumenCount) resumenCount.textContent = `${resumenArray.length} profesores`;
    
    // Actualizar tarjetas de resumen
    const totalPermisos = permisos.length;
    const totalProfesoresConPermisos = resumenArray.length;
    const promedioPermisos = totalProfesoresConPermisos > 0 ? (totalPermisos / totalProfesoresConPermisos).toFixed(1) : 0;
    
    const totalPermisosEl = document.getElementById('totalPermisos');
    const totalProfesoresConPermisosEl = document.getElementById('totalProfesoresConPermisos');
    const promedioPermisosEl = document.getElementById('promedioPermisos');
    
    if (totalPermisosEl) totalPermisosEl.textContent = totalPermisos;
    if (totalProfesoresConPermisosEl) totalProfesoresConPermisosEl.textContent = totalProfesoresConPermisos;
    if (promedioPermisosEl) promedioPermisosEl.textContent = promedioPermisos;
    
    if (resumenArray.length === 0) {
        resumenBody.innerHTML = '<tr><td colspan="6" class="no-results">No hay registros de permisos</td></tr>';
        return;
    }
    
    // Ordenar por total de días descendente
    resumenArray.sort((a, b) => b.totalDias - a.totalDias);
    
    resumenBody.innerHTML = resumenArray.map((prof, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${prof.matricula}</td>
            <td><strong>${prof.nombre}</strong></td>
            <td class="text-center">${prof.totalPermisos}</td>
            <td class="text-center"><span class="badge-dias">${prof.totalDias} días</span></td>
            <td>${Array.from(prof.meses).sort().join(', ')}</td>
        </tr>
    `).join('');
}

// Función para calcular días a partir de fechas
function calcularDiasDesdeFechas(fechasStr) {
    if (!fechasStr) return 0;
    const fechas = fechasStr.split(',').map(f => parseInt(f.trim()));
    return fechas.length;
}

// ==================== FUNCIONES DE PESTAÑAS ====================
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    const buttons = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(tabName)) {
            btn.classList.add('active');
            break;
        }
    }
    
    updateAllTables();
    
    if (tabName === 'personal') {
        updateReportView();
    }
}

// ==================== FUNCIONES DE BÚSQUEDA ====================
function searchTeacher() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentFilter = searchInput.value.toLowerCase();
        updateAllTables();
    }
}

function filterData(data) {
    if (!currentFilter) return data;
    return data.filter(item => 
        (item.nombre && item.nombre.toLowerCase().includes(currentFilter)) || 
        (item.matricula && item.matricula.toLowerCase().includes(currentFilter))
    );
}

// ==================== FUNCIONES DE ACTUALIZACIÓN ====================
function updateAllTables() {
    updatePermisosTable();
    updateConstanciasTable();
    updateIncapacidadesTable();
    updateResumenPermisos();
    updateRecordCounts();
}

function updateRecordCounts() {
    const permisosCount = document.getElementById('permisosCount');
    const constanciasCount = document.getElementById('constanciasCount');
    const incapacidadesCount = document.getElementById('incapacidadesCount');
    
    if (permisosCount) permisosCount.textContent = `${permisos.length} registros`;
    if (constanciasCount) constanciasCount.textContent = `${constancias.length} registros`;
    if (incapacidadesCount) incapacidadesCount.textContent = `${incapacidades.length} registros`;
}

function updatePermisosTable() {
    const tbody = document.getElementById('permisosBody');
    if (!tbody) return;
    
    const filteredPermisos = filterData(permisos);
    
    if (filteredPermisos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="no-results">No se encontraron resultados</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredPermisos.map((permiso, index) => {
        const originalIndex = permisos.findIndex(p => p.matricula === permiso.matricula && p.fecha === permiso.fecha && p.mes === permiso.mes);
        return `
            <tr>
                <td>${permiso.matricula || 'N/A'}</td>
                <td>${permiso.nombre}</td>
                <td>${permiso.fecha}</td>
                <td>${permiso.mes} ${permiso.anio || ''}</td>
                <td class="text-center"><span class="badge-dias">${permiso.dias} día(s)</span></td>
                <td>${permiso.motivo}</td>
                <td>
                    <button onclick="deleteSingleRecord('permisos', ${originalIndex})" class="action-btn delete-row-btn">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateConstanciasTable() {
    const tbody = document.getElementById('constanciasBody');
    if (!tbody) return;
    
    const filteredConstancias = filterData(constancias);
    
    if (filteredConstancias.length === 0) {
        tbody.innerHTML = '<td><td colspan="7" class="no-results">No se encontraron resultados</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredConstancias.map((constancia, index) => {
        const originalIndex = constancias.findIndex(c => c.matricula === constancia.matricula && c.fecha === constancia.fecha);
        return `
            <tr>
                <td>${constancia.matricula || 'N/A'}</td>
                <td>${constancia.nombre}</td>
                <td>${formatDate(constancia.fecha)}</td>
                <td>${constancia.tipo}</td>
                <td>${constancia.horario || '-'}</td>
                <td>${constancia.descripcion}</td>
                <td>
                    <button onclick="deleteSingleRecord('constancias', ${originalIndex})" class="action-btn delete-row-btn">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateIncapacidadesTable() {
    const tbody = document.getElementById('incapacidadesBody');
    if (!tbody) return;
    
    const filteredIncapacidades = filterData(incapacidades);
    
    if (filteredIncapacidades.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="no-results">No se encontraron resultados</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredIncapacidades.map((incapacidad, index) => {
        const originalIndex = incapacidades.findIndex(i => i.matricula === incapacidad.matricula && i.fechaInicio === incapacidad.fechaInicio);
        return `
            <tr>
                <td>${incapacidad.matricula || 'N/A'}</td>
                <td>${incapacidad.nombre}</td>
                <td>${formatDate(incapacidad.fechaInicio)}</td>
                <td>${formatDate(incapacidad.fechaFin)}</td>
                <td>${incapacidad.serie || '-'}</td>
                <td class="text-center">${incapacidad.dias}</td>
                <td>${incapacidad.motivo}</td>
                <td>
                    <button onclick="deleteSingleRecord('incapacidades', ${originalIndex})" class="action-btn delete-row-btn">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// ==================== FUNCIONES DE ELIMINACIÓN ====================
function deleteSingleRecord(type, index) {
    if (confirm('¿Está seguro de que desea eliminar este registro?')) {
        switch(type) {
            case 'permisos':
                permisos.splice(index, 1);
                break;
            case 'constancias':
                constancias.splice(index, 1);
                break;
            case 'incapacidades':
                incapacidades.splice(index, 1);
                break;
        }
        updateAllTables();
        showNotification('Registro eliminado exitosamente');
    }
}

function showDeleteModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) modal.style.display = 'block';
}

function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    const deleteMatricula = document.getElementById('deleteMatricula');
    if (modal) modal.style.display = 'none';
    if (deleteMatricula) deleteMatricula.value = '';
}

function deleteByType(type) {
    let message = '';
    switch(type) {
        case 'permisos':
            message = '¿Está seguro de eliminar TODOS los permisos?';
            break;
        case 'constancias':
            message = '¿Está seguro de eliminar TODAS las constancias?';
            break;
        case 'incapacidades':
            message = '¿Está seguro de eliminar TODAS las incapacidades?';
            break;
        case 'all':
            message = '¿Está seguro de eliminar TODOS los registros?';
            break;
    }
    
    if (confirm(message)) {
        switch(type) {
            case 'permisos':
                permisos = [];
                break;
            case 'constancias':
                constancias = [];
                break;
            case 'incapacidades':
                incapacidades = [];
                break;
            case 'all':
                permisos = [];
                constancias = [];
                incapacidades = [];
                break;
        }
        updateAllTables();
        closeDeleteModal();
        showNotification('Registros eliminados exitosamente');
    }
}

function deleteByMatricula() {
    const matriculaInput = document.getElementById('deleteMatricula');
    if (!matriculaInput) return;
    
    const matricula = matriculaInput.value.trim();
    
    if (!matricula) {
        alert('Por favor, ingrese una matrícula');
        return;
    }
    
    if (confirm(`¿Está seguro de eliminar todos los registros del profesor con matrícula ${matricula}?`)) {
        const initialLength = permisos.length + constancias.length + incapacidades.length;
        
        permisos = permisos.filter(p => p.matricula !== matricula);
        constancias = constancias.filter(c => c.matricula !== matricula);
        incapacidades = incapacidades.filter(i => i.matricula !== matricula);
        
        const finalLength = permisos.length + constancias.length + incapacidades.length;
        
        if (initialLength > finalLength) {
            updateAllTables();
            closeDeleteModal();
            showNotification(`Registros del profesor ${matricula} eliminados exitosamente`);
        } else {
            alert('No se encontraron registros con esa matrícula');
        }
    }
}

// ==================== FUNCIONES DE FORMULARIOS ====================
function initForms() {
    // Calcular días automáticamente en el formulario de permisos
    const fechaInput = document.getElementById('permisoFecha');
    const diasInput = document.getElementById('permisoDias');
    
    if (fechaInput && diasInput) {
        fechaInput.addEventListener('input', function() {
            const fechasStr = this.value;
            if (fechasStr) {
                const dias = fechasStr.split(',').filter(f => f.trim()).length;
                diasInput.value = dias;
            } else {
                diasInput.value = '';
            }
        });
    }
    
    // Auto-completar matrícula al seleccionar nombre
    function setupAutoComplete(inputId, matriculaId) {
        const nombreInput = document.getElementById(inputId);
        const matriculaInput = document.getElementById(matriculaId);
        
        if (nombreInput && matriculaInput) {
            nombreInput.addEventListener('change', function() {
                const nombre = this.value;
                const profesor = personal.find(p => p.nombre === nombre);
                if (profesor) {
                    matriculaInput.value = profesor.matricula;
                }
            });
        }
    }
    
    setupAutoComplete('permisoNombre', 'permisoMatricula');
    setupAutoComplete('constanciaNombre', 'constanciaMatricula');
    setupAutoComplete('incapacidadNombre', 'incapacidadMatricula');
    
    // Calcular días de incapacidad
    const fechaInicio = document.getElementById('incapacidadFechaInicio');
    const fechaFin = document.getElementById('incapacidadFechaFin');
    const diasInputInc = document.getElementById('incapacidadDias');
    
    if (fechaInicio && fechaFin && diasInputInc) {
        function calcularDias() {
            if (fechaInicio.value && fechaFin.value) {
                const inicio = new Date(fechaInicio.value);
                const fin = new Date(fechaFin.value);
                const diffTime = Math.abs(fin - inicio);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
                diasInputInc.value = diffDays;
            }
        }
        
        fechaInicio.addEventListener('change', calcularDias);
        fechaFin.addEventListener('change', calcularDias);
    }
    
    // Formulario de permisos
    const permisoForm = document.getElementById('permisoForm');
    if (permisoForm) {
        permisoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fechasStr = document.getElementById('permisoFecha').value;
            const dias = fechasStr ? fechasStr.split(',').filter(f => f.trim()).length : 0;
            
            const nuevoPermiso = {
                matricula: document.getElementById('permisoMatricula').value,
                nombre: document.getElementById('permisoNombre').value,
                fecha: fechasStr,
                mes: document.getElementById('permisoMes').value,
                anio: document.getElementById('permisoAnio').value,
                motivo: document.getElementById('permisoMotivo').value,
                dias: dias
            };
            permisos.push(nuevoPermiso);
            updateAllTables();
            permisoForm.reset();
            showNotification('Permiso agregado exitosamente');
        });
    }
    
    // Formulario de constancias
    const constanciaForm = document.getElementById('constanciaForm');
    if (constanciaForm) {
        constanciaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const horaInicio = document.getElementById('constanciaHoraInicio').value;
            const horaFin = document.getElementById('constanciaHoraFin').value;
            const horario = horaInicio && horaFin ? `${horaInicio} a ${horaFin}` : '';
            
            const nuevaConstancia = {
                matricula: document.getElementById('constanciaMatricula').value,
                nombre: document.getElementById('constanciaNombre').value,
                fecha: document.getElementById('constanciaFecha').value,
                tipo: document.getElementById('constanciaTipo').value,
                horario: horario,
                descripcion: document.getElementById('constanciaDescripcion').value
            };
            constancias.push(nuevaConstancia);
            updateAllTables();
            constanciaForm.reset();
            showNotification('Constancia agregada exitosamente');
        });
    }
    
    // Formulario de incapacidades
    const incapacidadForm = document.getElementById('incapacidadForm');
    if (incapacidadForm) {
        incapacidadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nuevaIncapacidad = {
                matricula: document.getElementById('incapacidadMatricula').value,
                nombre: document.getElementById('incapacidadNombre').value,
                fechaInicio: document.getElementById('incapacidadFechaInicio').value,
                fechaFin: document.getElementById('incapacidadFechaFin').value,
                serie: document.getElementById('incapacidadSerie').value,
                dias: parseInt(document.getElementById('incapacidadDias').value) || 0,
                motivo: document.getElementById('incapacidadMotivo').value
            };
            incapacidades.push(nuevaIncapacidad);
            updateAllTables();
            incapacidadForm.reset();
            showNotification('Incapacidad agregada exitosamente');
        });
    }
}

// ==================== FUNCIONES DE PERSONAL ====================
function initPersonalData() {
    personal = [
        { numero: 1, matricula: "DIR-001", nombre: "LUIS CESAR ANDRADE GONZÁLEZ", funcion: "DIRECTOR", tipo: "directivo", estado: "BASE" },
        { numero: 2, matricula: "SUB-001", nombre: "VERÓNICA VEGA TREJO", funcion: "SUBDIRECTORA TURNO VESPERTINO", tipo: "directivo", estado: "BASE" },
        { numero: 3, matricula: "DOC-001", nombre: "MARIA FELICITAS HERNÁNDEZ RODRÍGUEZ", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 4, matricula: "DOC-002", nombre: "ARACELI CAMARGO BARRÓN", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 5, matricula: "DOC-003", nombre: "ALMA DELIA MORENO GUTIÉRREZ", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 6, matricula: "DOC-004", nombre: "MARIA EDITH IVONNE NAVA BAUTISTA", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 7, matricula: "DOC-005", nombre: "MARIA GUADALUPE PÉREZ BATALLA", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 8, matricula: "DOC-006", nombre: "FERNANDO VENTURA GUTIÉRREZ", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 9, matricula: "DOC-007", nombre: "CECILIA ALFARO PARAMO", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 10, matricula: "DOC-008", nombre: "MILDRED NATASHA SANTANDER TURRUBIATES", funcion: "ESPAÑOL", tipo: "docente", estado: "BASE" },
        { numero: 11, matricula: "DOC-009", nombre: "GERARDO DAVID GARCÍA GONZÁLEZ", funcion: "MATEMÁTICAS", tipo: "docente", estado: "BASE" },
        { numero: 12, matricula: "DOC-010", nombre: "MARIA LORENA RAMÍREZ OLVERA", funcion: "MATEMÁTICAS", tipo: "docente", estado: "BASE" },
        { numero: 13, matricula: "DOC-011", nombre: "ANDRÉS ISAÍAS CHÁVEZ NOLASCO", funcion: "MATEMÁTICAS", tipo: "docente", estado: "BASE" },
        { numero: 14, matricula: "DOC-012", nombre: "SANTIAGO BALDERAS BAEZA", funcion: "MATEMÁTICAS", tipo: "docente", estado: "BASE" },
        { numero: 15, matricula: "DOC-013", nombre: "ALAN ESQUIVEL CAMPOS", funcion: "MATEMÁTICAS", tipo: "docente", estado: "BASE" },
        { numero: 16, matricula: "DOC-014", nombre: "CLAUDIA ROCIO GUERRERO ALTAMIRANO", funcion: "CIENCIAS NATURALES", tipo: "docente", estado: "BASE" },
        { numero: 17, matricula: "DOC-015", nombre: "ITZEL MARICELA GALLARDO ÁLVAREZ", funcion: "CIENCIAS NATURALES", tipo: "docente", estado: "BASE" },
        { numero: 18, matricula: "DOC-016", nombre: "AMALIA KARINA SANTIAGO LARA", funcion: "CIENCIAS NATURALES", tipo: "docente", estado: "BASE" },
        { numero: 19, matricula: "DOC-017", nombre: "MANUEL GONZÁLEZ SILVA", funcion: "CIENCIAS NATURALES", tipo: "docente", estado: "BASE" },
        { numero: 20, matricula: "DOC-018", nombre: "CORNELIO MOGOLLÓN MONDRAGÓN", funcion: "CIENCIAS NATURALES", tipo: "docente", estado: "BASE" },
        { numero: 21, matricula: "DOC-019", nombre: "AARÓN HERNÁNDEZ MONTES", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "BASE" },
        { numero: 22, matricula: "DOC-020", nombre: "GABRIEL BUENDIA RAMÍREZ", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "BASE" },
        { numero: 23, matricula: "DOC-021", nombre: "EDUARDO FUERTE LONGORIA", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "BASE" },
        { numero: 24, matricula: "DOC-022", nombre: "ARMANDO ALMANZA GONZÁLEZ", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "BASE" },
        { numero: 25, matricula: "DOC-023", nombre: "MARÍA DEL ROCÍO NAVA BAUTISTA", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "BASE" },
        { numero: 26, matricula: "DOC-024", nombre: "FRANCISCO ARTURO YAÑEZ PEREZ", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "INTERINO" },
        { numero: 27, matricula: "DOC-025", nombre: "PAMELA GONZÁLEZ VILLAGÓMEZ", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "INTERINA" },
        { numero: 28, matricula: "DOC-026", nombre: "GENOVEVA AYALA RENTERIA", funcion: "CIENCIAS SOCIALES", tipo: "docente", estado: "INTERINA" },
        { numero: 29, matricula: "DOC-027", nombre: "DIANA VALERIA ORTEGA DIAZ", funcion: "INGLES", tipo: "docente", estado: "BASE" },
        { numero: 30, matricula: "DOC-028", nombre: "ELVA ALEJANDRA MORALES MARTÍNEZ", funcion: "INGLES", tipo: "docente", estado: "BASE" },
        { numero: 31, matricula: "DOC-029", nombre: "BLANCA ESTELA VALDIVIA RAZO", funcion: "INGLES", tipo: "docente", estado: "BASE" },
        { numero: 32, matricula: "DOC-030", nombre: "DIEGO EDUARDO PRADO CALDERÓN", funcion: "INGLES", tipo: "docente", estado: "BASE" },
        { numero: 33, matricula: "DOC-031", nombre: "VANIA YITSSELL ECHEVERRÍA GALLEGOS", funcion: "EDUCACIÓN FÍSICA", tipo: "docente", estado: "BASE" },
        { numero: 34, matricula: "DOC-032", nombre: "OSCAR HILARIO ARENAS SAUCEDA", funcion: "EDUCACIÓN FÍSICA", tipo: "docente", estado: "BASE" },
        { numero: 35, matricula: "DOC-033", nombre: "ADILENE FUNES MIRANDA", funcion: "ARTES", tipo: "docente", estado: "BASE" },
        { numero: 36, matricula: "DOC-034", nombre: "ROSA MARIA DIAZ ZULOAGA", funcion: "ARTES", tipo: "docente", estado: "BASE" },
        { numero: 37, matricula: "DOC-035", nombre: "ROBERTO NAVA BAUTISTA", funcion: "ARTES Y BIBLIOTECA", tipo: "docente", estado: "BASE" },
        { numero: 38, matricula: "DOC-036", nombre: "GABRIEL PEDRAZA ÁLVAREZ", funcion: "ARTES", tipo: "docente", estado: "BASE" },
        { numero: 39, matricula: "DOC-037", nombre: "ARTEMIO JAVIER CONEJO BELMAN", funcion: "ARTES", tipo: "docente", estado: "INTERINO" },
        { numero: 40, matricula: "DOC-038", nombre: "MARTHA ANGÉLICA ZAVALA RODRÍGUEZ", funcion: "TECNOLOGIAS", tipo: "docente", estado: "BASE" },
        { numero: 41, matricula: "DOC-039", nombre: "ENRIQUE GALLARDO SILVA", funcion: "TECNOLOGIAS", tipo: "docente", estado: "BASE" },
        { numero: 42, matricula: "DOC-040", nombre: "ADAN GABRIEL LOREDO CARDENAS", funcion: "TECNOLOGIAS", tipo: "docente", estado: "BASE" },
        { numero: 43, matricula: "DOC-041", nombre: "SUSANA PEÑA MERINO", funcion: "TECNOLOGIAS", tipo: "docente", estado: "BASE" },
        { numero: 44, matricula: "ADM-001", nombre: "CLAUDIO FABIAN GALLARDO ALVAREZ", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" },
        { numero: 45, matricula: "ADM-002", nombre: "BANI GIEZI AGUILAR RODRÍGUEZ", funcion: "PSICOLOGA", tipo: "administrativo", estado: "BASE" },
        { numero: 46, matricula: "ADM-003", nombre: "YAHEL ALEJANDRINA TORRES LOERA", funcion: "TRABAJADORA SOCIAL", tipo: "administrativo", estado: "BASE" },
        { numero: 47, matricula: "ADM-004", nombre: "NANCY GUTIÉRREZ RUIZ", funcion: "USAER VESPERTINO", tipo: "administrativo", estado: "BASE" },
        { numero: 48, matricula: "ADM-005", nombre: "AGUSTÍN VIDAL FLORES", funcion: "PREFECTO", tipo: "administrativo", estado: "BASE" },
        { numero: 49, matricula: "ADM-006", nombre: "GERARDO FLORES MARTÍNEZ", funcion: "PREFECTO", tipo: "administrativo", estado: "BASE" },
        { numero: 50, matricula: "ADM-007", nombre: "RAMIRO GARCÍA MARTÍNEZ", funcion: "PREFECTO", tipo: "administrativo", estado: "BASE" },
        { numero: 51, matricula: "ADM-008", nombre: "ENERTINA CHÁVEZ LOPEZ", funcion: "ADMINISTRATIVA", tipo: "administrativo", estado: "BASE" },
        { numero: 52, matricula: "ADM-009", nombre: "MA. CARMEN GARCIA OROZCO", funcion: "ADMINISTRATIVA", tipo: "administrativo", estado: "BASE" },
        { numero: 53, matricula: "ADM-010", nombre: "RAFAEL RAMÍREZ AMEZQUITA", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 54, matricula: "ADM-011", nombre: "JOSÉ JORGE LARA RAMÍREZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 55, matricula: "ADM-012", nombre: "JOSÉ CRISTOBAL GONZÁLEZ RAMÍREZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 56, matricula: "ADM-013", nombre: "BRENDA MICHELLE CISNEROS ACOSTA", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 57, matricula: "ADM-014", nombre: "SONIA NÚÑEZ VÁZQUEZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "INTERINA" },
        { numero: 58, matricula: "ADM-015", nombre: "ERICK DAVID BARRERA JUÁREZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 59, matricula: "ADM-016", nombre: "GLORIA MATILDE BARRERA JUÁREZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 60, matricula: "ADM-017", nombre: "LEONOR MARTÍNEZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 61, matricula: "ADM-018", nombre: "ERIKA LUGO HERRERA", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 62, matricula: "ADM-019", nombre: "MITZI CARMEN CORONA MOSQUEDA", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 63, matricula: "ADM-020", nombre: "PERLA LIZBETH FLORES MURILLO", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 64, matricula: "ADM-021", nombre: "SAN JUANA FONSECA HERNÁNDEZ", funcion: "INTENDENTE", tipo: "administrativo", estado: "BASE" },
        { numero: 65, matricula: "DOC-042", nombre: "JESÚS ABRAHAM REYES PERALES", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" },
        { numero: 66, matricula: "DOC-043", nombre: "FRANCISCO JAVIER RAYÓN GONZÁLEZ", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" },
        { numero: 67, matricula: "DOC-044", nombre: "JUAN MARCOS GÓMEZ FLORES", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" },
        { numero: 68, matricula: "DOC-045", nombre: "JUANA TERESA MARTÍNEZ CALDERÓN", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" },
        { numero: 69, matricula: "DOC-046", nombre: "ILIUSI VIRIDIANA RODRÍGUEZ CORTES", funcion: "AUXILIAR DE LABORATORIO", tipo: "administrativo", estado: "BASE" }
    ];
    
    initPersonalDetalles();
}

function initPersonalDetalles() {
    personalDetalles = {};
    personal.forEach(person => {
        personalDetalles[person.matricula] = {
            fechaIngreso: '',
            email: '',
            telefono: ''
        };
    });
}

function updateProfesoresDatalists() {
    const profesoresList = document.getElementById('profesoresList');
    const profesoresListConst = document.getElementById('profesoresListConst');
    const profesoresListInc = document.getElementById('profesoresListInc');
    
    if (profesoresList) {
        profesoresList.innerHTML = personal.map(p => `<option value="${p.nombre}">`).join('');
    }
    if (profesoresListConst) {
        profesoresListConst.innerHTML = personal.map(p => `<option value="${p.nombre}">`).join('');
    }
    if (profesoresListInc) {
        profesoresListInc.innerHTML = personal.map(p => `<option value="${p.nombre}">`).join('');
    }
}

function updateReportView() {
    const reportType = document.getElementById('reportType');
    const functionFilter = document.getElementById('functionFilter');
    const personalSearch = document.getElementById('personalSearch');
    
    if (!reportType || !functionFilter || !personalSearch) return;
    
    let filteredPersonal = [...personal];
    
    const typeValue = reportType.value;
    if (typeValue === 'docentes') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'docente');
    } else if (typeValue === 'administrativos') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'administrativo');
    } else if (typeValue === 'directivos') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'directivo');
    } else if (typeValue === 'interinos') {
        filteredPersonal = filteredPersonal.filter(p => p.estado === 'INTERINO' || p.estado === 'INTERINA');
    }
    
    const functionValue = functionFilter.value;
    if (functionValue !== 'all') {
        filteredPersonal = filteredPersonal.filter(p => p.funcion === functionValue);
    }
    
    const searchText = personalSearch.value.toLowerCase();
    if (searchText) {
        filteredPersonal = filteredPersonal.filter(p => p.nombre.toLowerCase().includes(searchText));
    }
    
    updatePersonalTable(filteredPersonal);
    updateStats();
}

function updatePersonalTable(data) {
    const tbody = document.getElementById('personalBody');
    const countSpan = document.getElementById('personalCount');
    
    if (!tbody || !countSpan) return;
    
    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="no-results">No se encontraron resultados</td></tr>';
        countSpan.textContent = '0 registros';
        return;
    }
    
    countSpan.textContent = `${data.length} registros`;
    
    tbody.innerHTML = data.map(person => {
        const originalIndex = personal.findIndex(p => p.matricula === person.matricula);
        return `
            <tr>
                <td>${person.numero}</td>
                <td>${person.matricula}</td>
                <td>${person.nombre}</td>
                <td>${person.funcion}</td>
                <td>${person.tipo === 'docente' ? 'Docente' : person.tipo === 'directivo' ? 'Directivo' : 'Administrativo'}</td>
                <td><span class="status-badge ${person.estado === 'INTERINO' || person.estado === 'INTERINA' ? 'status-interino' : 'status-base'}">${person.estado}</span></td>
                <td class="action-buttons">
                    <button onclick="showEditPersonalModal(${originalIndex})" class="edit-personal-btn">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button onclick="deletePersonal(${originalIndex})" class="delete-personal-btn">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function updateStats() {
    const totalPersonal = personal.length;
    const totalDocentes = personal.filter(p => p.tipo === 'docente').length;
    const totalDirectivos = personal.filter(p => p.tipo === 'directivo').length;
    const totalAdministrativos = personal.filter(p => p.tipo === 'administrativo').length;
    
    const totalPersonalEl = document.getElementById('totalPersonal');
    const totalDocentesEl = document.getElementById('totalDocentes');
    const totalDirectivosEl = document.getElementById('totalDirectivos');
    const totalAdministrativosEl = document.getElementById('totalAdministrativos');
    
    if (totalPersonalEl) totalPersonalEl.textContent = totalPersonal;
    if (totalDocentesEl) totalDocentesEl.textContent = totalDocentes;
    if (totalDirectivosEl) totalDirectivosEl.textContent = totalDirectivos;
    if (totalAdministrativosEl) totalAdministrativosEl.textContent = totalAdministrativos;
}

function showAddPersonalModal() {
    const modal = document.getElementById('addPersonalModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('addPersonalForm').reset();
    }
}

function closeAddPersonalModal() {
    const modal = document.getElementById('addPersonalModal');
    if (modal) modal.style.display = 'none';
}

function registerNewPersonal(event) {
    event.preventDefault();
    
    const matricula = document.getElementById('newMatricula').value.trim();
    const nombre = document.getElementById('newNombre').value.trim();
    const funcion = document.getElementById('newFuncion').value;
    const tipo = document.getElementById('newTipo').value;
    const estado = document.getElementById('newEstado').value;
    const fechaIngreso = document.getElementById('newFechaIngreso').value;
    const email = document.getElementById('newEmail').value.trim();
    const telefono = document.getElementById('newTelefono').value.trim();
    
    if (!matricula || !nombre || !funcion || !tipo || !estado) {
        alert('Por favor, complete todos los campos obligatorios');
        return;
    }
    
    if (personal.some(p => p.matricula === matricula)) {
        alert('Ya existe un empleado con esta matrícula');
        return;
    }
    
    const nuevoPersonal = {
        numero: personal.length + 1,
        matricula: matricula,
        nombre: nombre.toUpperCase(),
        funcion: funcion,
        tipo: tipo,
        estado: estado
    };
    
    personal.push(nuevoPersonal);
    
    personalDetalles[matricula] = {
        fechaIngreso: fechaIngreso,
        email: email,
        telefono: telefono
    };
    
    personal.forEach((p, index) => {
        p.numero = index + 1;
    });
    
    updateStats();
    updateReportView();
    updateProfesoresDatalists();
    closeAddPersonalModal();
    showNotification(`Personal ${nombre} registrado exitosamente`);
}

function showEditPersonalModal(index) {
    const person = personal[index];
    if (!person) return;
    
    const modal = document.getElementById('editPersonalModal');
    if (modal) {
        document.getElementById('editIndex').value = index;
        document.getElementById('editMatricula').value = person.matricula;
        document.getElementById('editNombre').value = person.nombre;
        document.getElementById('editFuncion').value = person.funcion;
        document.getElementById('editTipo').value = person.tipo;
        document.getElementById('editEstado').value = person.estado;
        
        const detalles = personalDetalles[person.matricula] || {};
        document.getElementById('editFechaIngreso').value = detalles.fechaIngreso || '';
        document.getElementById('editEmail').value = detalles.email || '';
        document.getElementById('editTelefono').value = detalles.telefono || '';
        
        modal.style.display = 'block';
    }
}

function closeEditPersonalModal() {
    const modal = document.getElementById('editPersonalModal');
    if (modal) modal.style.display = 'none';
}

function updatePersonal(event) {
    event.preventDefault();
    
    const index = parseInt(document.getElementById('editIndex').value);
    const matricula = document.getElementById('editMatricula').value.trim();
    const nombre = document.getElementById('editNombre').value.trim();
    const funcion = document.getElementById('editFuncion').value;
    const tipo = document.getElementById('editTipo').value;
    const estado = document.getElementById('editEstado').value;
    const fechaIngreso = document.getElementById('editFechaIngreso').value;
    const email = document.getElementById('editEmail').value.trim();
    const telefono = document.getElementById('editTelefono').value.trim();
    
    if (index >= 0 && index < personal.length) {
        const matriculaExistente = personal.some((p, i) => p.matricula === matricula && i !== index);
        if (matriculaExistente) {
            alert('Ya existe otro empleado con esta matrícula');
            return;
        }
        
        const oldMatricula = personal[index].matricula;
        
        personal[index] = {
            ...personal[index],
            matricula: matricula,
            nombre: nombre.toUpperCase(),
            funcion: funcion,
            tipo: tipo,
            estado: estado
        };
        
        if (oldMatricula !== matricula) {
            personalDetalles[matricula] = personalDetalles[oldMatricula];
            delete personalDetalles[oldMatricula];
        }
        
        personalDetalles[matricula] = {
            ...personalDetalles[matricula],
            fechaIngreso: fechaIngreso,
            email: email,
            telefono: telefono
        };
        
        personal.forEach((p, i) => {
            p.numero = i + 1;
        });
        
        updateStats();
        updateReportView();
        updateProfesoresDatalists();
        closeEditPersonalModal();
        showNotification(`Personal ${nombre} actualizado exitosamente`);
    }
}

function deletePersonal(index) {
    const person = personal[index];
    if (!person) return;
    
    if (confirm(`¿Está seguro de eliminar a ${person.nombre} de la relación de personal?`)) {
        personal.splice(index, 1);
        
        personal.forEach((p, i) => {
            p.numero = i + 1;
        });
        
        delete personalDetalles[person.matricula];
        
        updateStats();
        updateReportView();
        updateProfesoresDatalists();
        showNotification(`Personal eliminado exitosamente`);
    }
}

// ==================== FUNCIONES DE EXPORTACIÓN ====================
function exportToExcel() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    
    const tabId = activeTab.id;
    let data = [];
    let sheetName = '';
    
    switch(tabId) {
        case 'permisos':
            data = filterData(permisos).map(p => ({
                Matrícula: p.matricula,
                Nombre: p.nombre,
                'Fecha(s)': p.fecha,
                Mes: p.mes,
                Año: p.anio,
                Días: p.dias,
                Motivo: p.motivo
            }));
            sheetName = 'Permisos Económicos';
            break;
        case 'constancias':
            data = filterData(constancias).map(c => ({
                Matrícula: c.matricula,
                Nombre: c.nombre,
                Fecha: formatDate(c.fecha),
                Tipo: c.tipo,
                Horario: c.horario,
                Descripción: c.descripcion
            }));
            sheetName = 'Constancias Médicas';
            break;
        case 'incapacidades':
            data = filterData(incapacidades).map(i => ({
                Matrícula: i.matricula,
                Nombre: i.nombre,
                'Fecha Inicio': formatDate(i.fechaInicio),
                'Fecha Fin': formatDate(i.fechaFin),
                'No. Serie': i.serie,
                Días: i.dias,
                Motivo: i.motivo
            }));
            sheetName = 'Incapacidades';
            break;
        case 'personal':
            exportPersonalToExcel();
            return;
        default:
            return;
    }
    
    if (data.length === 0) {
        alert('No hay datos para exportar');
        return;
    }
    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    
    const date = new Date();
    const fileName = `${sheetName}_${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}.xlsx`;
    
    XLSX.writeFile(wb, fileName);
    showNotification('Archivo exportado exitosamente');
}

function exportPersonalToExcel() {
    const reportType = document.getElementById('reportType');
    const functionFilter = document.getElementById('functionFilter');
    const personalSearch = document.getElementById('personalSearch');
    
    if (!reportType || !functionFilter || !personalSearch) return;
    
    let filteredPersonal = [...personal];
    
    const typeValue = reportType.value;
    if (typeValue === 'docentes') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'docente');
    } else if (typeValue === 'administrativos') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'administrativo');
    } else if (typeValue === 'directivos') {
        filteredPersonal = filteredPersonal.filter(p => p.tipo === 'directivo');
    } else if (typeValue === 'interinos') {
        filteredPersonal = filteredPersonal.filter(p => p.estado === 'INTERINO' || p.estado === 'INTERINA');
    }
    
    const functionValue = functionFilter.value;
    if (functionValue !== 'all') {
        filteredPersonal = filteredPersonal.filter(p => p.funcion === functionValue);
    }
    
    const searchText = personalSearch.value.toLowerCase();
    if (searchText) {
        filteredPersonal = filteredPersonal.filter(p => p.nombre.toLowerCase().includes(searchText));
    }
    
    if (filteredPersonal.length === 0) {
        alert('No hay datos para exportar');
        return;
    }
    
    const data = filteredPersonal.map(p => {
        const detalles = personalDetalles[p.matricula] || {};
        return {
            'No.': p.numero,
            'Matrícula': p.matricula,
            'Nombre Completo': p.nombre,
            'Perfil/Función': p.funcion,
            'Tipo': p.tipo === 'docente' ? 'Docente' : p.tipo === 'directivo' ? 'Directivo' : 'Administrativo',
            'Estado': p.estado,
            'Fecha de Ingreso': detalles.fechaIngreso || '',
            'Correo Electrónico': detalles.email || '',
            'Teléfono': detalles.telefono || ''
        };
    });
    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Relación de Personal');
    
    const date = new Date();
    const fileName = `Relacion_Personal_${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}.xlsx`;
    
    XLSX.writeFile(wb, fileName);
    showNotification('Reporte exportado exitosamente');
}

// ==================== FUNCIONES DE UTILERÍA ====================
function formatDate(dateString) {
    if (!dateString) return '';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-ES', options);
    } catch (e) {
        return dateString;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i><span>${message}</span>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => {
            if (notification.parentNode) notification.parentNode.removeChild(notification);
        }, 300);
    }, 3000);
}

function printReport() {
    window.print();
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando sistema...');
    
    initSampleData();
    initPersonalData();
    initForms();
    
    const addPersonalForm = document.getElementById('addPersonalForm');
    if (addPersonalForm) addPersonalForm.addEventListener('submit', registerNewPersonal);
    
    const editPersonalForm = document.getElementById('editPersonalForm');
    if (editPersonalForm) editPersonalForm.addEventListener('submit', updatePersonal);
    
    updateAllTables();
    updateStats();
    updateReportView();
    updateProfesoresDatalists();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') searchTeacher();
        });
    }
    
    const personalSearch = document.getElementById('personalSearch');
    if (personalSearch) {
        personalSearch.addEventListener('keyup', updateReportView);
    }
    
    window.onclick = function(event) {
        const deleteModal = document.getElementById('deleteModal');
        const addModal = document.getElementById('addPersonalModal');
        const editModal = document.getElementById('editPersonalModal');
        
        if (event.target === deleteModal) closeDeleteModal();
        if (event.target === addModal) closeAddPersonalModal();
        if (event.target === editModal) closeEditPersonalModal();
    };
    
    console.log('Sistema inicializado correctamente');
});
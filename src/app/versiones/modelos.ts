// Archivo donde se declaran todos los objetos que se utilizan para darle estructura a componentes ( Cards, numero de subprocesos, etc)

export const versionesHero = {
  title1: 'ESCOGE LA VERSIÓN QUE MÁS SE',
  title2: 'ADAPTE A TU TALLER',
  btn1Text: 'SOLICITAR UN DEMO',
  btn2Text: 'COMPARAR VERSIONES',
  btn1Route: '/contactanos',
  backgroundImage: 'assets/ImagenPrincipalVersiones.png',
};

export const RadarControlTotalInformationObject = {
  informationText:
    'Es la opción perfecta para talleres de bajo volumen con personal administrativo limitado, ya que no sobrecarga de actividades dentro del sistema a los pocos usuarios que operan en el taller.',
  informationPoints: [
    'Volumen de rep: +100 Unidades mensuales',
    'Plantilla laboral alta',
    'Funciones especificas',
    'Contabilidad interna',
  ],
  imageSrc: 'assets/RadarControlTotal.png',
};

export const RadarLiteInformationObject = {
  informationText:
    'Es la opción perfecta para talleres de bajo volumen con personal administrativo limitado, ya que no sobrecarga de actividades dentro del sistema a los pocos usuarios que operan en el taller.',
  informationPoints: [
    'Volumen de rep: 0-50 Unidades mensuales',
    'Poco personal',
    'Multifuncionales',
  ],
  imageSrc: 'assets/RadarLite.png',
};

export const RadarControlTotalProcessList = [
  {
    processNumber: '01',
    processName: 'LEVANTAMIENTO',
    processInformation:
      'Lectura de datos como: usuarios, procesos, permisos, etc.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-751.png',
    clicked: false,
  },
  {
    processNumber: '02',
    processName: 'CONFIGURACIÓN',
    processInformation:
      'Se realiza el alta del taller en RADAR, y se configura según las necesidades.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-750.png',
    clicked: false,
  },
  {
    processNumber: '03',
    processName: 'AMBIENTE DE PRUEBA',
    processInformation:
      'Se realizan los cursos de capacitación y se activa una simulación del taller en el sistema.',
    processDuration: '2 Semanas',
    optional: false,
    imageSrc: 'assets/Grupo-749.png',
    clicked: false,
  },
  {
    processNumber: '04',
    processName: 'IMPLEMENTACIÓN',
    processInformation:
      'Se activa el ambiente de producción real, se dan de alta el 100% de órdenes en taller.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-748.png',
    clicked: false,
  },
  {
    processNumber: '05',
    processName: 'CONSULTORIA',
    processInformation:
      'Monitoreo con desempeño con metas a cumplir. Acompañados por expertos en RADAR.',
    processDuration: '6 Semanas',
    optional: false,
    imageSrc: 'assets/Grupo-747.png',
    clicked: false,
  },
];

export const RadarLiteProcessList = [
  {
    processNumber: '01',
    processName: 'LEVANTAMIENTO',
    processInformation:
      'Lectura de datos como: usuarios, procesos, permisos, etc.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-751.png',
    clicked: false,
  },
  {
    processNumber: '02',
    processName: 'CONFIGURACIÓN',
    processInformation:
      'Se realiza el alta del taller en RADAR, y se configura según las necesidades.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-750.png',
    clicked: false,
  },
  {
    processNumber: '03',
    processName: 'IMPLEMENTACIÓN',
    processInformation:
      'Se activa el ambiente de producción real, se dan de alta el 100% de órdenes en taller.',
    processDuration: '1 Semana',
    optional: false,
    imageSrc: 'assets/Grupo-748.png',
    clicked: false,
  },
  {
    processNumber: '04',
    processName: 'CONSULTORIA',
    processInformation:
      'Monitoreo con desempeño con metas a cumplir. Acompañados por expertos en RADAR.',
    processDuration: '6 Semanas',
    optional: true,
    imageSrc: 'assets/Grupo-747.png',
    clicked: false,
  },
];

export const RadarTotalFunctionalities = [
  {
    name: 'PANEL DE CLIENTE',
    icon: 'assets/versionesFuncionalidadPanelCliente-inactivo.svg',
    gif: 'assets/panel_cliente2.gif',
    text: 'Mantén a tu cliente informado 24/7 con información en tiempo real.',
    id: 1,
    iconoActivo: 'assets/versionesFuncionalidadPanelCliente-activo.svg',
    hover: false,
    margin: '88px',
    margin2 : '90px'
  },
  {
    name: 'INFORMACION EN TIEMPO REAL',
    icon: 'assets/versionesFuncionalidadTiempoReal-inactivo.svg',
    gif: 'assets/tiempo_real.gif',
    text: 'Creación de reportes, indicadores, VSM (Tiempo de ciclo, WIP, vehículos promedio), Analytics con Power BI.',
    id: 2,
    iconoActivo: 'assets/versionesFuncionalidadTiempoReal-activo.svg',
    hover: false,
    margin: '60px',
    margin2: '68px'
  },
  {
    name: 'ELECTROPLAN',
    icon: 'assets/versionesFuncionalidadElectroplan-inactivo.svg',
    gif: 'assets/electroplan.gif',
    text: 'Planeación diaria de la reparación, detención y pausa de procesos de reparación. ',
    id: 3,
    iconoActivo: 'assets/versionesFuncionalidadElectroplan-activo.svg',
    hover: false,
    margin: '45px',
    margin2 : '47px'
  },
  {
    name: 'INTERFACES',
    icon: 'assets/versionesFuncionalidadInterfaces-inactivo.svg',
    gif: 'assets/interfaces.gif',
    text: 'Conexiones tanto con sistemas DMS como con WhatsApp.',
    id: 4,
    iconoActivo: 'assets/versionesFuncionalidadInterfaces-activo.svg',
    hover: false,
    margin: '30px',
    margin2 : '32px'
  },
  {
    name: 'GESTIÓN DE REFACCIONES',
    icon: 'assets/versionesFuncionalidadRefacciones-inactivo.svg',
    gif: 'assets/gestion_v2.gif',
    text: 'Seguimiento, recepción, detonación de órdenes de compra automáticas, reportes de backorders, cotizaciones.',
    id: 5,
    iconoActivo: 'assets/versionesFuncionalidadRefacciones-activo.svg',
    hover: false,
    margin: '15px',
  },
  {
    name: 'INVENTARIO',
    icon: 'assets/versionesFuncionalidadInventario-inactivo.svg',
    gif: 'assets/Inventario.gif',
    text: 'Gestiona compras y asignación de materiales por orden de reparación.',
    id: 6,
    iconoActivo: 'assets/versionesFuncionalidadInventario-activo.svg',
    hover: false,
    margin: '0px',
  },
  {
    name: 'NÓMINA',
    icon: 'assets/versionesFuncionalidadNomina-inactivo.svg',
    gif: 'assets/nomina_v2.gif',
    text: 'Asignación de nómina por operario, reportes contables.',
    id: 7,
    iconoActivo: 'assets/versionesFuncionalidadNomina-activo.svg',
    hover: false,
    margin: '15px',
  },
  {
    name: 'LABORATORIO',
    icon: 'assets/versionesFuncionalidadLaboratorio-inactivo.svg',
    gif: 'assets/Laboratorio_v2.gif',
    text: 'Administra las bitácoras de pintura y procesivos y así controla tus gastos.',
    id: 8,
    iconoActivo: 'assets/versionesFuncionalidadLaboratorio-activo.svg',
    hover: false,
    margin: '30px',
  },
  {
    name: 'FACTURACIÓN',
    icon: 'assets/versionesFuncionalidadFacturacion-inactivo.svg',
    gif: 'assets/Facturacion_v2.gif',
    text: 'Haz de RADAR tu sistema de facturación para que tengas en su solo lugar tanto tu administración como tu operación, llevando reportes contables en tiempo real. Cuentas por cobrar, y cuentas por pagar.',
    id: 9,
    iconoActivo: 'assets/versionesFuncionalidadFacturacion-activo.svg',
    hover: false,
    margin: '45px',
  },
  {
    name: 'E-TOOLS',
    icon: 'assets/versionesFuncionalidadETools-inactivo.svg',
    gif: 'assets/e_tools.gif',
    text: 'Encuestas de satisfacción, diagnósticos, expedientes, bitácoras, tarjeta de avances administrativos y operativos, hoy todo esto es digital para dejar atrás el papel y generar información automática que se puede medir y controlar.',
    id: 10,
    iconoActivo: 'assets/versionesFuncionalidadETools-activo.svg',
    hover: false,
    margin: '60px',
  },
  {
    name: 'VALUACIÓN',
    icon: 'assets/versionesFuncionalidadValuacion-inactivo.svg',
    gif: 'assets/Valuacion_v2.gif',
    text: 'Mide y controla el tiempo de cada proceso de valuación, como tiempos de envío, de respuesta, de autorización de complementos.',
    id: 11,
    iconoActivo: 'assets/versionesFuncionalidadValuacion-activo.svg',
    hover: false,
    margin: '90px',
  },
];

export const RadarLiteFunctionalities = [
  {
    name: 'PANEL DE CLIENTE',
    icon: 'assets/versionesFuncionalidadPanelCliente-inactivo.svg',
    gif: 'assets/panel_cliente2.gif',
    text: 'Mantén a tu cliente informado 24/7 con información en tiempo real.',
    id: 1,
    iconoActivo: 'assets/versionesFuncionalidadPanelCliente-activo.svg',
    hover: false,
    margin: '60px',
  },
  {
    name: 'CREACION DE REPORTES',
    icon: 'assets/versionesFuncionalidadReportes-inactivo.svg',
    gif: 'assets/personalizados_v2.gif',
    text: 'Genera reportes automáticos en Excel para el manejo personalizado de información.',
    id: 2,
    iconoActivo: 'assets/versionesFuncionalidadReportes-activo.svg',
    hover: false,
    margin: '30px',
  },
  {
    name: 'VSM',
    icon: 'assets/versionesFuncionalidadVSM-inactivo.svg',
    gif: 'assets/vsm.gif',
    text: 'Medición del mapa de cadena de valor; Tiempo de ciclo, WIP, vehículos promedio.',
    id: 3,
    iconoActivo: 'assets/versionesFuncionalidadVSM-activo.svg',
    hover: false,
    margin: '15px',
  },
  {
    name: 'MONTOS AUTORIZADOS',
    icon: 'assets/versionesFuncionalidadMontosAutorizados-inactivo.svg',
    gif: 'assets/montos_autorizados.gif',
    text: 'Lleva el control de tus ventas por orden.',
    id: 4,
    iconoActivo: 'assets/versionesFuncionalidadMontosAutorizados-activo.svg',
    hover: false,
    margin: '0rem',
  },
  {
    name: 'INTERFACES',
    icon: 'assets/versionesFuncionalidadInterfaces-inactivo.svg',
    gif: 'assets/interfaces.gif',
    text: 'Conexiones tanto con sistemas DMS como con WhatsApp',
    id: 5,
    iconoActivo: 'assets/versionesFuncionalidadInterfaces-activo.svg',
    hover: false,
    margin: '15px',
  },
  {
    name: 'E-TOOLS',
    icon: 'assets/versionesFuncionalidadETools-inactivo.svg',
    gif: 'assets/e_tools.gif',
    text: 'Encuestas de satisfacción, expedientes, bitácoras, tarjeta de avances administrativos, hoy todo esto es digital para dejar atrás el papel y generar información automática que se puede medir y controlar.',
    id: 6,
    iconoActivo: 'assets/versionesFuncionalidadETools-activo.svg',
    hover: false,
    margin: '30px',
  },
  {
    name: 'VALUACIÓN',
    icon: 'assets/versionesFuncionalidadValuacion-inactivo.svg',
    gif: 'assets/Valuacion_v2.gif',
    text: 'Mide y controla el tiempo de cada proceso de valuación, como tiempos de envío, de respuesta, de autorización de complementos.',
    id: 7,
    iconoActivo: 'assets/versionesFuncionalidadValuacion-activo.svg',
    hover: false,
    margin: '60px',
  },
];

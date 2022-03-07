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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-751.png',
  },
  {
    processNumber: '02',
    processName: 'CONFIGURACION',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-750.png',
  },
  {
    processNumber: '03',
    processName: 'AMBIENTE DE PRUEBA',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-749.png',
  },
  {
    processNumber: '04',
    processName: 'IMPLEMENTACION',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-748.png',
  },
  {
    processNumber: '05',
    processName: 'CONSULTORIA',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-747.png',
  },
];

export const RadarLiteProcessList = [
  {
    processNumber: '01',
    processName: 'LEVANTAMIENTO',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-751.png',
  },
  {
    processNumber: '02',
    processName: 'CONFIGURACION',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-750.png',
  },
  {
    processNumber: '04',
    processName: 'IMPLEMENTACION',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-748.png',
  },
  {
    processNumber: '05',
    processName: 'CONSULTORIA',
    processInformation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    processDuration: '1 Semana',
    imageSrc: 'assets/Grupo-747.png',
  },
];

export const RadarTotalFunctionalities = [
  {
    name: 'PANEL DE CLIENTE',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/panel_cliente2.gif',
    text: 'Mantén a tu cliente informado 24/7 con información en tiempo real.',
    id: 1,
  },
  {
    name: 'INFORMACION EN TIEMPO REAL',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/tiempo_real.gif',
    text: 'Creación de reportes, indicadores, VSM (Tiempo de ciclo, WIP, vehículos promedio), Analytics con Power BI.',
    id: 2,
  },
  {
    name: 'ELECTROPLAN',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/electroplan.gif',
    text: 'Planeación diaria de la reparación, detención y pausa de procesos de reparación. ',
    id: 3,
  },
  {
    name: 'INTERFACES',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/interfaces.gif',
    text: 'Conexiones tanto con sistemas DMS como con WhatsApp.',
    id: 4,
  },
  {
    name: 'GESTIÓN DE REFACCIONES',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/gestion_v2.gif',
    text: 'Seguimiento, recepción, detonación de órdenes de compra automáticas, reportes de backorders, cotizaciones.',
    id: 5,
  },
  {
    name: 'INVENTARIO',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/Inventario.gif',
    text: 'Gestiona compras y asignación de materiales por orden de reparación.',
    id: 6,
  },
  {
    name: 'NÓMINA',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/nomina_v2.gif',
    text: 'Asignación de nómina por operario, reportes contables.',
    id: 7,
  },
  {
    name: 'LABORATORIO',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/Laboratorio_v2.gif',
    text: 'Administra las bitácoras de pintura y procesivos y así controla tus gastos.',
    id: 8,
  },
  {
    name: 'FACTURACIÓN',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/Facturacion_v2.gif',
    text: 'Haz de RADAR tu sistema de facturación para que tengas en su solo lugar tanto tu administración como tu operación, llevando reportes contables en tiempo real. Cuentas por cobrar, y cuentas por pagar.',
    id: 9,
  },
  {
    name: 'E-TOOLS',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/e_tools.gif',
    text: 'Encuestas de satisfacción, diagnósticos, expedientes, bitácoras, tarjeta de avances administrativos y operativos, hoy todo esto es digital para dejar atrás el papel y generar información automática que se puede medir y controlar.',
    id: 10,
  },
  {
    name: 'VALUACIÓN',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/Valuacion_v2.gif',
    text: 'Mide y controla el tiempo de cada proceso de valuación, como tiempos de envío, de respuesta, de autorización de complementos.',
    id: 11,
  },
];

export const RadarLiteFunctionalities = [
  {
    name: 'PANEL DE CLIENTE',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/panel_cliente2.gif',
    text: 'Mantén a tu cliente informado 24/7 con información en tiempo real.',
    id: 1,
  },
  {
    name: 'CREACION DE REPORTES',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/personalizados_v2.gif',
    text: 'Genera reportes automáticos en Excel para el manejo personalizado de información.',
    id: 2,
  },
  {
    name: 'VSM',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/vsm.gif',
    text: 'Medición del mapa de cadena de valor; Tiempo de ciclo, WIP, vehículos promedio.',
    id: 3,
  },
  {
    name: 'MONTOS AUTORIZADOS',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/montos_autorizados.gif',
    text: 'Lleva el control de tus ventas por orden.',
    id: 4,
  },
  {
    name: 'INTERFACES',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/interfaces.gif',
    text: 'Conexiones tanto con sistemas DMS como con WhatsApp',
    id: 5,
  },
  {
    name: 'E-TOOLS',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/e_tools.gif',
    text: 'Encuestas de satisfacción, expedientes, bitácoras, tarjeta de avances administrativos, hoy todo esto es digital para dejar atrás el papel y generar información automática que se puede medir y controlar.',
    id: 6,
  },
  {
    name: 'VALUACIÓN',
    icon: 'assets/Panel-Cliente.svg',
    gif: 'assets/Valuacion_v2.gif',
    text: 'Mide y controla el tiempo de cada proceso de valuación, como tiempos de envío, de respuesta, de autorización de complementos.',
    id: 7,
  },
];

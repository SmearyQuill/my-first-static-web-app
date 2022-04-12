import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.css'],
})
export class FuncionalidadesComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'ACCEDE DESDE CUALQUIER LUGAR',
      subtitle: '100% WEB-BASED',
      text: 'Controla y monitorea tu taller desde cualquier parte del mundo, puedes ingresar desde cualquier dispositivo móvil.',
      iconInactive: 'assets/home_accedeIcon-inactivo.svg',
      iconActive: 'assets/home_accedeIcon-activo.svg',
      image: '/assets/WEB-BasedHome.png',
      over: false,
    },
    {
      id: 2,
      name: 'SEGUIMIENTO AUTOMÁTICO A TUS CLIENTES',
      subtitle: 'AUTOMATIZA TU SEGUIMIENTO',
      text: 'Gracias al panel del cliente, éste podrá consultar información en tiempo real. Así como automatizar el seguimiento vía WhatsApp con información específica y puntual.',
      iconInactive: 'assets/home_seguimiento-inactivo.svg',
      iconActive: 'assets/home_seguimiento-activo.svg',
      image: '/assets/Seguimiento_home.png',
      over: false,
    },
    {
      id: 3,
      name: 'CALCULA AUTOMATICAMENTE LA NÓMINA',
      subtitle: 'TODA LA NÓMINA EN UN SOLO LUGAR',
      text: 'Calcula los montos que tienes que pagar por orden, por operario, por proceso y saca reportes de lo que necesites.',
      iconInactive: 'assets/home_nomina-inactivo.svg',
      iconActive: 'assets/home_nomina-activo.svg',
      image: 'assets/Nomina_home.png',
      over: false,
    },
    {
      id: 4,
      name: 'PLANIFICA TU OPERACIÓN',
      subtitle: 'ELECTROPLAN',
      text: 'Planifica la operación de tus subprocesos de reparación con el electroplan automatizado. Y detecta cuellos de botella, aumentando tu productividad.',
      iconInactive: 'assets/home_electroplan-inactivo.svg',
      iconActive: 'assets/home_electroplan-activo.svg',
      image: 'assets/Electroplan_home.png',
      over: false,
    },
    {
      id: 5,
      name: 'CONTROLA TUS REFACCIONES',
      subtitle: 'CONTROLA TUS REFACCIONES',
      text: 'Cotiza y compara precios, detona órdenes de compra, recibe y da seguimiento. Ten mayor control gracias a los reportes de backorders, piezas vencidas y más.',
      iconInactive: 'assets/home_refacciones-inactivo.svg',
      iconActive: 'assets/home_refacciones-activo.svg',
      image: 'assets/Refacciones_home.png',
      over: false,
    },
    {
      id: 6,
      name: 'ANALIZA TUS DATOS',
      subtitle: 'ANALIZA TODO TU HISTORIAL DE DATOS',
      text: 'Integramos Power BI para el análisis de datos, además de la facilidad de poder descargar cualquier tipo de reporte personalizado en formato de Excel, desde nómina, consumos de pintura, utilidades, hasta reportes operativos.',
      iconInactive: 'assets/home_powerBI-inactivo.svg',
      iconActive: 'assets/home_powerBI-activo.svg',
      image: 'assets/PowerBI_home.png',
      over: false,
    },
    {
      id: 7,
      name: 'MAPA DE CADENA DE VALOR (VSM)',
      subtitle: 'MAPA DE CADENA DE VALOR (VSM)',
      text: 'Sistema especialmente diseñado para la industria HYP. El sistema mide cada etapa de la reparación, por lo que puedes saber dónde estás teniendo cuellos de botella.',
      iconInactive: 'assets/home_vsm-inactivo.svg',
      iconActive: 'assets/home_vsm-activo.svg',
      image: 'assets/VSM_home.png',
      over: false,
    },
  ];
  // Objeto del beneficio seleccionado
  selectedBenefit = {
    id: 0,
    name: '',
    subtitle: '',
    text: '',
    iconInactive: '',
    iconActive: '',
    image: '',
    over: false,
  };
  constructor() {}

  ngOnInit(): void {
    this.selectFunctionality(0);
  }

  // Función para seleccionar una funcionalidad
  selectFunctionality(index: number) {
    // Se elimina el icono activo de la funcionalidad seleccionada anteriormente
    this.selectedBenefit.over = false;
    // Se selecciona la nueva funcionalidad y se cambia el icono activo
    this.selectedBenefit = this.list[index];
    this.selectedBenefit.over = true;
  }

  goToNextFunctionality() {
    if (this.selectedBenefit.id == this.list.length) {
      this.selectFunctionality(0);
    } else {
      this.selectFunctionality(this.selectedBenefit.id);
    }
  }

  goToPreviousFunctionality() {
    if (this.selectedBenefit.id == 1) {
      this.selectFunctionality(this.list.length - 1);
    } else {
      this.selectFunctionality(this.selectedBenefit.id - 2);
    }
  }

  checkMouseOut(i: number) {
    if (this.selectedBenefit.id != this.list[i].id) {
      this.list[i].over = false;
    }
  }
}

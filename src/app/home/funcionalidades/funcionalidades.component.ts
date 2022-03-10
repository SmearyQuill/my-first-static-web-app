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
    },
    {
      id: 2,
      name: 'SEGUIMIENTO AUTOMÁTICO A TUS CLIENTES',
      subtitle: 'AUTOMATIZA TU SEGUIMIENTO',
      text: 'Gracias al panel del cliente, este podrá consultar información en tiempo real. Así como automatizar el seguimiento vía WhatsApp con información específica y puntual.',
      iconInactive: 'assets/home_seguimiento-inactivo.svg',
      iconActive: 'assets/home_seguimiento-activo.svg',
    },
    {
      id: 3,
      name: 'CALCULA AUTOMATICAMENTE LA NÓMINA',
      subtitle: 'TODA LA NÓMINA EN UN SOLO LUGAR',
      text: 'Calcula los montos que tienes que pagar por orden, por operario, por proceso y saca reportes de lo que necesites.',
      iconInactive: 'assets/home_nomina-inactivo.svg',
      iconActive: 'assets/home_nomina-activo.svg',
    },
    {
      id: 4,
      name: 'PLANIFICA TU OPERACIÓN',
      subtitle: 'ELECTROPLAN',
      text: 'Planifica la operación de tus subprocesos de reparación, con el electroplan automatizado. Y detecta cuellos de botella, aumentando tu productividad.',
      iconInactive: 'assets/home_electroplan-inactivo.svg',
      iconActive: 'assets/home_electroplan-activo.svg',
    },
    {
      id: 5,
      name: 'CONTROLA TUS REFACCIONES',
      subtitle: 'CONTROLA TUS REFACCIONES',
      text: 'Cotiza y compara precios, detona órdenes de compra, recibe y da seguimiento. Ten mayor control gracias a los reportes de backorders, piezas vencidas y más.',
      iconInactive: 'assets/home_refacciones-inactivo.svg',
      iconActive: 'assets/home_refacciones-activo.svg',
    },
    {
      id: 6,
      name: 'ANALIZA TUS DATOS',
      subtitle: 'ANALIZA TODO TU HISTORIAL DE DATOS',
      text: 'Integramos Power BI para el análisis de datos, además de la facilidad de poder descargar cualquier tipo de reporte personalizado en formato de Excel, desde nómina, consumos de pintura, utilidades, hasta reportes operativos.',
      iconInactive: 'assets/home_powerBI-inactivo.svg',
      iconActive: 'assets/home_powerBI-activo.svg',
    },
    {
      id: 7,
      name: 'MAPA DE CADENA DE VALOR (VSM)',
      subtitle: 'MAPA DE CADENA DE VALOR (VSM)',
      text: 'Sistema especialmente diseñado para la industria HYP, El sistema mide cada etapa de la reparación, por lo que puedes saber dónde estás teniendo cuellos de botella.',
      iconInactive: 'assets/home_vsm-inactivo.svg',
      iconActive: 'assets/home_vsm-activo.svg',
    },
  ];
  // Objeto del beneficio seleccionado
  selectedBenefit = this.list[0];
  constructor() {}

  ngOnInit(): void {}

  // Función para seleccionar una funcionalidad
  selectFunctionality(index: number) {
    this.selectedBenefit = this.list[index];
  }

  goToNextFunctionality() {
    if (this.selectedBenefit.id == this.list.length) {
      this.selectFunctionality(0);
    } else {
      this.selectFunctionality(this.selectedBenefit.id);
    }
  }

  goToPreviousFunctionality() {
    console.table(this.list);
    if (this.selectedBenefit.id == 1) {
      this.selectFunctionality(this.list.length - 1);
    } else {
      this.selectFunctionality(this.selectedBenefit.id - 2);
    }
  }
}

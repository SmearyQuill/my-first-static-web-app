import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-comparativa-versiones',
  templateUrl: './comparativa-versiones.component.html',
  styleUrls: ['./comparativa-versiones.component.css'],
  animations: [
    trigger('showTableMobile', [
      transition(':enter', [
        style({
          height: '0',
        }),
        // animate('100ms ease-in-out'),
      ]),
      transition(':leave', []),
    ]),
  ],
})
export class ComparativaVersionesComponent implements OnInit {
  @Input() initialOption = '';
  selectedOption = '';

  // Banderas para saber que información se muestra en la versión de movil.
  liteVersionActive = false;
  totalVersionActive = false;
  tableActive = false;
  cardsLite = [
    {
      cardHeader: 'Mensualidad',
      cardContent: [
        '- Licencia de uso del sistema sin límite de usuarios',
        '- Espacio de almacenamiento en la nube',
        '- Carga y descarga de archivos',
        '- Uso de interfaces',
        '- Mantenimiento y soporte',
        '- Actualizaciones',
        '- App de Radar Connect',
      ],
      price: '$3,000 MXN',
      currency: '+IVA',
    },
  ];

  cardsTotal = [
    {
      cardHeader: 'Mensualidad',
      cardContent: [
        '- Licencia de uso del sistema sin límite de usuarios',
        '- Espacio de almacenamiento en la nube',
        '- Carga y descarga de archivos',
        '- Uso de interfaces',
        '- Mantenimiento y soporte',
        '- Actualizaciones',
        '- App de Radar Connect',
      ],
      price: '$5,000 MXN',
      currency: '+IVA',
    },
  ];

  tableRows = [
    {
      rowTitle: 'APERTURA DE ÓRDENES (DMS)',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'ELECTROPLAN',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'SEGUIMIENTO DE CLIENTES',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'NÓMINA',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'REFACCIONES',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'VSM',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'LABORATORIO',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'FACTURACIÓN',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'DIAGNÓSTICO DIGITAL',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'RADAR CONNECT',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'RADAR CONSULTING*',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'RADAR ACADEMY',
      lite: true,
      total: true,
    },
    {
      rowTitle: 'COTIZACIONES Y COMPRAS',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'ANALYTICS (POWER BI)',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'VALUACIÓN',
      lite: false,
      total: true,
    },
    {
      rowTitle: "KPI's",
      lite: true,
      total: true,
    },
    {
      rowTitle: 'REPORTES PERSONALIZADOS',
      lite: false,
      total: true,
    },
    {
      rowTitle: 'INVENTARIO',
      lite: false,
      total: true,
    },
  ];

  selectedCard = this.cardsLite;

  constructor() {}

  ngOnInit(): void {
    this.selectOption(this.initialOption);
  }

  selectOption(option: string) {
    this.selectedOption = option;

    switch (this.selectedOption) {
      case 'LITE':
        this.selectedCard = this.cardsLite;
        break;
      case 'TOTAL':
        this.selectedCard = this.cardsTotal;
        break;
    }
  }

  checkLiteVersion() {
    if (this.liteVersionActive) {
      this.liteVersionActive = false;
    } else {
      this.liteVersionActive = true;
    }
  }
  checkTotalVersion() {
    if (this.totalVersionActive) {
      this.totalVersionActive = false;
    } else {
      this.totalVersionActive = true;
    }
  }
  checkTable() {
    if (this.tableActive) {
      this.tableActive = false;
    } else {
      this.tableActive = true;
    }
  }
}

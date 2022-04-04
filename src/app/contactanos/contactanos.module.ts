import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ContactanosRoutingModule, ReactiveFormsModule],
})
export class ContactanosModule {}

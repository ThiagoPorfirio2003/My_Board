import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDataFormComponent } from './components/access-data-form/access-data-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';



@NgModule({
  declarations: 
  [
    AccessDataFormComponent
  ],
  imports: 
  [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports:
  [
    AccessDataFormComponent
  ]
})
export class AuthModule { }

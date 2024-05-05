import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';
import { AuthModule } from '../auth.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    SharedComponentsModule,
    AuthModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}

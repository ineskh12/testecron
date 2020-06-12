import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TestecronComponent} from '../../pages/testecron/testecron.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [

    TestecronComponent,
  ]
})

export class AdminLayoutModule {}

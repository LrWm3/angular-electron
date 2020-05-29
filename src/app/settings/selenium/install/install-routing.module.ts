import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InstallComponent } from './install.component';

const routes: Routes = [
  {
    path: 'settings/selenium/install',
    component: InstallComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallRoutingModule {}

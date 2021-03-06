import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';
import { NoFundsListComponent } from './no-funds-list/no-funds-list.component';
import { FundComponent } from './fund/fund.component';
import { HighFundsListComponent } from './high-funds-list/high-funds-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'add',
    component: AddProjectComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'noFunds',
    component: NoFundsListComponent
  },
  {
    path: 'highFunds',
    component: HighFundsListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

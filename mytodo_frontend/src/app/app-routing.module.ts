import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appCanActivate } from './guard/app.auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { AppRoles } from '../app.roles';

import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { FolderListComponent } from './pages/folder-list/folder-list.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { EmployeeDetailsComponent } from './pages/employee-detail/employee-details.component';
import { FolderDetailsComponent } from './pages/folder-detail/folder-details.component';
import { TagDetailsComponent } from './pages/tag-detail/tag-details.component';
import { TaskDetailsComponent } from './pages/task-detail/task-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'vehicles',
    component: VehicleListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'vehicle',
    canActivate: [appCanActivate],
    component: VehicleDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'vehicle/:id',
    canActivate: [appCanActivate],
    component: VehicleDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'employee',
    canActivate: [appCanActivate],
    component: EmployeeDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'employee/:id',
    canActivate: [appCanActivate],
    component: EmployeeDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'departments',
    component: DepartmentListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'department',
    canActivate: [appCanActivate],
    component: DepartmentDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'department/:id',
    canActivate: [appCanActivate],
    component: DepartmentDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'vehicle-usages',
    component: VehicleUsageListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'vehicle-usage',
    canActivate: [appCanActivate],
    component: VehicleUsageDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Update] },
  },
  {
    path: 'vehicle-usage/:id',
    canActivate: [appCanActivate],
    component: VehicleUsageDetailComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Update] },
  },
  { path: 'noaccess', component: NoAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { appCanActivate } from './guard/app.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'employee',
    canActivate: [appCanActivate],
    component: EmployeeDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'employee/:id',
    canActivate: [appCanActivate],
    component: EmployeeDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'folders',
    component: FolderListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'folder',
    canActivate: [appCanActivate],
    component: FolderDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'folder/:id',
    canActivate: [appCanActivate],
    component: FolderDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'tags',
    component: TagListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'tag',
    canActivate: [appCanActivate],
    component: TagDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'tag/:id',
    canActivate: [appCanActivate],
    component: TagDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Admin] },
  },
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Read] },
  },
  {
    path: 'task',
    canActivate: [appCanActivate],
    component: TaskDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Update] },
  },
  {
    path: 'task/:id',
    canActivate: [appCanActivate],
    component: TaskDetailsComponent,
    pathMatch: 'full',
    data: { roles: [AppRoles.Update] },
  },
  { path: 'noaccess', component: NoAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

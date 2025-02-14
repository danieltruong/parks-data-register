import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedAreaEditRepealComponent } from './protected-area-edit-repeal/protected-area-edit-repeal.component';
import { ProtectedAreaEditComponent } from './protected-area-edit/protected-area-edit.component';
import { ProtectedAreaManageComponent } from './protected-area-manage.component';
import { ProtectedAreaEditFormComponent } from './protected-area-edit-form/protected-area-edit-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedAreaManageComponent,
    data: {
      breadcrumb: 'PROTECTED_AREA_DETAILS',
    },
    children: [
      {
        path: 'edit-repealed',
        component: ProtectedAreaEditFormComponent,
        data: {
          breadcrumb: 'Edit Repealed',
          updateType: 'minor',
        },
      },
      {
        path: 'edit',
        component: ProtectedAreaEditComponent,
        data: {
          breadcrumb: 'Edit',
        },
        children: [
          {
            path: 'repeal',
            component: ProtectedAreaEditRepealComponent,
            data: {
              breadcrumb: 'Repeal',
            },
          },
          {
            path: ':updateType',
            component: ProtectedAreaEditFormComponent,
            data: {
              breadcrumb: 'PROTECTED_AREA_EDIT',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedAreaManageRoutingModule {}

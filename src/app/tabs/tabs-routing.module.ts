import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        children : [
          {
            path : '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path : 'candidat' ,
            children : [
                           {
                           path : '',
                           loadChildren : () => import('../candidat/candidat.module').then(m =>m.CandidatPageModule)
                           },
                           {
                            path: 'cv',
                            loadChildren: () => import('../cv/cv.module').then( m => m.CvPageModule)
                           },
                           {
                            path: 'todolist',
                            loadChildren: () => import('../todolist/todolist.module').then( m => m.TodolistPageModule)
                           },

                        ]
          }
        ]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

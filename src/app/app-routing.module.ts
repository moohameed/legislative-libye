import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'cv',
  //   loadChildren: () => import('./cv/cv.module').then( m => m.CvPageModule)
  // },
  // {
  //   path: 'todolist',
  //   loadChildren: () => import('./todolist/todolist.module').then( m => m.TodolistPageModule)
  // },
  // {
  //   path: 'candidat',
  //   loadChildren: () => import('./candidat/candidat.module').then( m => m.CandidatPageModule)
  // },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

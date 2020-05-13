import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/general/about/about.component';

import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ServicesComponent } from './modules/application/services/services.component';


const routes: Routes = [
 

 { path: 'about', component: AboutComponent },
 { path: '', component: ServicesComponent },
 { path: '**', component: NotFoundComponent },

 { path: 'services',
    loadChildren: () => import('./modules/application/services/services.module').then(mod => mod.ServicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

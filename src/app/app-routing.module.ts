import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'first-component', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent, children:
  [{ path: 'child-a', component: ChildAComponent},
  { path: 'child-b', component: ChildBComponent},
  ],
},
  { path: 'second-component', component: SecondComponent},
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
  { path: 'not-found', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

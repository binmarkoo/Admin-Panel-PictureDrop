import { Routes } from '@angular/router';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';

export const routes: Routes = [
  {path:'', redirectTo:'view1',pathMatch:'full'},
  {path:'view1', component: View1Component},
  {path:'view2', component: View2Component},
  {path:'**', redirectTo:'view2', pathMatch:'full'},
];

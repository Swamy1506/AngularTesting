import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';


const routes: Routes = [
  {
    path: 'home',
    component: ShoppingItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

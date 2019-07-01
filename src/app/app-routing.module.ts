import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardedWidgetComponent } from './guarded-widget/guarded-widget.component';
import { WidgetGuard } from './guard/widget.guard';

const routes: Routes = [
  { 
    path: '', 
    component: GuardedWidgetComponent,
    canActivate: [WidgetGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

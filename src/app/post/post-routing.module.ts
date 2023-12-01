import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{path: 'post', redirectTo: 'post/index.', pathMatch: 'full'},
{path: 'post/index', component:IndexComponent},
{path: 'carreras/:postId/view', component: ViewComponent },
{path: 'post/create', component: CreateComponent },
{path: 'carreras/:postId/edit',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

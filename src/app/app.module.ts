import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PagesModule } from './pages/pages.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LoginComponent } from './login/login.component'
import { ShareModule } from './share/share.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, PagesModule, ShareModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

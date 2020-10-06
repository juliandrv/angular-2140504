import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { appRouting } from './app.routes';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    StudentsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

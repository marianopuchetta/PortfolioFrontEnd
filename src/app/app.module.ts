import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TrayectoriaEducativaComponent } from './components/trayectoria-educativa/trayectoria-educativa.component';
import { AddTrayectoComponent } from './components/add-trayecto/add-trayecto.component';
import { EditTrayectoComponent } from './components/edit-trayecto/edit-trayecto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AddExperienciaComponent } from './components/add-experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    TrayectoriaEducativaComponent,
    AddTrayectoComponent,
    EditTrayectoComponent,
    ExperienciaComponent,
    AddExperienciaComponent,
    EditExperienciaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

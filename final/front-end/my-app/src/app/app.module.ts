import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LluviaComponent } from './lluvia/lluvia.component';
import { PaisComponent } from './pais/pais.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { DeleteLluviaComponent } from './delete-lluvia/delete-lluvia.component';
import { DeletePaisComponent } from './delete-pais/delete-pais.component';
import { DeleteProvinciaComponent } from './delete-provincia/delete-provincia.component';
import { GetProvinciaComponent } from './get-provincia/get-provincia.component';
import { GetPaisComponent } from './get-pais/get-pais.component';
import { GetLluviaComponent } from './get-lluvia/get-lluvia.component';
import { PatchLluviaComponent } from './patch-lluvia/patch-lluvia.component';
import { PatchPaisComponent } from './patch-pais/patch-pais.component';
import { PatchProvinciaComponent } from './patch-provincia/patch-provincia.component';
import { PostProvinciaComponent } from './post-provincia/post-provincia.component';
import { PostPaisComponent } from './post-pais/post-pais.component';
import { PostLluviaComponent } from './post-lluvia/post-lluvia.component';
import { MetodosPersonalizadosComponent } from './metodos-personalizados/metodos-personalizados.component';
import { Metodo1Component } from './metodo1/metodo1.component';
import { Metodo2Component } from './metodo2/metodo2.component';

@NgModule({
  declarations: [
    AppComponent,
    LluviaComponent,
    PaisComponent,
    ProvinciaComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DeleteLluviaComponent,
    DeletePaisComponent,
    DeleteProvinciaComponent,
    GetProvinciaComponent,
    GetPaisComponent,
    GetLluviaComponent,
    PatchLluviaComponent,
    PatchPaisComponent,
    PatchProvinciaComponent,
    PostProvinciaComponent,
    PostPaisComponent,
    PostLluviaComponent,
    MetodosPersonalizadosComponent,
    Metodo1Component,
    Metodo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

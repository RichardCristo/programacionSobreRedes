import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LluviaComponent } from './lluvia/lluvia.component';
import { LoginComponent } from './login/login.component';
import { PaisComponent } from './pais/pais.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { RegisterComponent } from './register/register.component';
import { DeleteProvinciaComponent } from './delete-provincia/delete-provincia.component';
import { PatchProvinciaComponent } from './patch-provincia/patch-provincia.component';
import { PostProvinciaComponent } from './post-provincia/post-provincia.component';
import { GetProvinciaComponent } from './get-provincia/get-provincia.component';
import { DeletePaisComponent } from './delete-pais/delete-pais.component';
import { PostPaisComponent } from './post-pais/post-pais.component';
import { GetPaisComponent } from './get-pais/get-pais.component';
import { DeleteLluviaComponent } from './delete-lluvia/delete-lluvia.component';
import { PatchLluviaComponent } from './patch-lluvia/patch-lluvia.component';
import { PostLluviaComponent } from './post-lluvia/post-lluvia.component';
import { GetLluviaComponent } from './get-lluvia/get-lluvia.component';
import { PatchPaisComponent } from './patch-pais/patch-pais.component';
import { MetodosPersonalizadosComponent } from './metodos-personalizados/metodos-personalizados.component';
import { Metodo1Component } from './metodo1/metodo1.component';
import { Metodo2Component } from './metodo2/metodo2.component';

const routes: Routes = [
  {
    path: "lluvia",
    component: LluviaComponent,
    title: "lluvia"
  },
  {
    path: "pais",
    component: PaisComponent,
    title: "pais"
  },
  {
    path: "provincia",
    component: ProvinciaComponent,
    title: "provincia"
  },
  {
    path:"home",
    component: HomeComponent,
    title: "home"
  },
  {
    path: "login",
    component: LoginComponent,
    title: "login"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "login"
  },
  {
    path: "getLluvia",
    component: GetLluviaComponent,
    title: "getLLuvia"
  },
  {
    path: "postLluvia",
    component: PostLluviaComponent,
    title: "postLluvia"
  },
  {
    path: "patchLluvia",
    component: PatchLluviaComponent,
    title: "patchLluvia"
  },
  {
    path:"deleteLluvia",
    component: DeleteLluviaComponent,
    title: "deleteLLuvia"
  },
  {
    path:"getPais",
    component: GetPaisComponent,
    title: "getPais"
  },
  {
    path:"postPais",
    component: PostPaisComponent,
    title:"postPais"
  },
  {
    path:"patchPais",
    component: PatchPaisComponent,
    title:"patchPais"
  },
  {
    path:"deletePais",
    component: DeletePaisComponent,
    title:"deletePais"
  },
  {
    path:"getProvincia",
    component: GetProvinciaComponent,
    title:"getProvincia"
  },
  {
    path:"postProvincia",
    component: PostProvinciaComponent,
    title:"postProvincia"
  },
  {
    path:"patchProvincia",
    component: PatchProvinciaComponent,
    title: "patchProvincia"
  },
  {
    path:"deleteProvincia",
    component: DeleteProvinciaComponent,
    title:"deleteProvincia"
  },
  {
    path:"metodos",
    component: MetodosPersonalizadosComponent,
    title:"metodos"
  },
  {
    path:"metodo1",
    component: Metodo1Component,
    title:"metodo1"
  },
  {
    path:"metodo2",
    component: Metodo2Component,
    title:"metodo2"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

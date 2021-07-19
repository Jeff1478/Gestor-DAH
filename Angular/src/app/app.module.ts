import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CeramicaComponent } from './components/ceramica/ceramica.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptionsComponent } from './components/modal-options/modal-options.component';
import { TipoDisComponent } from './components/tipo-dis/tipo-dis.component';
import { PlasticaComponent } from './components/plastica/plastica.component';
import { IncisoComponent } from './components/inciso/inciso.component';
import { CeramicsComponent } from './components/ceramics/ceramics.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    CeramicaComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    ModalOptionsComponent,
    TipoDisComponent,
    PlasticaComponent,
    IncisoComponent,
    CeramicsComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NgbModule,
    FormsModule,
    MomentModule,
    AngularFileUploaderModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

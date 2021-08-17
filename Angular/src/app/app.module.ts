import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
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
import { ContextoComponent } from './components/contexto/contexto.component';
import { CeramicsComponent } from './components/ceramics/ceramics.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { ExporterService } from './services/exporter';
import { FichaContextoComponent } from './components/ficha-contexto/ficha-contexto.component';
import { ReportePublicoComponent } from './components/reporte-publico/reporte-publico.component';
import { ContextoDetalleComponent } from './components/contexto-detalle/contexto-detalle.component';
import { ContextoEditComponent } from './components/contexto-edit/contexto-edit.component';
import { ContextoExcelComponent } from './components/contexto-excel/contexto-excel.component';
import { SearchContextoComponent } from './components/search-contexto/search-contexto.component';
import { PagLitComponent } from './components/pag-lit/pag-lit.component';
import { LiticoComponent } from './components/litico/litico.component';
import { FichaLiticaComponent } from './components/ficha-litica/ficha-litica.component';
import { LiticaDetalleComponent } from './components/litica-detalle/litica-detalle.component';
import { LiticaEditComponent } from './components/litica-edit/litica-edit.component';
import { LiticaExcelComponent } from './components/litica-excel/litica-excel.component';



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
    ContextoComponent,
    CeramicsComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    LandingComponent,
    FichaContextoComponent,
    ReportePublicoComponent,
    ContextoDetalleComponent,
    ContextoEditComponent,
    ContextoExcelComponent,
    SearchContextoComponent,
    PagLitComponent,
    LiticoComponent,
    FichaLiticaComponent,
    LiticaDetalleComponent,
    LiticaEditComponent,
    LiticaExcelComponent,
   
    
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatTabsModule,
    NgbModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MomentModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    AngularFileUploaderModule,
     AuthModule.forRoot({
      ...env.auth,
    }), 
    BrowserAnimationsModule,
  ],
  providers: [appRoutingProviders, ExporterService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }

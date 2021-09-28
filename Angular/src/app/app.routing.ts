// importar los modulos del router de angular 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router"

//importa componentes a los que les voy a hacer un pagina exclusiva
import { HomeComponent } from "./components/home/home.component";

import { CeramicaComponent } from "./components/ceramica/ceramica.component";
import { ContextoComponent } from "./components/contexto/contexto.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ReportePublicoComponent } from "./components/reporte-publico/reporte-publico.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";
import { FichaContextoComponent } from "./components/ficha-contexto/ficha-contexto.component";
import { ContextoDetalleComponent } from "./components/contexto-detalle/contexto-detalle.component";
import { LiticaEditComponent } from "./components/litica-edit/litica-edit.component";
import { ContextoEditComponent } from "./components/contexto-edit/contexto-edit.component";
import { ContextoExcelComponent } from "./components/contexto-excel/contexto-excel.component";
import { SearchContextoComponent } from "./components/search-contexto/search-contexto.component";
import { PagLitComponent } from "./components/pag-lit/pag-lit.component";
import { FichaLiticaComponent } from "./components/ficha-litica/ficha-litica.component";
import { LiticaDetalleComponent } from "./components/litica-detalle/litica-detalle.component";
import { LiticaExcelComponent } from "./components/litica-excel/litica-excel.component";
import { PagMetComponent } from "./components/pag-met/pag-met.component";

import { FichaMetalComponent } from "./components/ficha-metal/ficha-metal.component";
import { MetalDetalleComponent } from "./components/metal-detalle/metal-detalle.component";
import { MetalEditComponent } from "./components/metal-edit/metal-edit.component";
import { MetalExcelComponent } from "./components/metal-excel/metal-excel.component";
import { SearchLiticoComponent } from "./components/search-litico/search-litico.component";
import { SearchMetalicoComponent } from "./components/search-metalico/search-metalico.component";
import { SitioExcelComponent } from "./components/sitio-excel/sitio-excel.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PagOriComponent } from "./components/pag-ori/pag-ori.component";
import {AuthGuard} from './auth.guard';
import { SitioDetalleComponent } from "./components/sitio-detalle/sitio-detalle.component";
import { SearchCombCeraComponent } from "./components/search-comb-cera/search-comb-cera.component";
import { SearchComblitComponent } from "./components/search-comblit/search-comblit.component";
import { SearchCombMetComponent } from "./components/search-comb-met/search-comb-met.component";

//Array de rutas 
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'home', component : HomeComponent, canActivate: [AuthGuard]},
    {path: 'ceramica', component : CeramicaComponent, canActivate: [AuthGuard]},
    {path: 'contexto', component : ContextoComponent, canActivate: [AuthGuard]},
    {path: 'formulario', component : FormularioComponent, canActivate: [AuthGuard]},
    {path: 'contexto-excel', component: ContextoExcelComponent, canActivate: [AuthGuard]},
    {path: 'litica-excel', component: LiticaExcelComponent, canActivate: [AuthGuard]},
    {path: 'metal-excel', component: MetalExcelComponent, canActivate: [AuthGuard]},
    {path: 'sitio-excel', component: SitioExcelComponent, canActivate: [AuthGuard]},
    {path: 'pagina-de-pruebas', component : PaginaComponent, canActivate: [AuthGuard]},
    {path: 'peliculas', component : PeliculasComponent, canActivate: [AuthGuard]},
    {path: 'pagina', component : PaginaComponent, canActivate: [AuthGuard]},
    {path: 'pag-lit', component : PagLitComponent, canActivate: [AuthGuard]},
    {path: 'pag-met', component : PagMetComponent, canActivate: [AuthGuard]},
    {path: 'pag-ori', component : PagOriComponent, canActivate: [AuthGuard]},
    {path: 'ficha-contexto', component : FichaContextoComponent, canActivate: [AuthGuard]},
    {path: 'ficha-litica', component: FichaLiticaComponent, canActivate: [AuthGuard]},
    {path: 'ficha-metal', component: FichaMetalComponent, canActivate: [AuthGuard]},
    {path: 'pagina/ceramic/:id', component: ArticleComponent, canActivate: [AuthGuard]},
    {path: 'peliculas/contexto/:id', component: ContextoDetalleComponent, canActivate: [AuthGuard]},
    {path: 'pag-lit/litico/:id', component: LiticaDetalleComponent, canActivate: [AuthGuard]},
    {path: 'pag-met/metalico/:id', component: MetalDetalleComponent, canActivate: [AuthGuard]},
    {path: 'pag-ori/sitio/:id', component: SitioDetalleComponent, canActivate: [AuthGuard]},
    {path: 'reporte-publico/ceramic/:id', component: ReportePublicoComponent, canActivate: [AuthGuard]},
    {path: 'pagina/crear', component: ArticleNewComponent, canActivate: [AuthGuard]},
    {path: 'pagina/editar/:id', component: ArticleEditComponent, canActivate: [AuthGuard]},
    {path: 'peliculas/editar/:id', component: ContextoEditComponent, canActivate: [AuthGuard]},
    {path: 'pag-lit/editar/:id', component: LiticaEditComponent, canActivate: [AuthGuard]},
    {path: 'pag-met/editar/:id', component: MetalEditComponent, canActivate: [AuthGuard]},
    {path: 'buscar/:search', component : SearchComponent, canActivate: [AuthGuard]},
    {path: 'buscarcombcera/:search', component : SearchCombCeraComponent, canActivate: [AuthGuard]},
    {path: 'buscarcomblit/:search', component : SearchComblitComponent, canActivate: [AuthGuard]},
    {path: 'buscarcombmet/:search', component : SearchCombMetComponent, canActivate: [AuthGuard]},
    {path: 'buscarcontexto/:search',component : SearchContextoComponent, canActivate: [AuthGuard]},
    {path: 'buscarlitico/:search', component: SearchLiticoComponent, canActivate: [AuthGuard]},
    {path: 'buscarmetalico/:search', component: SearchMetalicoComponent, canActivate: [AuthGuard]},
  
    {path: '**', component : ErrorComponent}
];

//Exportar Modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
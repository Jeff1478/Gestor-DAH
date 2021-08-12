// importar los modulos del router de angular 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router"

//importa componentes a los que les voy a hacer un pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { LandingComponent } from "./pages/landing/landing.component";
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
import { ContextoEditComponent } from "./components/contexto-edit/contexto-edit.component";
import { ContextoExcelComponent } from "./components/contexto-excel/contexto-excel.component";

//Array de rutas 
const appRoutes: Routes = [
    {path: '', component : LandingComponent},
    {path: 'home', component : HomeComponent},
    {path: 'ceramica', component : CeramicaComponent},
    {path: 'contexto', component : ContextoComponent},
    {path: 'formulario', component : FormularioComponent},
    {path: 'contexto-excel', component: ContextoExcelComponent},
    {path: 'pagina-de-pruebas', component : PaginaComponent},
    {path: 'peliculas', component : PeliculasComponent},
    {path: 'pagina', component : PaginaComponent},
    {path: 'ficha-contexto', component : FichaContextoComponent},
    {path: 'pagina/ceramic/:id', component: ArticleComponent},
    {path: 'peliculas/contexto/:id', component: ContextoDetalleComponent},
    {path: 'reporte-publico/ceramic/:id', component: ReportePublicoComponent},
    {path: 'pagina/crear', component: ArticleNewComponent},
    {path: 'pagina/editar/:id', component: ArticleEditComponent},
    {path: 'peliculas/editar/:id', component: ContextoEditComponent},
    {path: 'buscar/:search', component : SearchComponent},
    {path: '**', component : ErrorComponent}
];

//Exportar Modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
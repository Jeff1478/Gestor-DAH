'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' : 'data-bs-target="#xs-components-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' :
                                            'id="xs-components-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticleEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArticleNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleNewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticationButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CeramicaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CeramicaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CeramicsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CeramicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContextoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContextoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContextoDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContextoDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContextoEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContextoEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContextoExcelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContextoExcelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardEstadisticasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardEstadisticasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaContextoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaContextoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaLiticaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaLiticaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaMetalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaMetalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FichaOrigenesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FichaOrigenesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiticaDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiticaDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiticaEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiticaEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiticaExcelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiticaExcelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiticoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiticoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapaOrigenesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapaOrigenesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetalDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetalDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetalEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetalEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetalExcelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetalExcelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetalicoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetalicoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagDetalleLiteSitioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagDetalleLiteSitioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagLitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagLitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagLiteSitioNombreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagLiteSitioNombreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagLiteSitiosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagLiteSitiosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagMetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagMetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagOriComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagOriComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeliculasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeliculasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlasticaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlasticaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoliticasUsoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoliticasUsoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopupOrigenesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopupOrigenesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopupPerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopupPerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroOrigenesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroOrigenesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportePublicoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportePublicoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchCombCeraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchCombCeraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchCombMetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchCombMetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComblitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComblitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchContextoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchContextoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchLiticoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchLiticoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchMetalicoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchMetalicoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchSitioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchSitioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitioDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitioDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitioEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitioEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitioExcelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitioExcelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoDisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoDisComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' :
                                        'id="xs-injectables-links-module-AppModule-3777ffe00df4ca0e2b57f5c1d5f5238946e256d7e9b33d31e7170672fe9b52cbac30722c94ba981edd2f0b061e7e4de13dd3a5ec4ef1139c1fc481287a28d682"' }>
                                        <li class="link">
                                            <a href="injectables/ExporterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExporterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Ceramic.html" data-type="entity-link" >Ceramic</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contexto.html" data-type="entity-link" >Contexto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Litico.html" data-type="entity-link" >Litico</a>
                            </li>
                            <li class="link">
                                <a href="classes/Metalico.html" data-type="entity-link" >Metalico</a>
                            </li>
                            <li class="link">
                                <a href="classes/Registro.html" data-type="entity-link" >Registro</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sitio.html" data-type="entity-link" >Sitio</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CeramicService.html" data-type="entity-link" >CeramicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContextoService.html" data-type="entity-link" >ContextoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExporterService.html" data-type="entity-link" >ExporterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link" >HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImgService.html" data-type="entity-link" >ImgService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiticoService.html" data-type="entity-link" >LiticoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetalicoService.html" data-type="entity-link" >MetalicoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfilService.html" data-type="entity-link" >PerfilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegistroService.html" data-type="entity-link" >RegistroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestService.html" data-type="entity-link" >RestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScriptService.html" data-type="entity-link" >ScriptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SitioService.html" data-type="entity-link" >SitioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptorService.html" data-type="entity-link" >TokenInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link" >AuthGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Scripts.html" data-type="entity-link" >Scripts</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
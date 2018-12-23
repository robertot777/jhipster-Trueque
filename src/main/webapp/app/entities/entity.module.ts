import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTruequeProductoModule } from './producto/producto.module';
import { JhipsterTruequeImagenModule } from './imagen/imagen.module';
import { JhipsterTruequeTruequeModule } from './trueque/trueque.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterTruequeProductoModule,
        JhipsterTruequeImagenModule,
        JhipsterTruequeTruequeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTruequeEntityModule {}

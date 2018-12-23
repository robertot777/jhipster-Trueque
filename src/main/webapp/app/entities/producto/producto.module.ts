import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterTruequeSharedModule } from 'app/shared';
import { JhipsterTruequeAdminModule } from 'app/admin/admin.module';
import {
    ProductoComponent,
    ProductoDetailComponent,
    ProductoUpdateComponent,
    ProductoDeletePopupComponent,
    ProductoDeleteDialogComponent,
    productoRoute,
    productoPopupRoute
} from './';

const ENTITY_STATES = [...productoRoute, ...productoPopupRoute];

@NgModule({
    imports: [JhipsterTruequeSharedModule, JhipsterTruequeAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProductoComponent,
        ProductoDetailComponent,
        ProductoUpdateComponent,
        ProductoDeleteDialogComponent,
        ProductoDeletePopupComponent
    ],
    entryComponents: [ProductoComponent, ProductoUpdateComponent, ProductoDeleteDialogComponent, ProductoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTruequeProductoModule {}

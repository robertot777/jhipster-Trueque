import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterTruequeSharedModule } from 'app/shared';
import {
    TruequeComponent,
    TruequeDetailComponent,
    TruequeUpdateComponent,
    TruequeDeletePopupComponent,
    TruequeDeleteDialogComponent,
    truequeRoute,
    truequePopupRoute
} from './';

const ENTITY_STATES = [...truequeRoute, ...truequePopupRoute];

@NgModule({
    imports: [JhipsterTruequeSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TruequeComponent,
        TruequeDetailComponent,
        TruequeUpdateComponent,
        TruequeDeleteDialogComponent,
        TruequeDeletePopupComponent
    ],
    entryComponents: [TruequeComponent, TruequeUpdateComponent, TruequeDeleteDialogComponent, TruequeDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTruequeTruequeModule {}

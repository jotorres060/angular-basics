import { NgModule } from '@angular/core';
import { AccumulateComponent } from './accumulate/accumulate.component';

@NgModule({
    declarations: [
        AccumulateComponent
    ],
    exports: [
        AccumulateComponent
    ]
})
export class AccumulateModule { }
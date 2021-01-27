import { Component } from '@angular/core';

@Component({
    selector: 'app-accumulate',
    template: `
        <div>
            <h1>{{ title }}</h1>
            <hr>
            
            <h3>Base {{ base }}</h3>

            <button (click)="accumulate(base)">+ {{ base }}</button>
            <span>{{ num }}</span>
            <button (click)="accumulate(-base)">- {{ base }}</button>
        </div>
    `
})
export class AccumulateComponent {

    public title: string = 'Accumulate App';
    public num: number = 10;
    public base: number = 5;

    public accumulate(value: number) {
        this.num += value;
    }

}

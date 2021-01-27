import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 38;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }
    
    public getInfo(): string {
        return `${ this.name } - ${ this.age }`;
    }

    public changeHero(): void {
        this.name = 'Spiderman';
    }

    public changeAge(): void {
        this.age = 30;
    }

}
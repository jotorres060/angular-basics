import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  public heroes: string[] = ['Ironman','Spiderman','Hulk','Thor','Captain America'];
  public deletedHero: string = '';

  public deleteHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }

}

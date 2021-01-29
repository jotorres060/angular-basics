import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  constructor(private _dbzService: DbzService) { }

  public add(): void {
    if (this.newCharacter.name.trim().length == 0) {
      return;
    }

    this._dbzService.add(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0
    };
  }

}

import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  constructor(private _dbzService: DbzService) { }

  get characters(): Character[] {
    return this._dbzService.characters;
  }

}

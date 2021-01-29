import { Injectable } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _characters: Character[]= [
        {
            name: 'Gokú',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ];

    constructor() {
        console.log('DBZ Service initialized!');
    }

    get characters(): Character[] {
        return [...this._characters];
    }

    public add(character: Character): void {
        this._characters.push(character);
    }

}
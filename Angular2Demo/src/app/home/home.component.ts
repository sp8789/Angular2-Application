import { Component } from '@angular/core';
import { UserPreferncesService } from '../Employee/userPreferences.service';
@Component({
    template: `<h1>This is the homepage.</h1>
               <div>
                    Colour Preference:
                    <input type="text" [(ngModel)]='colour' [style.background]='colour' />
                </div>
                `
})
export class HomeComponent {
    constructor(private _userPrefereceService: UserPreferncesService) {
    }

    get colour(): string {
        return this._userPrefereceService.colourPreference;
    }
    set colour(value: string) {
        this._userPrefereceService.colourPreference = value;
    }
}
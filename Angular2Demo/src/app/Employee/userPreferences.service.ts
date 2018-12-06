import { Injectable } from '@angular/core'

@Injectable()
export class UserPreferncesService {
    constructor() {
        console.log('New instance of service created.');
    }
    colourPreference: string = "Orange";
}
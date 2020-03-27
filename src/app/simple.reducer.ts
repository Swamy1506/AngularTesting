
import { Action } from '@ngrx/store';

const defaultStr = 'Hello World';

export function simpleReducer(state: string = defaultStr, action: Action) {

    console.log('Initial ' + state + ' action type ' + action.type);

    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola mundo - spanish';
        case 'FRENCH':
            return state = 'Bonjour le monde - french';
        default:
            return defaultStr;
    }
}

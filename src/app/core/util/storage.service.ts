import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    static setItem(key, value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            return false;
        }
    }

    static getItem(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    static removeItem(key) {
        window.localStorage.removeItem(key);
    }
}

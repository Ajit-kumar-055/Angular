import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  sayHello() {
    console.log('Hello Angular');
  }
}

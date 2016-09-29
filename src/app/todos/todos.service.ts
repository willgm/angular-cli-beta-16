import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  constructor() { }

  getAll() {
    return Promise.resolve([
    ]);
  }

}

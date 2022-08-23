import * as uuid from 'uuid';

export class Uuid {

  value: string;

  constructor() {
    this.value = uuid.v4();
  }
}

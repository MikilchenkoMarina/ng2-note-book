export class Note {
  id: number;
  title: string = '';
  text: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

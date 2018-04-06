export class Source {
  uri: Object;
  constructor (public name: string, public url: string, public description: string, public categories: string[]) {
    this.uri = {"sourceURi":this.url};
  }
}

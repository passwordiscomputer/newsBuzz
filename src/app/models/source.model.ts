export class Source {
  uri: Object;
  constructor (public name: string, public url: string, public categories: string[]) {
    this.uri = {"sourceUri":this.url};
  }
}

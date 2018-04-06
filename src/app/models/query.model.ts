export class Query {
  sources: [];

  constructor (public sourceUrls: string[], public categories: string[], public keywords: string[]) { }

  params = {"$query":{"$and":[{"keyword":{"$and":this.keywords}},{"categoryUri":{"$and":this.categories}},{"$or":this.sources},{"lang":"eng"}]},"$filter":{}};
}

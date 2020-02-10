export class NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
  urlsToLogos: { small: string; medium: string; large: string };
  sortBysAvailable: string[];
  constructor(
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string,
    urlsToLogos: { small: string; medium: string; large: string },
    sortBysAvailable: string[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.category = category;
    this.language = language;
    this.country = country;
    this.urlsToLogos = urlsToLogos;
    this.sortBysAvailable = sortBysAvailable;
  }
}

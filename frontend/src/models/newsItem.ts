export class NewsItem {
  id: string;
  image: string;
  content: string;
  date: Date;

  constructor(id: string, image: string, content: string, date: Date) {
    this.id = id;
    this.image = image;
    this.content = content;
    this.date = date;
  }
}

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BookFormComponent extends Component {
  @service store;

  title = null;
  isbn = null;
  publishDate = null;
  author = null;

  constructor() {
    super(...arguments);

    this.title = this.args.book.title;
    this.isbn = this.args.book.isbn;
    this.publishDate = this.args.book.publishDate;
    this.author = this.args.book.author;
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query } });
  }

  @action
  submitChanges(ev) {
    ev.preventDefault();

    this.args.onsubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author,
    });
  }

  @action
  updatePublishDate(event) {
    this.publishDate = event.target.value;
  }
}

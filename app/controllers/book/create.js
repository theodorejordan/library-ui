import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { set } from '@ember/object';

export default class BookCreateController extends Controller {
  @service store;

  @action
  saveBook(attrs) {
    const book = this.store.createRecord('book', attrs);

    book.save().then(() => {
      this.transitionToRoute('book');
    });
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { filter: { query: query } });
  }

  @action
  updatePublishDate(event) {
    set(this.model, 'publishDate', event.target.value);
  }
}

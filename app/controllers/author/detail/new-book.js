import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AuthorDetailNewBookController extends Controller {
  @service store;

  @tracked publishDate = null;

  @action
  updatePublishDate(value) {
    this.publishDate = value.target.value;
  }

  @action
  saveBook(ev) {
    ev.preventDefault();

    this.model.book.publishDate = this.publishDate;
    let book = this.store.createRecord('book', this.model.book);

    book.save().then(() => {
      this.transitionToRoute('author.detail', this.model.author.id);
    });
  }
}

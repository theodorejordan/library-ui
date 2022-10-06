import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookEditController extends Controller {
  @action
  saveBook(attrs) {
    this.model.setProperties(attrs);

    this.model.save().then(() => {
      this.transitionToRoute('book.detail', this.model.id);
    });
  }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AuthorCreateController extends Controller {
  @service store;
  reset() {
    this.setProperties({
      first: '',
      last: '',
    });
  }

  @action
  saveAuthor(ev) {
    ev.preventDefault();

    let author = this.store.createRecord('author', this.model);

    author.save().then(() => {
      this.transitionToRoute('author');
    });
  }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorEditController extends Controller {
  @action
  saveAuthor(formValues) {
    this.model.setProperties(formValues);

    this.model.save().then(() => {
      this.transitionToRoute('author');
    });
  }
}

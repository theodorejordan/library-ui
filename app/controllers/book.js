import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookController extends Controller {
  @tracked search = '';

  @action
  updateSearch(event) {
    this.search = event.target.value;
  }
}

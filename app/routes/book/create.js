import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BookCreateRoute extends Route {
  @service store;
  model() {
    return {
      title: '',
      isbn: '',
      publishDate: null,
      author: null,
    };
  }
}

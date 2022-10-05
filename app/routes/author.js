import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthorRoute extends Route {
  @service store;

  queryParams = {
    search: {
      refreshModel: true
    }
  }

  model({ search }) {
    if (search) {
      return this.store.query('author', {
        filter: {
          query: search,
        },
      });
    }
    
    return this.store.findAll('author');
  }
}

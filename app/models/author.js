import Model, { attr } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr() first;
  @attr() last;
}

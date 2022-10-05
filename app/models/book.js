import Model, { attr, belongsTo } from '@ember-data/model';
import DS from 'ember-data';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') isbn;
  @attr('string') publishDate;

  @belongsTo('author') author;
}

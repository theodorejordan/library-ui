import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') isbn;
  @attr('string') publishDate;

  @belongsTo('author') author;
  @hasMany('review') reviews;
}

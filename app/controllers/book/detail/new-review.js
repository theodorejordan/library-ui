import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BookDetailNewReviewController extends Controller {
    @service store;

    @action
    saveReview(attr) {
        let review = this.store.createRecord('review', attr);

        review.save().then(
            () => {
                this.transitionToRoute('book.detail', this.model.book.id);
            }
        )
    }
}

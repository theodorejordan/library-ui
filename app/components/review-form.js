import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReviewFormComponent extends Component {
    user = "";
    body = "";
    book = null;

    constructor() {
        super(...arguments);

        this.user = this.args.review.user;
        this.body = this.args.review.body;
        this.book = this.args.review.book;
    }

    @action
    submitChanges(ev) {
        ev.preventDefault();

        this.args.onsubmit({
            user: this.user,
            body: this.body,
            book: this.book,
        });
    }
}

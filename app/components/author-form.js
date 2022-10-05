import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthorFormComponent extends Component {
  first = null;
  last = null;

  constructor() {
    super(...arguments);

    this.first = this.args.author.first;
    this.last = this.args.author.last;
  }

  @action
  submitChanges(ev) {
    ev.preventDefault();

    console.log(this.args);

    this.args.onsubmit({
      first: this.first,
      last: this.last,
    });
  }
}

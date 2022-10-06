import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class NewAuthorModalComponent extends Component {
  @service store;
  @tracked showModal = false;

  @tracked author = {
    first: '',
    last: '',
  };

  @action
  updateModal(value) {
    this.showModal = value;
  }

  @action
  save(ev) {
    ev.preventDefault();

    console.log(this.author);

    let author = this.store.createRecord('author', this.author);

    author.save().then(() => {
      this.showModal = false;

      this.args.onsave(author);
    });
  }
}

import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onInputChange = event => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  // onFormSubmit = event => {
  //   event.preventDefault();
  //   // this.setState(({ contacts, name }) => {
  //   //   return { contacts: [...contacts, { name, id: nanoid() }] };
  //   // });
  // };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

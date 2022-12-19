import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.props.onSubmit(newContact);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputChange}
          />
        </label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onInputChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

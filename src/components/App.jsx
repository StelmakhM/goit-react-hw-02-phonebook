import { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState(({ contacts, name, number }) => {
      return {
        contacts: [...contacts, { name, number, id: nanoid() }],
      };
    });
  };

  onSearchInputChange = searchQuery => {
    this.setState({ filter: searchQuery });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            {' '}
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInputChange}
            />
          </label>{' '}
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
        <ul>
          <p>Contacts</p>
          <input
            type="text"
            name="filter"
            onChange={e => {
              this.onSearchInputChange(e.target.value);
            }}
          />
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';

export default class ContactList extends Component {
  render() {
    return (
      <ul>
        <ContactItem />
      </ul>
    );
  }
}

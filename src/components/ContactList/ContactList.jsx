import PropTypes from 'prop-types';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}, {number}
            <button onClick={() => deleteContact(id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

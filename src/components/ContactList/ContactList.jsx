export default function ContactList({ contacts }) {
  return (
    <>
      <p>Contacts</p>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}, {number}
          </li>
        ))}
      </ul>
    </>
  );
}

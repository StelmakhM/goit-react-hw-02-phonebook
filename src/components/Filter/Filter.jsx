import PropTypes from 'prop-types';

export default function Filter({ searchContact, filterValue }) {
  return (
    <input
      type="text"
      name="filter"
      onChange={e => searchContact(e)}
      value={filterValue}
    />
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  searchContact: PropTypes.func.isRequired,
};

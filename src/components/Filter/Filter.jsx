export default function Filter({ onSearch }) {
  return (
    <input
      type="text"
      name="filter"
      onChange={e => {
        onSearch(e.target.value);
      }}
    />
  );
}

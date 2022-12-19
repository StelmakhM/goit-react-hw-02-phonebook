export default function ContactItem({ data }) {
  console.log(data);
  return (
    <li>
      {data.name}
      {data.number}
    </li>
  );
}

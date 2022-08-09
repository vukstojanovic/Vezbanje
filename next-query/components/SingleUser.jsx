export default function SingleUser({ name, description }) {
  return (
    <div className="single-user">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

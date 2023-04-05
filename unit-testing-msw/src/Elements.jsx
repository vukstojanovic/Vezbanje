export default function Elements() {
  let a = 3;
  let b = 2;

  return (
    <div>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <h1 data-testid="heading1">Hello</h1>
      <span title="span">{3 + 2}</span>
    </div>
  );
}

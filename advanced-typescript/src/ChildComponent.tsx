interface ChildProps {
  text: string;
  name?: string;
  date?: string;
  age?: number;
}

export default function ChildComponent({ text, name, ...rest }: ChildProps) {
  console.log(rest);
  return <div>Child component {text}</div>;
}

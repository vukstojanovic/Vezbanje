import { useAppContext } from "../context";

export default function SingleChild() {
  const { user, setUser } = useAppContext();
  return <div>This is a single child component. User: {String(user)}</div>;
}

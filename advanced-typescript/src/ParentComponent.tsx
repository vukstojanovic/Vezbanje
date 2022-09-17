import { PropsWithChildren } from "react";

export default function ParentComponent({ children }: PropsWithChildren<{}>) {
  return <div>{children}</div>;
}

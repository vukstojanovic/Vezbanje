import { PropsWithChildren } from "react";

export default function PageContainer({ children }: PropsWithChildren<{}>) {
  return <div style={{ padding: "20px" }}>{children}</div>;
}

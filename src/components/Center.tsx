import { PropsWithChildren } from "react";

function Center({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
export default Center;

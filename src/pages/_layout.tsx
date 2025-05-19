import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return <div>{children}</div>;
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};

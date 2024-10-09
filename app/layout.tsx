import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/navbar/Nav";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="bg-primary text-white">
          <section>
            <Nav />

            <main>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}

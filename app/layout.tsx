import "@measured/puck/dist/index.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}

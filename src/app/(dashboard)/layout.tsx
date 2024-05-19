import { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Providers } from "../providers";
import "../globals.scss";
import ContentComponent from "./ContentComponent";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "dashboard",
  description: "admin dashboard",
};

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ar'>
      <body className={cairo.className}>
        <Providers>
          <ContentComponent>
            {children}
          </ContentComponent>
        </Providers>
      </body>
    </html>
  );
}

export default layout;

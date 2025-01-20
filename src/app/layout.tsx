import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({ subsets: ['latin'],
  weight: ['400', '500', '600']

})
export const metadata: Metadata = {
  title: "Lucas Gomes",
  description: "Me chamo Lucas e esse é meu portfólio. Confira habilidades como Python, Django, TS, Saas, Java, Spring e alguns projetos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter}`}>
        {children}
      </body>
    </html>
  );
}

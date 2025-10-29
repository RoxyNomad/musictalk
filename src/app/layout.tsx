import Navbar from "@/components/Navbar/navbar";
import "./globals.scss";

export const metadata = {
  title: "Musiktalk",
  description: "Forum und Podcast Plattform für Musiker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

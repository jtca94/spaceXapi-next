import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "SpaceX Launches Next.js Starter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

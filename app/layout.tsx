import MainHeader from "@/components/main-header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MainHeader />
      <body>{children}</body>
    </html>
  );
}

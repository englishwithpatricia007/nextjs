
import "./globals.css";
import { Header } from  '../components/header'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com o professor Matheus Fraga',
  openGraph: {
    title: 'Home - Aula Next JS do zero! Sujeito Programador',
    description: 'Aprendendo Next JS do zero com o Sujeito Programador',
    images: ['https://www.example.com/image.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children} // This is where the page content will be rendered
      </body>
    </html>
  );
}

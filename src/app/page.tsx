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

export const revalidate = 60; // 1 minute

export default function Home() {

  const randomNumber = Math.random() * 7;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold">
        Página Home
      </h1>
    </div>
  )
}
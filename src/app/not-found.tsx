import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24">
            <h1 className="text-4xl font-bold mt-9 text-6xl">Página não encontrada</h1>
            <Link href='/' className="mt-4 text-blue-500 hover:underline">
                Voltar para a Home
            </ Link>
        </div>
    )
}
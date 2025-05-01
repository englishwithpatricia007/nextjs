import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./components/post";

export default async function DetailPost({ params }: { params: { id: string } }) {

    const { id } = await params;

    return (
        <div className="text-center">
            <h1>Detalhes do Post {id}</h1>
            <Suspense fallback={<h1 className="text-4xl font-bold">Carregando...</h1>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
}
import { PostProps } from "../../page"

export async function PostInfo({id} : {id: string}) {

    await new Promise((resolve) => setTimeout(resolve, 4000)) // Simula um delay de 4 segundos
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data : PostProps = await response.json()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24 ">
            <h2>{data.title}</h2>
            <h2>{data.body}</h2>
            <h2>{data.userId}</h2>
        </div>
    )
}
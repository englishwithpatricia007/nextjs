import Button from "@/components/button";
import Link from "next/link";
import { cache } from "react";

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export const revalidate = 60; // 1 minute


//SERVER COMPONENT
export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()


    async function handleFetchPosts() {
        'use server'
        const response = await fetch('https://dummyjson.com/posts', {cache : 'force-cache',
            next: {
                revalidate: 3600, // 1 hour
            }
        })
        const data: ResponseProps = await response.json()

        console.log(data.posts)
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'
        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json()

        console.log(data)
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24 ">
            <h1 className="text-4xl font-bold">
                Todos os Posts
            </h1>

            <Button />

            <button onClick={handleFetchPosts} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Server Actions - Interactivity
            </button>

            <form 
                className="flex gap-2 my-4"
                action={handleSearchUsers}
            >
                <input 
                    type="text"
                    placeholder="ID do usuário"
                    className="border border-gray-200 p-2" 
                    name='userId'
                />
                <button 
                    className="bg-blue-500 text-white p-2" 
                    type="submit"
                >
                    Buscar Usuário
                </button>
            </form>

            <div className="flex flex-col gap-4 mt-4">
                {data.posts.map((post) => (
                    <div key={post.id} className="p-4 border rounded shadow-md">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                        Acessar detalhes do post
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
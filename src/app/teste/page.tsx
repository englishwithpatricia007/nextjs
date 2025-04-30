'use client';

import { useEffect, useState } from "react";

export default function Teste() {


    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24">
            <h1 className="text-4xl font-bold">
                Página Cliente
            </h1>

            <button onClick={() => alert("TESTE")}>TESTE</button>

            <div className="flex flex-col gap-4 mt-4">
                {posts.map((post: any) => (
                    <div key={post.id} className="p-4 border rounded shadow-md">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
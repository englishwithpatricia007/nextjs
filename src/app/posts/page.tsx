import Button from "@/components/button";

interface PostProps {
    id: number;
    title: string;  
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

//SERVER COMPONENT
export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()  

    console.log(data.posts)


    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-24">
            <h1 className="text-4xl font-bold">
                Todos os Posts
            </h1>
            
            <Button /> 
            
            <div className="flex flex-col gap-4 mt-4">
                {data.posts.map((post) => ( 
                    <div key={post.id} className="p-4 border rounded shadow-md">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
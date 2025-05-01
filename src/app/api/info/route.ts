export async function GET(request: Request) {
    return Response.json({
        name: 'Next.js 13.4',
        version: '13.4.0',
        description: 'Next.js 13.4 with TypeScript and Tailwind CSS',

    })
}
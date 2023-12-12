export function GET(requestEvent) {
    console.log("hello")
    console.log(requestEvent)
     return new Response('Hello from the demo API')
}


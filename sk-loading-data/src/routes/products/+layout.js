export const load = async (loadEvent) => {
    const {fetch,parent} = loadEvent
    const parentData = await parent()
    const {username} = parentData
    console.log("hello"+username) 
    console.log(username)
    const title = "Featured products"
    const response = await fetch("http://localhost:4000/featured-products")
    const featuredProducts = await response.json()

    return {
        username,
        title, 
        featuredProducts
    }
}
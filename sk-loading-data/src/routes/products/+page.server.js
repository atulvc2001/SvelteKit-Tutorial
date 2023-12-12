export const load = async (serverLoadEvent) => {
    console.log('load function called in page.server.js')
    const {fetch} = serverLoadEvent
    // const parentData = parent()
    // const username = parentData
    // console.log(parentData)
    const title = "List of available Products (this is from page.js)"
    const response = await fetch("http://localhost:4000/products")
    const products = response.json()
    // console.log(products)
    return {
        title,
        products
    }
}


// export const prerender = true

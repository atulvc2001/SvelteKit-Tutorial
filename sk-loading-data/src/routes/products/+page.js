import Product from './product.svelte'
// we are using universal load function becuase the server load function cannot return a constructor or the below component in this case.

export const load = async (loadEvent) => {
    console.log('load function called in page.js')
    const {data,parent} = loadEvent
    const notification = 'End of season sale!'
    const parentData = await parent()
    const {username} = parentData
    console.log("hello ") 
    // const title = "List of available Products (this is from page.js)"
    // const response = await fetch("http://localhost:4000/products")
    // const products = response.json()
    // console.log(data)
    return {
        username,
        ...data,
        Component: Product,
        notification
    }
}

// export const ssr = false;
// export const csr = true;

export const prerender = true
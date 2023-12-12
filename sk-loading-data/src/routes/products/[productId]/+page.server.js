// Route, params, productId, URL, routeID
import {redirect} from '@sveltejs/kit'

export const load = async (serverLoadEvent) => {
    const {fetch,params,url,route} = serverLoadEvent;
    console.log({params,url,route:route.id})
    const { productId } = params;
    const notification = 'End of season sale and 50% off!'
    if(productId > 3) {
    //     throw error(404,{
    //         message: 'Product not found',
    //         hint: 'Try a different product'
    // })
        throw redirect(307,'/products')
    }

    const title = 'product details';
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json()
    return {
        title,
        product,
        notification
    }
}

// export const prerender = true
export const prerender = 'auto'

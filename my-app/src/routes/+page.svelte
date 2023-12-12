<!-- Anchor tag navigation -->
<script>
    import { goto,beforeNavigate,afterNavigate } from '$app/navigation'
    // export let productsId = 100
    const handleClick = () => {
        console.log("placing your order kiddo")
        goto('/products')
    };

    beforeNavigate((navigation) => {
        console.log({before: navigation})
    });
    afterNavigate((navigation) => {
        console.log({after: navigation})
    });
</script>

<h1>Hello world</h1>

<!-- <h1>products page</h1>
<h2><a href="/products/1">product 1</a></h2>
<h2><a href="/products/2">product 2</a></h2>
<h2><a href={`/products/${productsId}`}>product {productsId}</a></h2>
 -->

 <a href="/blog">Blog</a>
 <a href="/products">Products</a>

 <button on:click={handleClick}>place your order</button>
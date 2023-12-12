<script>
    export let data
    const title = data.title
    const featuredProducts = data.featuredProducts
    const username = data.username
</script>
<!-- this is the layout data file -->
<slot />
{#each featuredProducts as product}
<div class="product-item">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
</div>
{/each}

<h1>{title} for {username}</h1>
<style>
    .product-item {
        display: inline-block;
        width: 200px;
        margin: 10px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
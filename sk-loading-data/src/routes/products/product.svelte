<script>
    export let product;
</script>

<a href={`/products/${product.id}`}>
    <h1>{product.title}</h1>
</a>

<p>{product.description}</p>
<hr />
<script>
    import {goto,preloadData} from '$app/navigation'
// preloadCode will preloadCode instead of data
    export let data
</script>

<h1 class="tall">Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- <a href="/products" data-sveltekit-preload-data="off">Link to the products file</a> -->
<!-- <a href="/products" data-sveltekit-preload-code="code">Link to the products file</a> -->
<!-- <a href="/products" data-sveltekit-reload>Link to the products file</a> -->
<!-- <a href="/products" data-sveltekit-noscroll>Link to the products file</a> this preserves the scroll state of the page-->
<!-- some other parameters in preload-code are : 
    eager : will load immediately
    viewport :  will load when the link is in view
-->

<a href="/products" >Link to the products file</a>

<button 
    on:focus={async ()=>{
        await preloadData('/products')
    }}
    on:mouseover={async ()=>{
        await preloadData('/products')
    }}
    on:click={()=>{
    goto('/products')
}}>
go to Products page
</button>

<style>
    /* .tall{
        height: 100vh;
    } */
</style>
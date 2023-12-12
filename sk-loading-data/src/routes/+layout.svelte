<script>
    import {page} from '$app/stores'
    export let data
    const {username} = data
</script>
<!-- this is to access data from child layout to parent layour ($page.data.notification)  -->

<svelte:head>
    <title>
        {$page.data.title || 'Codevolution'}
    </title>
</svelte:head>

{#if $page.data.notification}
    <p>{$page.data.notification}</p>
{/if}
<div>Welcome, {username}</div>
<slot />
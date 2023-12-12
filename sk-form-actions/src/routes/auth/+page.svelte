<script>
    
    // let username = '';
    // let password = '';
    // let message = '';
    // const handleSubmit = async () => {
    //     message = ''
    //     const response = await fetch('/auth',{
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username,
    //             password
    //         })
    //     });
    //     const data = await response.json();
    //     message = data.message;
    // };
    import {page} from '$app/stores'
    import {enhance} from '$app/forms'
    export let form;
    const redirectTo = $page.url.searchParams.get('redirectTo') || '/'
</script>

<!-- <form on:submit|preventDefault={handleSubmit}> -->
<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder='Username' value={form?.username ?? ''}/>
    <!-- bind:{username} was an argument in form actions episode 47 -->
    <input type="password" name="password" placeholder='Password' />
    <!-- bind:{password} was an argument in form actions episode 47 -->
    <button type="submit">Login</button>
    <button formaction="?/register&redirectTo={redirectTo}">Register</button>
</form>
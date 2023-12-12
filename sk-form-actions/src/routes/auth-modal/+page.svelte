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
    export let form;
</script>

<!-- <form on:submit|preventDefault={handleSubmit}> -->
<form method="post" action="/auth?/login">
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder='Username' />
    <!-- bind:{username} was an argument in form actions episode 47 -->
    <input type="password" name="password" placeholder='Password' />
    <!-- bind:{password} was an argument in form actions episode 47 -->
    <button type="submit">Login</button>
    <button formaction="/auth?/register">Register</button>
</form>
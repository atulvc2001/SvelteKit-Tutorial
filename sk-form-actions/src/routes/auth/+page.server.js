import {fail,redirect} from '@sveltejs/kit'
// export const load = () => {

// }

// Default Form actions send data to the server even if there is no client side javascript

export const actions = {
    login: async ({request,cookies, url}) => {
        const data = await request.formData(); 
        const username = data.get('username')
        const password = data.get('password')
        if (!username || !password){
            return fail(400, {
                username,
                message: "Missing username or password"
            })
        }
        cookies.set('username',username,{path:'/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    },
    register: async ({request,cookies,url}) => {
        const data = await request.formData(); 
        const username = data.get('username')
        const password = data.get('password')
        if (!username || !password){
            return fail(400, {
                username,
                message: "Missing username or password"
            })
        }
        cookies.set('username',username,{path:'/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/')
    }      
}
import {PUBLIC_BASE_URL} from '$env/static/public'
import { secretKey } from '$lib/server/secrets'
export const load = () => {
    // console.log(`Connecting to database with username ${DB_USER} and password ${DB_PASSWORD}`)
    console.log(secretKey)
    console.log(`Base url ${PUBLIC_BASE_URL}`)
    return {}
}       
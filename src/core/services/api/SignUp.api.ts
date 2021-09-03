
import http from '../interceptor/Interceptor';
import { setItem } from '../storage/storage';
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

interface signUpUserProps{
    fullname: string,
    password: string,
    number: string,
    age: number | null,
    email: string,}
const signUpUser = async (value: signUpUserProps) => {
    try {
        const res:any = await http.post(API_URL + 'Register/register', value)
        return res.data
    } catch (err) {
        console.log(err)
        return null
    }
    
}
export {signUpUser}
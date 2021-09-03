import http from '../interceptor/Interceptor';
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

interface editProps{
    
        
        fullname: string,
        number: string,
        age: number | null,
        password:string,
        email: string,
        
}

const editUser= async (value:editProps , userId:string) => {
try {
        const res = await http.put(API_URL +'UpdateUser/'+ userId , value)
        return res.data
    } catch (err) {
    console.log(err)
    return null
    
}
}
export {editUser}
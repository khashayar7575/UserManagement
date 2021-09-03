import http from '../interceptor/Interceptor';
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

const GetAllUsers = async() => {
    try {
        const res = await http.get(API_URL + "GetAllUsers")
        return res.data    
    } catch (err) {
        console.log(err)
        return null
        
    }
}
 
export  {GetAllUsers};
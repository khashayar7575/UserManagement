import http from '../interceptor/Interceptor';
const API_URL = process.env.REACT_APP_PUBLIC_PATH;


const DeleteUser = async (userID: any) => {
    try {
        const res = await http.delete(API_URL + "DeleteUser/"+ userID)        
    } catch (err) {
        console.log(err)
    }
}
 
export  {DeleteUser};
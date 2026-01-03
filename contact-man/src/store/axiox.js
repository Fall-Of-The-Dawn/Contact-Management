import axios from "axios";

const ContactAxios = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/users`,
    withCredentials: true

})
export default ContactAxios
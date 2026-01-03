import axios from "axios";

const ContactAxios = axios.create({
    baseURL: `${import.meta.env.Backend_Port}/api/users`,
    withCredentials: true

})
export default ContactAxios
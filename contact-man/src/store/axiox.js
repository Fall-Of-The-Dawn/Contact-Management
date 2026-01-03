import axios from "axios";

const ContactAxios = axios.create({
    baseURL: "http://localhost:3000/api/users",
    withCredentials: true

})
export default ContactAxios
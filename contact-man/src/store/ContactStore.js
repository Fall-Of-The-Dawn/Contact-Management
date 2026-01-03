import { create } from "zustand";
import ContactAxios from "./axiox";
const useContactStore = create((set)=>{
    const contactDetails = []
    const gettingcontact = false
    const addingcontact = false
    const addedContact = ""
    const getContact = async () => {
        try{
            const { data } = await ContactAxios.get("/findContacts");
            set({ contactDetails: data });
        } catch(error){
            console.log(error)
        }
        
    };

    const addContact = async(data)=>{
        try {
            const res = await ContactAxios.post("/addContact", data);
            set({addedContact: res.data})
        } catch (error) {
            console.log(error)
        }
    }

    return {contactDetails, getContact, addContact}
})


export default useContactStore
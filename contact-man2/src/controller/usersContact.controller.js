import users from '../models/usersinfo.models.js';


const findContacts = async(req, res)=>{
    try {
        const findContact = await users.find().sort({createdAt: -1});
        res.status(200).json(findContact) 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const addContact = async(req, res)=>{
    try {
        const {name, email, phone, message} = req.body;
        const emailRegx =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!name || !email || !phone){
            return res.status(400).json({message: "Neccessary fields are missing"})
        }
        if(!emailRegx.test(email)){
            return res.status(400).json({message: "Invalid email address"})
        }
        const response = await users.create({name: name, email: email, phone: phone, message: message}); 
        res.status(201).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
}


export {findContacts, addContact}
import React, {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import  useContactStore from '../store/ContactStore.js'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [formSubmit, setFormSubmit] = useState(false)
  const [neccessaryData, setNeccessaryData] = useState("All Feilds are Required")
  
  const checkFormData = (formData)=>{
    if(!formData?.name?.trim()){ return setNeccessaryData("Full Name is required")}
    if(!formData?.email?.trim()){ return setNeccessaryData("Email is required")}
    if(/\S+@\S+\.\S+/.test(formData.email) === false) return setNeccessaryData("Invalid Email Format")
    if(!formData?.phone?.trim() || isNaN(formData.phone)){ return setNeccessaryData("Phone Number is required")}
    if( formData.phone?.length < 6) {return setNeccessaryData("Phone number should be greater than 6")}
    if(formData.phone?.length > 15) {return setNeccessaryData("Phone number should be less than 13")}
    return true
  }
  const {addContact, getContact} = useContactStore()

  useEffect(() => {
   const success = checkFormData(formData)
   if(success === true){
    setFormSubmit(true)
   }
   else {setFormSubmit(false)} 
  }, [formData])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addContact(formData)
      toast.success("Contact Added Successfully")
      setFormData({name: "", email: "", phone: "", message: ""})
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
    {/*I used daisi UI's components */}
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-bold font-semibold text-center text-gray-700">
          Contact Details
        </h1>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label">
          <span className="text-base text-black label-text">Full Name</span>
        </label>
          <input 
            autoComplete='name'
            type="text" 
            placeholder="eg: Jhon Snow" 
            className="w-full input input-bordered"
            name='name'
            value={formData.name}
            onChange={(e) => 
              setFormData({...formData, name : e.target.value})}
            required 
          />
      </div>
      <div>
        <label className="label">
          <span className="text-base text-black label-text">Email</span>
        </label>
          <input 
            autoComplete='email'
            type="text" 
            name='email'
            placeholder="eg: JhonSnow@gmail.com" 
            className="w-full input input-bordered"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email : e.target.value})}
            required
          />
      </div>
      <div>
        <label className="label">
          <span className="text-base text-black label-text">Phone Number</span>
        </label>
          <input 
            autoComplete='phone'
            type="text" 
            name='phone'
            placeholder="eg: Enter phone number "  
            className="w-full input input-bordered"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone : e.target.value})}
            required
          />
      </div>
      <div>
        <label className='label'>
          <span className='text-base text-black label-text'>Message</span>
        </label>
        <input type="text"
          autoCorrect='on'
          name='message'
          value={formData.message}
          onChange={(e) => setFormData({...formData, message : e.target.value})}
          className='w-full input input-bordered'
          placeholder='Enter your message (optional)'
        />
      </div>
      <div className='mt-4'>
        {
          formSubmit ?
          <button type='submit' className='btn btn-primary bg-green-500 w-full'>Submit</button> :
          <button className="btn btn-disabled bg-red-500 w-full text-white" >
            {neccessaryData}
          </button>
        }
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Contact
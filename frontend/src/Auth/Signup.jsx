import React,{ useState } from "react";
import axios from 'axios'
function Signup(){
    const [name,setName]=useState(" ")
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState("")

    const handleSubmit=async(e)=>{
          e.preventDefault()
          const {data}=await axios.post("http://10.100.56.89:5000/api/v1/auth/register",{name,email,password})
          localStorage.setItem('token',data.token)
    }
    return(<>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="******************" />
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div >
      <button onClick={handleSubmit} >
        Sign Up
      </button>
     
    </div>
</div>
</>
    )
}

export default Signup;
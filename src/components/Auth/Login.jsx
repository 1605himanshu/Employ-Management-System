import React ,{useState} from "react"

const Login = ({handleLogin}) => {
   
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }




  return(
    <div className='flex items-center h-screen w-screen justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className="flex flex-col items-center justify-center ">
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className=" text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white" type="email" placeholder="Enter your email" />
                <input
                 value={password}
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }}
                 required className=" text-white outline-none bg-transparent border-2 mt-5 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white" type="password" placeholder="Enter your password"/>
                <button className="mt-6 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">Log in</button>
            </form>
        </div>
    </div>
  )
}
export default Login
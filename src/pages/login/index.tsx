import { useState } from "react"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/inputs/Input"

export const Login = () => {
    const [value , setValue] = useState("")
    console.log("vlaue in parent" , value);
    
    return (
        <>
            <div className="flex flex-col gap-5 max-w-3xl mx-auto my-auto h-screen">
                <Input value={value} onChange={(e)=>setValue(e.target.value)}  innerLabel={"Password"} placeholder=""/>
                <Input value={""} onChange={()=>{}} label={"password"}/>
                <Button onClick={()=>{}} className=""> Login</Button>
            </div>
        </>
    )
}
"use client"
import {useRouter} from 'next/navigation'
import {useState} from 'react'

async function addTodo(name,refresh) {

    await fetch("https://todo-api-dusky.vercel.app/api/todo/add",{
        method: "POST",
        body:   JSON.stringify({name})
    });
  refresh();
}

export default function Addnewtodo() {
    
    const router=useRouter();
    let [name,setName]=useState();

  return (
       
        <div className="  input-group mb-3 ">
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="Add ToDo" aria-label="Username" aria-describedby="basic-addon1" />
                <button onClick={
                    async()=>{
                     name?  
                    await addTodo(name,router.refresh)
                         :""
                    }
                    } className="btn btn-primary">Add</button><br />

        </div>
    
  )
}

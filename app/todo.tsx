'use client'; 
import {useRouter} from 'next/navigation'

async function update(id,isDone,refresh:()=>void) {
    await fetch("https://todo-api-dusky.vercel.app/api/todo/update",
    {method:'POST',
    mode:'no-cors',
     body: JSON.stringify({id,isDone})
    });
    refresh();
}

async function deleteTodo(id,refresh) {
    await fetch(`https://todo-api-dusky.vercel.app/api/todo/delete?id=${id}`,{
    method: "DELETE",
 });
 refresh();
}

export default function Todo({todo}) {

    const router=useRouter();
    return (
        <div>
            <input checked={todo.isDone} onChange={(e)=>update(todo.id, e.target.checked,router.refresh)} className="form-check-input mx-3 my-2 border-primary" type="checkbox" value="" id="flexCheckDefault" />
            {todo.name}
            <button onClick={()=>{deleteTodo(todo.id,router.refresh)}} className="btn btn-danger mx-4">Delete</button>
        </div>
    )
}

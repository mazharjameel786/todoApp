import Todo from './todo'
async function getTodo() {
    let todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
}
export default async function TodoList() {
    const { todos } = await getTodo();
    console.log(todos);

    return (
        <div>
            <ul className="list-group">
                {todos.map((t: any) => {
                    return (
                        <>  
                        
                        <li key={t.id} className="list-group-item">
                            <Todo  todo={t}/>
                        </li>
                        
                        

                        </>

                    )
                })}


            </ul>
        </div>
    )
}
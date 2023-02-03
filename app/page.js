import Addnewtodo from './add-new-todo'
import TodoList from './todo-list'

export default function page() {
    return (
        <div className="container ">

    <Addnewtodo />
          
           <TodoList />
        </div>

    )
}

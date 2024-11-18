import { useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function Todos() {
    const todos = useSelector(state => state.todos);

    return (
        <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><AddTodo/></div>
          <div className="flex flex-wrap gap-y-3" >
            {
              todos.length ?
              todos.map(todo => {
                return <div key={todo.id} className="w-full">
                    <TodoItem todo={todo}/>
                </div>
              })
              :
              <div>No Todo's, please create todos</div>
            }
          </div>
        </div>
      </div>
    );
}

export default Todos

import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
   const { todos } =  useTodo();

  return (
    <div className="flex flex-wrap gap-y-3">
      {todos.length ? (
        todos.map((todo) => {
          return (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          );
        })
      ) : (
        <div>No Todo's, please create todos</div>
      )}
    </div>
  );
}

export default TodoList;

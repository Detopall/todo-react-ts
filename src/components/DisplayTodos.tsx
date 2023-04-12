import { ITodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
	todos: ITodo[];
	toggleTodo: (todoId: string, completed: boolean) => void;
	deleteTodo: (todoId: string) => void;
}

function DisplayTodo({ todos, toggleTodo, deleteTodo }: ITodoListProps) {
	{
		console.log(todos);
	}
	return (
		<ul id="list-of-todos" className="list">
			{todos.length === 0 && <p> You have no todos! </p>}
			{todos.map((todo) => {
				return (
					<TodoItem
						todo={todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
						key={todo.id}
					></TodoItem>
				);
			})}
		</ul>
	);
}

export default DisplayTodo;

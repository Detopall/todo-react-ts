import { ITodo } from "./CreateTodo";

interface ITodoItem {
	todo: ITodo;
	toggleTodo: (todoId: string, completed: boolean) => void;
	deleteTodo: (todoId: string) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: ITodoItem) {
	return (
		<li key={todo.id}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={(e) => toggleTodo(todo.id, e.target.checked)}
			/>
			<span>{todo.title}</span>
			<button
				onClick={() => deleteTodo(todo.id)}
				className="btn btn-danger"
			>
				Delete
			</button>
		</li>
	);
}

export default TodoItem;

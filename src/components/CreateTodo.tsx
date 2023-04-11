import { useEffect, useState } from "react";
import DisplayTodo from "./DisplayTodos";

export interface ITodo {
	id: string;
	title: string;
	completed: boolean;
}

function CreateTodo() {
	const [todos, setTodos] = useState<ITodo[]>(() => {
		const localTodos = localStorage.getItem("Items");
		if (!localTodos) return [];
		return JSON.parse(localTodos);
	});

	useEffect(() => {
		localStorage.setItem("Items", JSON.stringify(todos));
	}, [todos]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		if (e) e.preventDefault();
		let todoInput = document.querySelector("#new-todo") as HTMLInputElement;
		if (!todoInput.value.trim()) return;

		const newTodo: ITodo = {
			id: crypto.randomUUID(),
			title: todoInput.value,
			completed: false,
		};

		setTodos((currentTodos: ITodo[]) => {
			return [...currentTodos, newTodo];
		});

		todoInput.value = "";
	}

	function toggleTodo(todoId: string, completed: boolean) {
		setTodos((currentTodos: ITodo[]) => {
			return currentTodos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function deleteTodo(todoId: string) {
		setTodos((currentTodos: ITodo[]) => {
			return currentTodos.filter((todo) => todo.id !== todoId);
		});
	}

	return (
		<>
			<form
				id="create-new-todo"
				onSubmit={handleSubmit}
				className="new-item-form"
			>
				<label htmlFor="new-todo">Create new todo</label>
				<input
					id="new-todo"
					type="text"
					autoComplete="off"
					placeholder="Create new todo"
				></input>

				<input
					id="create"
					type="submit"
					value="Create"
					className="btn"
				></input>
			</form>

			<DisplayTodo
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			></DisplayTodo>
		</>
	);
}

export default CreateTodo;

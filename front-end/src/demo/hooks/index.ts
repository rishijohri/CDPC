import { useEffect } from "react";

import { todoAPI } from "../services";
import { TodoModel } from "../types";

function useTodosApp() {
    useEffect(() => {
        const todoItem: TodoModel = {
            createdAt: new Date(),
            createdBy: "effect",
            description: "empty",
            needsReminder: true,
            title: "created",
            id: "#3"
        };
        todoAPI.createTodo(todoItem).then(console.log);
        todoAPI.readTodo(todoItem.id).then(console.log);
        todoAPI.updateTodo(todoItem.id).then(console.log);
        todoAPI.deleteTodo(todoItem.id).then(console.log);
        todoAPI.listTodos().then(console.log);
    }, []);
}

export { useTodosApp };

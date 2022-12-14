import React from "react";

import useCreateTodo from "../hooks/useCreateTodo";
import { TodoType } from "../types";

function CreateTodo() {
    const addHandler = useCreateTodo();
    const todoItem: TodoType = {
        id: 3,
        title: "test",
        description: "test",
        needsReminder: false,
        createdAt: Date(),
        createdBy: "test"
    };
    const handleAddTodo = () => {
        addHandler(todoItem);
    };
    return (
        <button
            onClick={handleAddTodo}
        >
            Add Todo
        </button>
    );
}

export default CreateTodo;

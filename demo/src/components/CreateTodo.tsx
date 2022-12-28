import React from "react";

import useCreateTodo from "../hooks/useCreateTodo";
import { TodoType } from "../types";

function CreateTodo() {
    const addHandler = useCreateTodo();
    const todoItem: TodoType = {
        createdAt: Date(),
        createdBy: 'test',
        description: 'test',
        needsReminder: true,
        title: 'test',
        id: 3
    };
    const handleAddTodo = async () => {
        await addHandler(todoItem);
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

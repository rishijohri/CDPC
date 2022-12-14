import React from "react";

import useCreateTodo from "../hooks/useCreateTodo";
import { TodoType } from "../types";

function CreateTodo() {
    const AddHandler = useCreateTodo();
    const todoItem: TodoType = {
        id: 3,
        title: "test",
        description: "test",
        needsReminder: false,
        createdAt: Date(),
        createdBy: "test"
    };

    return (
        <button
            onClick={() => {
                AddHandler(todoItem);
            }}
        >
            Add
        </button>
    );
}

export default CreateTodo;

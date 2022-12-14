import React from "react";

import useReadTodo from "../hooks/useReadTodo";
import { TodoType } from "../types";

function ReadTodo() {
    const todo = useReadTodo();
    return (
        <div>
            <ul>
                {todo.map((todo: TodoType) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadTodo;

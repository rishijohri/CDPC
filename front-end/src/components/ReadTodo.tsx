import React from "react";

import useReadTodo from "../hooks/useReadTodo";
import { TodoType } from "../types";

function ReadTodo() {
    const todoList = useReadTodo();
    return (
        <div>
            <ul>
                {todoList.map((todoItem: TodoType) => (
                    <li key={todoItem.id}>{todoItem.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadTodo;

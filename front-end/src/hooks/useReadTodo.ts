import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { readTodoAction } from "../features/todo/todoSlice";
import { TodoAPI } from "../services";

export default function useReadTodo() {
    const todo = useAppSelector((state: RootState) => state.todo);
    const dispatch = useAppDispatch();
    useEffect(() => {
        TodoAPI.readTodo()
            .then((response) => {
                dispatch(readTodoAction(response));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch]);
    return todo;
}

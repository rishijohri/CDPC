import { useAppDispatch } from "../app/hooks";
import { addTodoItemAction } from "../features/todo/todoSlice";
import { TodoAPI } from "../services";
import { TodoType } from "../types";

export default function useCreateTodo() {
    const dispatch = useAppDispatch();

    const addHandler = (todoItem: TodoType) => {
        TodoAPI.createTodo(todoItem);
        // do business logic here
        try {
            Promise.all([
                TodoAPI.createTodo(todoItem),
                (response: TodoType) => {
                    //do business logic here
                    return response;
                },
                dispatch(addTodoItemAction(todoItem))
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    return addHandler;
}

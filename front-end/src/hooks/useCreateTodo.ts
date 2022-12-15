import { useAppDispatch } from "../app/hooks";
import { addTodoItemAction } from "../features/todo/todoSlice";
import { TodoAPI } from "../services";
import { TodoType } from "../types";

export default function useCreateTodo() {
    const dispatch = useAppDispatch();

    const addHandler = async (todoItem: TodoType) => {
        TodoAPI.createTodo(todoItem);
        // do business logic here
        try {
            const response = await TodoAPI.createTodo(todoItem);
            if (response) {
                dispatch(addTodoItemAction(todoItem));
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return addHandler;
}

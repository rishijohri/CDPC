import { TodoModel } from "../types";

function sleep(seconds: number) {
    return new Promise<void>((resolve, _reject) => {
        window.setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const dummyTodos: TodoModel[] = [
    {
        id: "#1",
        createdAt: new Date(),
        createdBy: "anonymous-1",
        title: "Test TODO-1",
        description: "Hard Coded Description-1",
        needsReminder: false
    },
    {
        id: "#2",
        createdAt: new Date(),
        createdBy: "anonymous-2",
        title: "Test TODO-2",
        description: "Hard Coded Description-2",
        needsReminder: true
    }
];

async function listTodos(): Promise<TodoModel[]> {
    await sleep(2);
    return dummyTodos;
}

async function createTodo(todoItem: TodoModel): Promise<TodoModel["id"]> {
    await sleep(2);
    dummyTodos.push(todoItem);
    return todoItem.id;
}

async function readTodo(id: TodoModel["id"]): Promise<TodoModel> {
    await sleep(2);
    return dummyTodos[0];
}

async function updateTodo(id: TodoModel["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

async function deleteTodo(id: TodoModel["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

const todoAPI = { listTodos, createTodo, readTodo, updateTodo, deleteTodo };

export { todoAPI };

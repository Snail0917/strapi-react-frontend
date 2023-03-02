import axios from "axios";
const url = "http://localhost:1337/api/todos";
export const readTodos = () => axios.get(url);
export const createTodos = newTodo => axios.post(url, newTodo);
export const updateTodos = (id, updatedTodo) => axios.put(`${url}/${id}`, updatedTodo);
export const deleteTodos = (id) => axios.delete(`${url}/${id}`);




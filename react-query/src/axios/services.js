import axiosInstance from "./index";

const todosServices = {
  async getTodos() {
    const res = await axiosInstance.get("/todos");
    return res.data;
  },
  async getTodo(id) {
    const res = await axiosInstance.get(`/todos/${id}`);
    return res.data;
  },
  async addTodo(todo) {
    const res = await axiosInstance.post("/todos", todo);
    console.log(res.data, "post response");
    return res.data;
  },
  async removeTodo(id) {
    const res = await axiosInstance.delete(`/todos/${id}`);
    console.log(res, "delete response");
    return res;
  },
};

export default todosServices;

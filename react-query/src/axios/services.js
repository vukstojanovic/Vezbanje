import axiosInstance from "./index";

const todosServices = {
  async getTodos() {
    const res = await axiosInstance.get("/todos");
    return res.data;
  },
  async addTodo(todo) {
    const res = await axiosInstance.post("/todos", todo);
    console.log(res, "post response");
    return res;
  },
  async removeTodo(id) {
    const res = await axiosInstance.delete(`/todos/${id}`);
    console.log(res, "delete response");
    return res;
  },
};

export default todosServices;

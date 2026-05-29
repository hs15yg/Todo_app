import { api } from "../api/api";

export async function getTasks() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  let tasks =
    await api.get("/todo_list");

  if(user.role === "user"){

    tasks = tasks.filter(task =>

      task.id_user === user.id
    );
  }

  return tasks;
}

export async function createTask(task){

  await api.post("/todo_list", task);
}

export async function deleteTask(id){

  await api.delete(`/todo_list/${id}`);
}

export async function changeStatus(id, status){

  await api.patch(`/todo_list/${id}`, {
    status
  });
}
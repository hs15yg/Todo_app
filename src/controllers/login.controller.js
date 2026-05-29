import { api } from "../api/api";

export async function login(email, password) {

  const users = await api.get("/users");

  const userFound = users.find(user =>

    user.email === email &&
    user.password === password
  );

  if(!userFound){

    alert("Credenciales incorrectas");

    return;
  }

  localStorage.setItem(
    "user",
    JSON.stringify(userFound)
  );

  window.location.href = "/dashboard.html";
}
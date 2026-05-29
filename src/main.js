import "./style.css";

import { loginView } from "./views/loginView.js";

import { login } from "./controllers/login.controller.js";

document.querySelector("#app").innerHTML =
  loginView();

const form =
  document.querySelector("#loginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email =
    document.querySelector("#email").value;

  const password =
    document.querySelector("#password").value;

  await login(email, password);
});
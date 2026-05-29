import "./style.css";

import { protectRoute }
from "./helpers/auth";

import {
  getTasks,
  createTask,
  deleteTask,
  changeStatus
}
from "./controllers/todo.controller";

import { homeView }
from "./views/homeView";

protectRoute();

async function init(){

  const tasks =
    await getTasks();

  document.querySelector("#app").innerHTML =
    homeView(tasks);

  logoutEvent();

  createTaskEvent();

  deleteEvents();

  statusEvents();
}

function logoutEvent(){

  const logoutBtn =
    document.querySelector("#logoutBtn");

  logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("user");

    window.location.href = "/";
  });
}

function createTaskEvent(){

  const form =
    document.querySelector("#taskForm");

  form.addEventListener("submit",
    async (e) => {

      e.preventDefault();

      const user =
        JSON.parse(localStorage.getItem("user"));

      const task = {

        id_user: user.id,

        title:
          document.querySelector("#title").value,

        description:
          document.querySelector("#description").value,

        status: "initial"
      };

      await createTask(task);

      init();
    }
  );
}

function deleteEvents(){

  const buttons =
    document.querySelectorAll(".deleteBtn");

  buttons.forEach(button => {

    button.addEventListener("click",
      async () => {

        const id =
          button.dataset.id;

        await deleteTask(id);

        init();
      }
    );
  });
}

function statusEvents(){

  const selects =
    document.querySelectorAll(".statusSelect");

  selects.forEach(select => {

    select.addEventListener("change",
      async () => {

        const id =
          select.dataset.id;

        const status =
          select.value;

        await changeStatus(id, status);

        init();
      }
    );
  });
}

init();
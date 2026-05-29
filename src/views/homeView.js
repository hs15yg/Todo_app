export function homeView(tasks){

  const user =
    JSON.parse(localStorage.getItem("user"));

  return `

    <div class="container">

      <div class="top-bar">

        <h1>Todo App</h1>

        <button id="logoutBtn">
          Logout
        </button>

      </div>

      <form id="taskForm">

        <input
          type="text"
          id="title"
          placeholder="Titulo"
          required
        />

        <textarea
          id="description"
          placeholder="Descripcion"
          required
        ></textarea>

        <button>
          Crear tarea
        </button>

      </form>

      <div class="tasks">

        ${tasks.map(task => `

          <div class="card">

            <h2>${task.title}</h2>

            <p>${task.description}</p>

            <span>${task.status}</span>

            ${user.role === "admin" ? `

              <select
                class="statusSelect"
                data-id="${task.id}"
              >

                <option value="initial">
                  initial
                </option>

                <option value="process">
                  process
                </option>

                <option value="completed">
                  completed
                </option>

              </select>

              <button
                class="deleteBtn"
                data-id="${task.id}"
              >
                Eliminar
              </button>

            ` : ""}

          </div>

        `).join("")}

      </div>

    </div>
  `;
}
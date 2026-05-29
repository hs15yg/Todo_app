export function loginView(){

  return `

    <div class="login-container">

      <form id="loginForm">

        <h1>Todo App</h1>

        <input
          type="email"
          id="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          required
        />

        <button>
          Ingresar
        </button>

      </form>

    </div>
  `;
}
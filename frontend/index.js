const loginForm = document.querySelector('.login')

loginForm.addEventListener("submit", handleLogin)

function handleLogin(event) {
  event.preventDefault()

  const loginFormData = new FormData(event.target)
  const username = loginFormData.get("username")
  const password = loginFormData.get("password")

  const loginBody = { user: { username, password } }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      
    }
  }
  event.target.reset()
}

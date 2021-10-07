const loginForm = document.querySelector('.login')
const getUsers = document.querySelector('.get-users')

loginForm.addEventListener("submit", handleLogin)

function handleLogin(event) {
  event.preventDefault()

  const loginFormData = new FormData(event.target)
  const username = loginFormData.get("username")
  const password = loginFormData.get("password")

  console.log(username, password)

  const loginBody = { username, password }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginBody)
  }).then(response => response.json())
    .then(result => {
      console.log(result.token)
      localStorage.setItem("token", result.token)
    })
  event.target.reset()
}

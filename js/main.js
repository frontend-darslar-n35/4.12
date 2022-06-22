

async function loginRequest(credentials) {
    const response = await fetch("http://localhost:8040/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    if (response.status !== 200) throw Error("Login yoki parol xato")
    const result = await response.json()
    return result
}

var showPassword = document.querySelector(".show-password")
showPassword.addEventListener('click', () => {
    let nextSibling = showPassword.nextElementSibling
    if (nextSibling.type == "password") nextSibling.type = 'text'
    else {
        nextSibling.type = 'password'
    }


})


var loginFormEl = document.querySelector(".login-form")
var loginInputEl = document.querySelector(".login-input")
var passwordInputEl = document.querySelector(".password-input")

loginFormEl.addEventListener('submit', async (e) => {
    e.preventDefault()

    const credentials = {
        email: loginInputEl.value,
        password: passwordInputEl.value
    }
    try {
        const data = await loginRequest(credentials)
        const { data: { access_token: token } } = data
        localStorage.setItem('token', token)
        window.location.href = "/admin.html"
    } catch (err) {
        alert(err.message)
    }
})
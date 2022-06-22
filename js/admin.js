async function getUsers() {
    const token = localStorage.getItem("token")
    const response = await fetch("https://reqres.in/api/users", {
        headers: {
            "Content-type": "application/json",
            "authorization": `Bearer ${token}`
        }
    })
    const data = await response.json()
    if (response.status >= 300) throw new Error(data)
    return data
}


getUsers().then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})


const slider = tns({
    container: ".my-slider",
    controlsContainer: ".controls",
    items: 3,
    slideBy: 1,
    autoplayButtonOutput: false,
    // autoplay: true,
    mouseDrag: true,
    nav: false
})
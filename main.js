fetch("https://fakestoreapi.com/users")
    .then(res => res.json())
    .then(users => myFunction(users))
    .catch(err => console.error("fetch error: ", err))


let myFunction = (users) => {
    users.forEach(user => {
        let main = document.querySelector("main")

        let container = document.createElement("div")
        let name = document.createElement("h1")
        let username = document.createElement("h2")
        let address = document.createElement("h2")
        let email = document.createElement("h2")
        
        name.textContent = `Name: ${user.name.firstname}`
        username.textContent = `Username: ${user.username}`
        address.textContent = `Address: ${user.address.street}`
        email.textContent = `Email: ${user.email}`

        container.append(name, username, address, email)
        main.appendChild(container)
    });
}
import dogs from "./dogs.js"
import { createEl } from "./create-element.js"

const dogsList = dogs.map(dog => {
    const h2 = document.createElement('h2')
    h2.textContent = dog.name
    return h2
})

const title = createEl("h1", {}, "DOGS 🐕")

const list = createEl("ul", {}, ...dogsList);

document.getElementById('app').append(title, list)

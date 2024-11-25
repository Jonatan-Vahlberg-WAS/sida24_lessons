
/**
 * User
 *  - firstName
 *  - lastName
 *  - avatar (url)
 */
function createUserCardElement(user) {
    const card = document.createElement("div")
    card.classList.add("user-card")

    const avatar = document.createElement("img")
    avatar.src = user.avatar
    avatar.alt = `${user.firstName} ${user.lastName}`
    avatar.classList.add("user-card__avatar")

    const name = document.createElement("h2")
    name.innerText = `${user.firstName} ${user.lastName}`

    card.appendChild(avatar)
    card.appendChild(name)

    return card
}
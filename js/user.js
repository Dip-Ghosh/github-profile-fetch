
import { APIURL } from "./env.js";
import { getUserRepository } from "./repository.js"

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// getUser("florinpop17");

const getUser = async (userName) => {

    const response       = await fetch(APIURL + userName);
    const responseData   = await response.json();
    createUserCard(responseData);
}


const createUserCard = (user) => {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}, ${user.location}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}


form.addEventListener("submit", (event) => {

    event.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
        getUserRepository(user)
        search.value = "";
    }
});

export { getUser }
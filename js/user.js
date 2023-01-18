
import { APIURL } from "./env.js";
import { getUserRepository } from "./repository.js"

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


const getUser = async (userName) => {

    const response       = await fetch(APIURL + userName);
    const responseData   = await response.json();
    createUserCard(responseData);
}


const createUserCard = (user) => {

    const {avatar_url, name, location,bio, followers,following,public_repos} = user;
    const place = (location) ? location : '';

    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${avatar_url}" alt="${name}" />
            </div>
            <div class="user-info">
                <h2>${name}  ${place} </h2>
                <p>${bio}</p>

                <ul class="info">
                    <li>${followers}<strong>Followers</strong></li>
                    <li>${following}<strong>Following</strong></li>
                    <li>${public_repos}<strong>Repos</strong></li>
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

document.addEventListener('DOMContentLoaded', () => {
    getUser('Dip-Ghosh');
    getUserRepository('Dip-Ghosh')
})
export { getUser , getUserRepository}
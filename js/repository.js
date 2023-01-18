 import {APIURL} from "./env.js";

export const getUserRepository = async (userName) => {

    const response     = await fetch(APIURL + userName + "/repos");
    const responseData = await response.json();

    createRepositoryCard(responseData);
}

function createRepositoryCard(repos) {

    const reposEl = document.getElementById("repos");

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}

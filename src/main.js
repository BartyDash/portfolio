import star from './images/star.svg';
import demoIcon from './images/demo-icon.svg';
import githubIcon from './images/github-code.svg';

const projectsContainer = document.querySelector(".projects--js");

const username = "bartydash";
const sort = "desc";

console.log("Hello there! Up for a chat? Message me at writetobartek@gmail.com! 😊");//later complete email!

fetch(`https://api.github.com/users/${username}/repos?sort=${sort}`)
  .then((response) => response.json())
  .then((response) => {
    for (let repository of response) {
      const { name, html_url, description, stargazers_count, topics, homepage, fork } = repository;

      let tags = '';

      for (let tag of topics) {
        tags += `<li class="bg-gray-400/10 px-2 py-1 rounded text-sm font-bold">${tag}</li>`;
      }

      const element = `<article class="rounded-round20px bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full">
        <div
            class="h-11 p-4 flex gap-1.5 shadow-innerlight rounded-t-round20px bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-inset ring-bg">
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
            <span class="w-3 h-3 block rounded-full bg-bg opacity-50"></span>
        </div>
        <div class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow ring-1 ring-inset ring-bg">
          <div>
            <header class="flex gap-4 items-center mb-4">
                <h3 class="text-2xl leading-none font-bold">${name}</h3>
                <p
                    class="bg-gray-400/10 px-2 py-1 flex gap-0.5 items-center text-gray-400 font-medium leading-none rounded">
                    <img src="${star}" alt="" class="w-4 h-4">${stargazers_count}
                </p>
            </header>
            <p class="text-gray-400 text-xl mb-4">${description}</p>
            <ul class="flex gap-2 mb-10 flex-wrap">
              ${tags}
            </ul>
          </div>
            <div class="flex flex-col flex-wrap md:flex-row gap-4 items-start">
                <a class="bg-bg text-primary flex gap-2 font-bold py-4 px-5 items-center rounded-round10px md:rounded-xl md:text-xl border-gray-800 border-2 hover:border-primary transition-colors duration-500"
                    href="${homepage}" target="_blank" rel="noopener noreferrer nofollow"><img src="${demoIcon}" alt="" class="w-6 h-6">View demo</a>
                <a class="bg-bg text-primary flex gap-2 font-bold py-4 px-5 items-center rounded-round10px md:rounded-xl md:text-xl border-gray-800 border-2 hover:border-primary transition-colors duration-500"
                    href="${html_url}" target="_blank" rel="noopener noreferrer nofollow"><img src="${githubIcon}" alt="" class="w-6 h-6">Source code</a>
            </div>
        </div>
      </article>`;
      if (homepage && !fork && description != null) projectsContainer.insertAdjacentHTML("beforeend", element);
    }
  })
  .catch((e) => console.log(e));

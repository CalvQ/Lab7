// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too



document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
        var count = 1;
        entries.forEach(entry => {
            var tmpcount = count;
            let newPost = document.createElement('journal-entry');
            newPost.entry = entry;
            newPost.onclick = function () {
                setState({page: "post", num: tmpcount, entry: entry}, false);
            };
            count = count+1;
            document.querySelector('main').appendChild(newPost);
        });
    });
});

// back button
window.addEventListener('popstate', (event) => {
    setState(event.state, true);
});

// window navigation
let settings = document.getElementsByTagName('img')[0];
settings.onclick = function () {
    setState({page: "setting"}, false);
};

let home = document.getElementsByTagName('h1')[0];
home.onclick = function () {
    setState({page: "home"}, false);
};

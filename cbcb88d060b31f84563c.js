import "./style.css"

import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';

let createMain = () => {
    let home = document.getElementById('home');
    home.addEventListener('click', () => {
        if (document.getElementsByClassName('main').length > 0) {
            document.getElementsByClassName('main')[0].remove();
        }
        createHome();
    })

    let menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
        if (document.getElementsByClassName('main').length > 0) {
            document.getElementsByClassName('main')[0].remove();
        }
        createMenu();
    })

    let contact = document.getElementById('contact');
    contact.addEventListener('click', () => {
        if (document.getElementsByClassName('main').length > 0) {
            document.getElementsByClassName('main')[0].remove();
        }
        createContact();
    })
}

createMain();
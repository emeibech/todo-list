import { viewLists } from "../options/viewLists";
import { newTask } from "../options/newTask";
import { newList } from "../options/newList";

const removeOptions = () => {
    const options = document.querySelector('.options');
    const nav = document.querySelector('.nav');
    const button = document.querySelector('.btn');
    button.classList.remove('btn-hide');
    nav.removeChild(options);
}

const optionsLogic = (e) => {

    if (e.target.textContent == 'New Task') {
        removeOptions();
        newTask();
    }

    if (e.target.textContent == 'New List') {
        removeOptions();
        newList();
    }

    if (e.target.textContent == 'View Lists') {
        removeOptions();
        viewLists();
    }
}

export const options = (e) => {
    optionsLogic(e);
}
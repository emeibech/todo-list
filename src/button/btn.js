import { nav } from "./nav";
import { options } from "./options";

const animateOptions = () => {
    document.querySelector('.options').classList.add('animate-options');
}

export const btn = () => {
    const button = document.querySelector('.btn');
    button.classList.add('btn-hide');
    nav()
    setTimeout(animateOptions, 10);
    // button.removeEventListener('click', btn);
    document.querySelector('.options').addEventListener('click', options);
}
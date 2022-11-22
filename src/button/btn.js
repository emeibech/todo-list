import { nav } from "./nav";
import { animateOptions } from "./animateOptions";
import { options } from "./options";

export const btn = () => {
    const button = document.querySelector('.btn');
    button.classList.add('btn-hide');
    nav()
    setTimeout(animateOptions, 50);
    button.removeEventListener('click', btn);
    document.querySelector('.options').addEventListener('click', options);
}
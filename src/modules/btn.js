import { nav } from "./nav";
import { animateOptions } from "./animateOptions";

export const btn = () => {
    const button = document.querySelector('.btn');
    button.classList.add('btn-hide');
    nav()
    setTimeout(animateOptions, 50);
    button.removeEventListener('click', btn);
}
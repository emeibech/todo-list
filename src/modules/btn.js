import { nav } from "./nav";

export const btn = () => {
    const button = document.querySelector('.btn');
    button.classList.add('btn-hide');
    setTimeout(nav, 100);
    button.removeEventListener('click', btn);
}
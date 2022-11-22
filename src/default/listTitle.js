import { defaultList } from "../list/lists";

export const listTitle = (parent) => {
    const h3 = document.createElement('h3');
    h3.textContent = `${defaultList.name}`;
    h3.classList.add('list-name', 'text-center', 'text-4xl');
    parent.appendChild(h3);
}
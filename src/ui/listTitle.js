import { list } from "../list/lists";
import { returnActiveList } from "../auxiliary/returnActiveList";

export const listTitle = () => {
    const h3 = document.createElement('h3');
    h3.textContent = `${returnActiveList().name}`;
    h3.classList.add('list-name', 'text-center', 'text-4xl');
    document.querySelector('.wrapper').appendChild(h3);
}
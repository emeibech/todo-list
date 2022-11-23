import { list } from "../list/lists";
import { selectList } from "./selectList";

const animateViewList = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}

export const viewLists = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const viewList = document.createElement('div')
    viewList.classList.add('options-wrapper', 'shadow-lg')
    setTimeout(animateViewList, 10)
    for(let i = 0; i < list.length; i++) {
        let button = document.createElement('button')
        if(list[i].getIsActive() == true) {
            button.setAttribute('id', 'active');
        }
        button.classList.add('list-item', 'shadow-lg')
        button.textContent = `${list[i].name}`
        viewList.appendChild(button);
    }
    overlay.append(viewList)
    parent.appendChild(overlay)
    viewList.addEventListener('click', selectList)
}
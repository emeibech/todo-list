import { list } from "../list/lists";

export const viewLists = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const viewList = document.createElement('div')
    viewList.classList.add('options-wrapper')
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
    console.log(list[0])
}
import { list } from "./lists";
import { removeChildren } from "../auxiliary/removeChildren";
import { populateStorage } from "../localStorage/storage";

export const deleteList = (e) => {
    const listName = e.target.parentElement.previousSibling.textContent;
    let isActive;
    list.forEach((element) => {
        if (element.name === listName) {
            return isActive = element.getIsActive()
        }
    })

    if (isActive === true) {
        return
    } else {
        list.forEach((el, i) => {
            if(el.name == listName) {
                list.splice(i, 1)
            }
        })

    const parent = document.querySelector('.options-wrapper')
    removeChildren(parent)

    for(let i = 0; i < list.length; i++) {
        const button = document.createElement('button')
        if(list[i].getIsActive() == true) {
            button.setAttribute('id', 'active');
        }
        button.classList.add('list-item', 'shadow-lg')
        const p = document.createElement('p')
        p.textContent = `${list[i].name}`
        const close = document.createElement('div')
        close.classList.add('relative')
        close.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('absolute', 'w-full', 'h-full')
        close.appendChild(overlay)
        button.append(p, close)
        parent.appendChild(button);
        overlay.addEventListener('click', deleteList)
    }

    populateStorage()
    }
}

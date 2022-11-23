import { list } from "../list/lists";
import { returnActiveList } from "../auxiliary/returnActiveList";
import { tasks } from "../ui/tasks";
import { removeChildren } from "../auxiliary/removeChildren";

const animateViewList = () => {
    document.querySelector('.options-wrapper').classList.remove('options-wrapper-animate');
}

const removeOverlay = () => {
    const overlay = document.querySelector('.overlay')
    overlay.parentElement.removeChild(overlay)
}

const removeListTitle = () => {
    document.querySelector('.list-name').textContent = '';
}

const changeListTitle = () => {
    document.querySelector('.list-name').textContent = `${returnActiveList().name}`;
}

const removeTasks = () => {
    const task = document.querySelector('.task');
    removeChildren(task);
}

const changeTasks = () => {
    const btn = document.querySelector('.nav');
    const task = document.querySelector('.task');
    for (let i = 0; i < returnActiveList().getTasks().length; i++) {
        let p = document.createElement(`p`);
        p.textContent = `${returnActiveList().getTasks()[i]}`
      	task.appendChild(p);
    }
    document.querySelector('.wrapper').insertBefore(task, btn);
}

export const selectList = (e) => {
    document.querySelector('#active').removeAttribute('id', 'active');
    if(returnActiveList().getIsActive() == true) {
        returnActiveList().setActiveFalse();
    }

    for(let i = 0; i < list.length; i++) {
        if (e.target.textContent == list[i].name) {
            list[i].setActiveTrue();
            e.target.setAttribute('id', 'active')
        }
    }

    setTimeout(animateViewList, 100);
    setTimeout(removeOverlay, 500);
    removeListTitle();
    changeListTitle();
    removeTasks();
    changeTasks();
}
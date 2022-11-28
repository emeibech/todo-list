import { list } from "../list/lists";
import { returnActiveList } from "../auxiliary/returnActiveList";
import { animateOptions, removeOverlay, removeListTitle, changeListTitle, removeTasks, changeTasks } from "./optionsFunctions";
import { populateStorage } from "../localStorage/storage";

const selectList = (e) => {
    if(e.target.parentElement.classList.contains('list-item')) {
        document.querySelector('#active').removeAttribute('id', 'active');
        if(returnActiveList().getIsActive() == true) {
            returnActiveList().setActiveFalse();
        }

        for(let i = 0; i < list.length; i++) {
            if (e.target.textContent == list[i].name) {
                list[i].setActiveTrue();
                e.target.parentElement.setAttribute('id', 'active')
            }
        }

        setTimeout(animateOptions, 100);
        setTimeout(removeOverlay, 500);
        removeListTitle();
        changeListTitle();
        removeTasks();
        changeTasks();
        populateStorage()
    }
}

export {selectList, removeTasks, changeTasks}
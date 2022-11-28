import { returnActiveList } from "../auxiliary/returnActiveList";
import { populateStorage } from "../localStorage/storage";

const lineThrough = (e) => {
    if(e.target.classList.contains('line')) {
        e.target.classList.remove('line')
    } else {
        e.target.classList.add('line')
    }

}

export const crossOut = (e) => {
    const task = e.target.textContent;
    if(e.target.localName == 'p') {
        if(returnActiveList().getCrossedOut().filter(e => e == task)[0]) {
            returnActiveList().undoCrossOut(task);
        } else {
            returnActiveList().crossOutTask(task);
        }
        setTimeout(lineThrough(e), 10)
    }
    populateStorage()
}
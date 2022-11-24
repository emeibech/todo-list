import { returnActiveList } from "../auxiliary/returnActiveList";

//delete task from the dom
const deleteTaskUI = (e) => {
    document.querySelector('.task').removeChild(e.target.parentElement.parentElement);
}

export const deleteTask = (e) => {
    // console.log(returnActiveList().getTasks())
    if(e.target.classList.contains('close')) {
        const task = e.target.parentElement.previousSibling.textContent;
        returnActiveList().deleteTask(task) //delete task from the object
        deleteTaskUI(e);
    }
    // console.log(returnActiveList().getTasks())
}
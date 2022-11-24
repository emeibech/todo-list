import { returnActiveList } from "../auxiliary/returnActiveList";
import { deleteTask } from "../list/deleteTask";
import { crossOut } from "./crossOut";
import { filterTask } from "../options/optionsFunctions";

export const tasks = () => {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task', 'flex', 'flex-col', 'items-center', 'gap-3', 'text-xl')
    
    for (let i = 0; i < returnActiveList().getTasks().length; i++) {
        const taskWrapper = document.createElement('div')
        taskWrapper.classList.add('task-wrapper', 'w-full')
        const p = document.createElement(`p`);
        const task = `${returnActiveList().getTasks()[i]}`
        p.textContent = task;
        filterTask(task, p);
        const button = document.createElement('button')
        button.classList.add('relative')
        button.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        const overlay = document.createElement('div');
        overlay.classList.add('close', 'absolute', 'w-full', 'h-full')
        button.appendChild(overlay)
        taskWrapper.append(p, button);
        taskContainer.appendChild(taskWrapper);
    }
    
    document.querySelector('.wrapper').appendChild(taskContainer);
    document.querySelector('.task').addEventListener('click', deleteTask)
    document.querySelector('.task').addEventListener('click', crossOut)
}
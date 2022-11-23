import '../styles.css'
import { defaultList } from "../list/lists";

export const tasks = (parent) => {
    const task = document.createElement('div')
    task.classList.add('task', 'flex', 'flex-col', 'items-center', 'gap-3', 'text-xl', 'text-center')
    for (let i = 0; i < defaultList.getTasks().length; i++) {
        let p = document.createElement(`p`);
        p.textContent = `${defaultList.getTasks()[i]}`
      	task.appendChild(p);
    }
    parent.appendChild(task);
}
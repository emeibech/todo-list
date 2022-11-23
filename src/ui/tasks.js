import '../styles.css'
import { returnActiveList } from "../auxiliary/returnActiveList";

export const tasks = () => {
    const task = document.createElement('div')
    task.classList.add('task', 'flex', 'flex-col', 'items-center', 'gap-3', 'text-xl', 'text-center')
    for (let i = 0; i < returnActiveList().getTasks().length; i++) {
        let p = document.createElement(`p`);
        p.textContent = `${returnActiveList().getTasks()[i]}`
      	task.appendChild(p);
    }
    document.querySelector('.wrapper').appendChild(task);
}
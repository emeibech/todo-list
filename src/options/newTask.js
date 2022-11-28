import { returnActiveList } from "../auxiliary/returnActiveList";
import { setAttributes } from "../auxiliary/setAttributes";
import { cancelOptions, changeTasks, removeTasks, removeOverlay, animateOptions } from "./optionsFunctions";
import { populateStorage } from "../localStorage/storage";

const animateForm = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}

const addNewTask = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const task = document.querySelector('#newTask').value
    // console.log(returnActiveList().getTasks())
    returnActiveList().addTask(task)
    // console.log(returnActiveList().getTasks())
    setTimeout(animateOptions, 10);
    setTimeout(removeOverlay, 500);
    removeTasks()
    changeTasks()
    populateStorage()
}

export const newTask = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const form = document.createElement('form')
    form.setAttribute('id', 'form-task')
    form.classList.add('options-wrapper', 'shadow-lg')
    const label = document.createElement('label')
    label.textContent = 'New Task'
    label.setAttribute('for', 'newTask')
    const input = document.createElement('input')
    setAttributes(input, {'type': 'text', 'id': 'newTask', 'name': 'newTask'})
    const button = document.createElement('button')
    button.textContent = 'Add Task'
    form.append(label, input, button)
    overlay.appendChild(form)
    parent.appendChild(overlay)
    setTimeout(animateForm, 10)
    button.addEventListener('click', addNewTask)
    cancelOptions();
}
import { list, listFactory } from "../list/lists";
import { setAttributes } from "../auxiliary/setAttributes";
import { animateOptions, removeOverlay } from "../options/optionsFunctions";

const animateForm = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}
 
const addNewList = (e) => {
    e.preventDefault()
    const listName = document.querySelector('#newList').value;
    const newList = listFactory(`${listName}`);
    list.push(newList);
    setTimeout(animateOptions, 10);
    setTimeout(removeOverlay, 500);
}

export const newList = () => {
    const parent = document.querySelector('.wrapper')
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    const form = document.createElement('form')
    form.setAttribute('id', 'form-list')
    form.classList.add('options-wrapper', 'shadow-lg')
    const label = document.createElement('label')
    label.textContent = 'New List'
    label.setAttribute('for', 'newList')
    const input = document.createElement('input')
    setAttributes(input, {'type': 'text', 'id': 'newList', 'name': 'newList'})
    const button = document.createElement('button')
    button.textContent = 'Add Task'
    button.classList.add('add-task')
    form.append(label, input, button)
    overlay.appendChild(form)
    parent.appendChild(overlay)
    setTimeout(animateForm, 10)
    button.addEventListener('click', addNewList)
}
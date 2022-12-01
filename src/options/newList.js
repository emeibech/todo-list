import { returnActiveList } from "../auxiliary/returnActiveList";
import { list, listFactory } from "../list/lists";
import { setAttributes } from "../auxiliary/setAttributes";
import { cancelOptions, animateOptions, removeOverlay, removeListTitle, changeListTitle, removeTasks, changeTasks } from "../options/optionsFunctions";
import { populateStorage } from "../localStorage/storage";

const animateForm = () => {
    document.querySelector('.options-wrapper').classList.add('options-wrapper-animate');
}
 
const addNewList = (e) => {
    e.preventDefault()
    let listName = document.querySelector('#newList').value;
    if (listName !== '') {
      const newList = listFactory(`${listName}`);
      list.push(newList);
      newList.setActiveTrue();
    } else {
      const newList = listFactory(`To do list`);
      list.push(newList);
      newList.setActiveTrue();
    }

    setTimeout(animateOptions, 10);
    setTimeout(removeOverlay, 500);
    returnActiveList().setActiveFalse();
    removeListTitle();
    changeListTitle();
    removeTasks();
    changeTasks();
    populateStorage()
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
    setAttributes(input, { 'type': 'text', 'id': 'newList', 'name': 'newList' })
    const button = document.createElement('button')
    button.textContent = 'Add List'
    form.append(label, input, button)
    overlay.appendChild(form)
    parent.appendChild(overlay)
    setTimeout(animateForm, 10)
    button.addEventListener('click', addNewList)
    cancelOptions()
}
import './styles.css';
import { def } from "./ui/default";
import { list } from "./list/lists";
import { populateStorage, createInstances } from "./localStorage/storage";

if (!localStorage.getItem('list')) {
    def();
  } else {
    createInstances();
  }
  

// document.addEventListener('DOMContentLoaded', def);

// if (!localStorage.getItem('list')) {
//     populateStorage();
//     def()
//   } else {
//     list.push(getList());
//     def()
//   }

// const stringedList = []
// list.forEach(e => {
//     const obj = {}
//     obj.name = e.name
//     obj.tasks = e.getTasks()
//     obj.crossedOut = e.getCrossedOut()
//     obj.status = e.getIsActive()
//     stringedList.push(obj)
// })

// console.log(stringedList)

// console.log(list)
// for(let i = 0; i < list.length ; i++) list.pop()
// console.log(list)
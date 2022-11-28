import { list, listFactory } from "../list/lists";
import { def } from "../ui/default";

const populateStorage = () => {
    localStorage.clear()
    
    const stringedList = []
    list.forEach(e => {
        const obj = {}
        obj.name = e.name
        obj.tasks = e.getTasks()
        obj.crossedOut = e.getCrossedOut()
        obj.status = e.getIsActive()
        stringedList.push(obj)
    })

    localStorage.setItem('list', JSON.stringify(stringedList))
}

const clearList = () => {
    for(let i = 0; i < list.length + 1; i++) list.pop()
}

const createInstances = () => {
    //clear the default list array
    clearList()

    //get the lists from storage
    const instances = JSON.parse(localStorage.getItem('list'))

    //instantiate the lists from the storage
    instances.forEach(e => {
        //instantiate list
        const listName = listFactory(`${e.name}`)
        
        //add the tasks back
        for(let i = 0; i < e.tasks.length; i++) {
            listName.addTask(`${e.tasks[i]}`)
        }

        //cross out the right tasks
        for(let i = 0; i < e.crossedOut.length; i++) {
            listName.crossOutTask(`${e.crossedOut[i]}`)
        }

        //activate the previous active list
        if(e.status == true) listName.setActiveTrue()

        //push it back to main list
        list.push(listName)
    })

    //populate the ui based on the saved list
    def()
}

export { populateStorage, createInstances }
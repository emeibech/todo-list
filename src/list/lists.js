const list = [];

const listFactory = (name) => {
    const _tasksArr = [];
    let _isActive = false;

    const addTask = (task) => {
        _tasksArr.push(task);
    }

    const deleteTask = (task) => {
        let i = _tasksArr.indexOf(task);
        _tasksArr.splice(i, 1);
    }

    const getTasks = () => _tasksArr;

    const editTasks = () => {
        console.log('add function to edit tasks')
    }

    const setActiveTrue = () => _isActive = true;

    const setActiveFalse = () => _isActive = false;

    const getIsActive = () => _isActive;

    return {
        name,
        addTask,
        deleteTask,
        getTasks,
        editTasks,
        setActiveFalse,
        setActiveTrue,
        getIsActive
    }
}

const defaultList = listFactory('Do It Now');
list.push(defaultList);
for (let i = 0; i < 20; i++) {
    const list1 = listFactory(`Do it Later ${i + 1}`);
    list.push(list1);
}
list[5].setActiveTrue();

defaultList.addTask('Do some shit');
defaultList.addTask('Do more shit');
defaultList.addTask('Do some other shit');
defaultList.addTask('Do some more other shit and then some more');

export { list, listFactory, defaultList }
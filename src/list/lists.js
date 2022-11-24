const list = [];

const listFactory = (name) => {
    const _tasksArr = [];
    let _isActive = false;
    let _crossedOutTasks = [];

    const addTask = (task) => _tasksArr.push(task);

    const deleteTask = (task) => {
        let i = _tasksArr.indexOf(task);
        _tasksArr.splice(i, 1);
    }

    const getTasks = () => _tasksArr;

    const editTasks = () => {
        console.log('add function to edit tasks')
    }

    const getIsActive = () => _isActive;

    const setActiveTrue = () => _isActive = true;

    const setActiveFalse = () => _isActive = false;

    const getCrossedOut = () => _crossedOutTasks;

    const crossOutTask = (task) => _crossedOutTasks.push(task);

    const undoCrossOut = (task) => {
        let i = _crossedOutTasks.indexOf(task);
        _crossedOutTasks.splice(i, 1);
    }

    return {
        name,
        addTask,
        deleteTask,
        getTasks,
        editTasks,
        setActiveFalse,
        setActiveTrue,
        getIsActive,
        getCrossedOut,
        crossOutTask,
        undoCrossOut
    }
}

const defaultList = listFactory('Do It Now');
list.push(defaultList);
list[0].setActiveTrue();

for(let i = 0; i < 5; i++) {
    const project = listFactory(`Do it Later${i + 1}`)
    list.push(project)
    for(let i = 0; i < 5; i++) {
        project.addTask(`Bring me $${i + 1} or I'll kick you in the nuts`)
    }
}

defaultList.addTask('Click the green button to add a new task or create a new list');

export { list, listFactory }
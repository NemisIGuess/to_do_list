// Module that keeps the information
const taskHolder = (() => {
    const tasksArray = [{
        title: "hola",
        description: "que tal",
        status: "undone",
        position: "0",
    }, {
        title: "hola2",
        description: "que tal2",
        status: "done",
        position: "1",
    }, {
        title: "hola3",
        description: "que tal3",
        status: "undone",
        position: "2",
    }, {
        title: "hola4",
        description: "que tal4",
        status: "done",
        position: "3",
    }, {
        title: "hola5",
        description: "que tal5",
        status: "undone",
        position: "4",
    }];

    const setTask = (task) => {
        tasksArray.push(task);
    };

    const modifyTask = (index, key, newValue) => {
        const taskToModify = tasksArray[index];
        taskToModify[key] = newValue;
    };

    const getArray = () => {
        return tasksArray;
    };

    return {setTask, getArray, modifyTask}
})();

export default taskHolder
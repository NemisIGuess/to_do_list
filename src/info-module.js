// Module that keeps the information
const taskHolder = (() => {
    const tasksArray = [];

    const setTask = (task) => {
        tasksArray.push(task);
    }

    const getArray = () => {
        return tasksArray;
    }

    return {setTask, getArray}
})();

export default taskHolder
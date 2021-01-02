// Module that keeps the information
const taskHolder = (() => {
    const tasksArray = [{
        title: "hola",
        description: "que tal",
        status: "../src/images/unmarked_checkbox.png",
    }, {
        title: "hola2",
        description: "que tal2",
        status: "../src/images/marked_checkbox.png",
    }, {
        title: "hola3",
        description: "que tal3",
        status: "../src/images/unmarked_checkbox.png",
    }, {
        title: "hola4",
        description: "que tal4",
        status: "../src/images/marked_checkbox.png",
    }, {
        title: "hola5",
        description: "que tal5",
        status: "../src/images/unmarked_checkbox.png",
    }];

    const setTask = (task) => {
        tasksArray.push(task);
    }

    const getArray = () => {
        return tasksArray;
    }

    return {setTask, getArray}
})();

export default taskHolder
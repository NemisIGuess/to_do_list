// Module that keeps the information
const taskHolder = (() => {
    const tasksArray = [{
        title: "hola",
        description: "que tal",
        status: "../src/images/unmarked_checkbox.png",
    }, {
        title: "hola",
        description: "que tal",
        status: "../src/images/marked_checkbox.png",
    }, {
        title: "hola",
        description: "que tal",
        status: "../src/images/unmarked_checkbox.png",
    }, {
        title: "hola",
        description: "que tal",
        status: "../src/images/marked_checkbox.png",
    }, {
        title: "hola",
        description: "que tal",
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
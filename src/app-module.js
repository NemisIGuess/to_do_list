// Module that controls how the app functions
import {createTask} from './services-module'
import taskHolder from './info-module'
import {renderArray} from './display-module'

const App = (() => {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTaskButton');

    return {taskContainer, addTaskButton}
})();


addTaskButton.addEventListener('click', () => {
    renderArray(taskContainer, taskHolder.getArray());
    createCheckArray()
    console.log(createCheckArray);
})

const createCheckArray = () => {
    const checkImages = document.querySelectorAll('checkImage');
    const checkArray = [...checkImages].forEach((prop) => {
        prop.addEventListener('click', (e) => {
            console.log(e.target.value)
            renderArray(taskContainer, taskHolder.getArray());
        })
    })
}
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
    console.log(taskHolder.getArray());
    renderArray(taskContainer, taskHolder.getArray());
})
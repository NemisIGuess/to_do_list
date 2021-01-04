// Module that controls how the app functions
import {createTask, changeTaskStatus} from './services-module'
import taskHolder from './info-module'
import {renderArray, buttonAnimation} from './display-module'

const App = (() => {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTaskButton');

    return {taskContainer, addTaskButton}
})();

addTaskButton.addEventListener('click', () => {
    buttonAnimation(addTaskButton);
    renderArray(taskContainer, taskHolder.getArray());
    checkEventListeners()
})

const checkEventListeners = () => {
    const checkArray = [...document.querySelectorAll('.checkImage')];
    checkArray.forEach((prop) => {
        prop.addEventListener('click', (e) => {
            changeTaskStatus(e.target.attributes[1].value, taskHolder.getArray(), taskHolder.modifyTask);
            renderArray(taskContainer, taskHolder.getArray());
            checkEventListeners();
        })
    })
}
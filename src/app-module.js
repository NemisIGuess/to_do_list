// Module that controls how the app functions
import {createTask, changeTaskStatus} from './services-module'
import taskHolder from './info-module'
import {renderArray, buttonAnimation, elementVisibility} from './display-module'

const App = (() => {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTaskButton');
    const formElement = document.getElementById("addTaskForm");

    addTaskButton.addEventListener('click', () => {
        elementVisibility(formElement);
        buttonAnimation(addTaskButton);
        renderArray(taskContainer, taskHolder.getArray());
        createCheckEventListeners()
    });

    

    const createCheckEventListeners = () => {
        const checkArray = [...document.querySelectorAll('.checkImage')];
        checkArray.forEach((prop) => {
            prop.addEventListener('click', (e) => {
                changeTaskStatus(e.target.attributes[1].value, taskHolder.getArray(), taskHolder.modifyTask);
                renderArray(taskContainer, taskHolder.getArray());
                createCheckEventListeners();
            })
        })
    };
})();
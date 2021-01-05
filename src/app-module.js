// Module that controls how the app functions
import {createTask, changeTaskStatus, saveDataToLocal, getDataFromLocal, changeTasksPosition} from './services-module'
import taskHolder from './info-module'
import {renderArray, buttonAnimation, elementVisibility} from './display-module'

const App = (() => {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTaskButton');
    const formElement = document.getElementById("addTaskForm");
    const viewBlocker = document.querySelector(".viewBlocker");
    const taskTitle = document.getElementById("title");

    addTaskButton.addEventListener('click', () => {
        formVisibility();
        taskTitle.focus();
        renderArray(taskContainer, taskHolder.getArray());
        createCheckEventListeners();
        createRemoveEventListeners();
    });

    viewBlocker.addEventListener('click', () => {
        formVisibility();
    })

    formElement.addEventListener('keydown', (e) => {
       if (e.key === "Escape" && !viewBlocker.classList.contains('visibility')) {formVisibility()}
    })

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        let taskPosition;
        if (taskHolder.getArray().length === 0) {
            taskPosition = 0;
        } else {taskPosition = taskHolder.getArray().length}
        const newTask = createTask(form.title.value, form.description.value, "undone", taskPosition);
        taskHolder.setTask(newTask);
        formVisibility();
        renderArray(taskContainer, taskHolder.getArray());
        createCheckEventListeners()
        form.reset();
        saveDataToLocal(taskHolder.getArray());
    })

    document.addEventListener('DOMContentLoaded', () => {
        if (!localStorage.getItem('library')) {
            saveDataToLocal(taskHolder.getArray());
        } else {
            taskHolder.setArray(getDataFromLocal());
        }
    
        renderArray(taskContainer, taskHolder.getArray());
        createCheckEventListeners();
        createRemoveEventListeners();
    })

    const formVisibility = () => {
        buttonAnimation(addTaskButton);
        elementVisibility(viewBlocker);
        elementVisibility(formElement);
    }

    const createRemoveEventListeners = () => {
        const removeArray = [...document.querySelectorAll('.deleteImage')];
        removeArray.forEach((prop) => {
            prop.addEventListener('click', (e) => {
                taskHolder.removeTask(e.target.attributes[0].value);
                taskHolder.getArray().forEach((prop, index) =>{
                    taskHolder.modifyTask(index, "position", index);
                })
                renderArray(taskContainer, taskHolder.getArray());
                createRemoveEventListeners();
                createCheckEventListeners();
                saveDataToLocal(taskHolder.getArray());
            })
        })
    }

    const createCheckEventListeners = () => {
        const checkArray = [...document.querySelectorAll('.checkImage')];
        checkArray.forEach((prop) => {
            prop.addEventListener('click', (e) => {
                changeTaskStatus(e.target.attributes[1].value, taskHolder.getArray(), taskHolder.modifyTask);
                renderArray(taskContainer, taskHolder.getArray());
                createCheckEventListeners();
                createRemoveEventListeners();
                saveDataToLocal(taskHolder.getArray());
            })
        })
    };
})();


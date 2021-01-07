// Module that controls how the app functions
import {createTask, changeTaskStatus, saveDataToLocal, getDataFromLocal} from './services-module'
import taskHolder from './info-module'
import {renderArray, buttonAnimation, elementVisibility, modifyTaskForm, resetTaskForm} from './display-module'

const App = (() => {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTaskButton');
    const formElement = document.getElementById("addTaskForm");
    const viewBlocker = document.querySelector(".viewBlocker");
    const taskFormTitle = document.getElementById("addTaskFormTitle");
    const taskTitle = document.getElementById("title");
    const taskDescription = document.getElementById("description");
    let originalTitle = "";


    addTaskButton.addEventListener('click', () => {
        resetTaskForm(taskFormTitle);
        formVisibility();
        taskTitle.focus();
        renderArray(taskContainer, taskHolder.getArray());
        createCheckEventListeners();
        createRemoveEventListeners();
        createEditEventListeners();
    });

    viewBlocker.addEventListener('click', () => {
        formVisibility();
    })

    formElement.addEventListener('keydown', (e) => {
       if (e.key === "Escape" && !viewBlocker.classList.contains('visibility')) {formVisibility()}
    })

    formElement.addEventListener('submit', (e) => {
        if (taskFormTitle.textContent === "Add a task") {
            e.preventDefault();
            let taskPosition;
            if (taskHolder.getArray().length === 0) {
                taskPosition = 0;
            } else {taskPosition = taskHolder.getArray().length}
            const newTask = createTask(form.title.value, form.description.value, "undone", taskPosition);
            taskHolder.setTask(newTask);
            formVisibility();
            renderArray(taskContainer, taskHolder.getArray());
            createCheckEventListeners();
            createRemoveEventListeners();
            createEditEventListeners();
            form.reset();
            saveDataToLocal(taskHolder.getArray());
        } else if (taskFormTitle.textContent === "Modify the task") {
            e.preventDefault();

            const task = taskHolder.getArray().find(object => object.title === originalTitle);
            taskHolder.modifyTask(task.position, "title", form.title.value)
            taskHolder.modifyTask(task.position, "description", form.description.value)

            formVisibility();
            renderArray(taskContainer, taskHolder.getArray());
            createCheckEventListeners();
            createRemoveEventListeners();
            createEditEventListeners();
            form.reset();
            saveDataToLocal(taskHolder.getArray());
        }
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
        createEditEventListeners();
    })

    const formVisibility = () => {
        buttonAnimation(addTaskButton);
        elementVisibility(viewBlocker);
        elementVisibility(formElement);
    }

    const createEditEventListeners = () => {
        const editArray = [...document.querySelectorAll('.editImage')];
        editArray.forEach((prop) => {
            prop.addEventListener('click', (e) => {
                const task = taskHolder.getArray().find(object => object.position == e.target.attributes[0].value)
                modifyTaskForm(taskFormTitle, taskTitle, taskDescription, task);
                originalTitle = task.title;
                formVisibility()
            })
        })
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
                createEditEventListeners();
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
                createEditEventListeners();
                saveDataToLocal(taskHolder.getArray());
            })
        })
    };
})();


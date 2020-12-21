// Module that controls how the app functions
import {createTask} from './services-module'
import taskHolder from './info-module'

const addTask = document.getElementById('addTaskButton')
addTask.addEventListener('click', () => {
    taskHolder.setTask(createTask("hola", "soy colosal", "1990"));
})
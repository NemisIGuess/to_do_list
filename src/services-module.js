// Module that services the app, the one that can create, edit, etc.
const createTask = (title, description, date, status) => {
    (status === 'undone') ? status = '../src/images/unmarked_checkbox.png' : status = '../src/images/marked_checkbox.png';
    return {title, description, date, status}
}

const changeTaskStatus = (position, taskArray, modifyTask) => {
    const task = taskArray.find(prop => prop.position === position);
    (task.status === "undone") ? modifyTask(position, 'status', 'done') : modifyTask(position, 'status', 'undone');
}

export {createTask, changeTaskStatus}

// Necesitare imprimir el index del array dentro del objeto para poder cambiar su posicion en el array
// (cuando la completas se va al final) y poder volver a renderizarla en su posicion original.
// Probablemente necesite un elemento dentro del objeto que almacene si se ha completado la tarea o no.
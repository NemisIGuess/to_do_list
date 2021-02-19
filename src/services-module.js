// Module that services the app, the one that can create, edit, etc.
const createTask = (title, description, status, position) => {
  return { title, description, status, position };
};

const changeTaskStatus = (position, taskArray, modifyTask) => {
  const task = taskArray.find((prop) => prop.position == position);
  task.status === 'undone'
    ? modifyTask(position, 'status', 'done')
    : modifyTask(position, 'status', 'undone');
};

const saveDataToLocal = (array) => {
  localStorage.setItem('tasks', JSON.stringify(array));
};

const getDataFromLocal = () => {
  return JSON.parse(localStorage.getItem('tasks'));
};

export { createTask, changeTaskStatus, saveDataToLocal, getDataFromLocal };

// Necesitare imprimir el index del array dentro del objeto para poder cambiar su posicion en el array
// (cuando la completas se va al final) y poder volver a renderizarla en su posicion original.
// Probablemente necesite un elemento dentro del objeto que almacene si se ha completado la tarea o no.

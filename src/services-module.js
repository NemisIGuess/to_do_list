// Module that services the app, the one that can create, edit, etc.
const createTask = (title, description, date, status) => {
    (status === 'undone') ? status = '../src/images/unmarked_checkbox.png' : status = '../src/images/marked_checkbox.png';
    return {title, description, date, status}
}

export {createTask}

// Necesitare imprimir el index del array dentro del objeto para poder cambiar su posicion en el array
// (cuando la completas se va al final) y poder volver a renderizarla en su posicion original.
// Probablemente necesite un elemento dentro del objeto que almacene si se ha completado la tarea o no.
// Module that services the app, the one that can create, edit, etc.
const createTask = (title, description, date) => {
    return {title, description, date}
}

export {createTask}
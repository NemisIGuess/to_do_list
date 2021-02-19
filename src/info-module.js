// Module that keeps the information
const taskHolder = (() => {
  let _tasksArray = [];

  const setTask = (task) => {
    _tasksArray.push(task);
  };

  const removeTask = (index) => {
    _tasksArray.splice(index, 1);
  };

  const modifyTask = (index, key, newValue) => {
    const taskToModify = _tasksArray[index];
    taskToModify[key] = newValue;
  };

  const getArray = () => _tasksArray;
  const setArray = (array) => {
    _tasksArray = [...array];
  };

  return { setTask, getArray, modifyTask, setArray, removeTask };
})();

export default taskHolder;

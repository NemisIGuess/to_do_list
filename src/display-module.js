import taskHolder from "./info-module";

// Module that displays the app on screen
const renderArray = (element, array) => {
    element.innerHTML = "";
    array.forEach((object, index) => {
        const task = document.createElement('div');
        task.setAttribute('class', 'task');

        const titleSpan = document.createElement('span');
        (object.status === "../src/images/unmarked_checkbox.png") ? titleSpan.setAttribute('class', 'taskTitle') : titleSpan.setAttribute('class', 'taskTitle strikeText');
        titleSpan.innerText = object.title;

        const descriptionSpan = document.createElement('span');
        (object.status === "../src/images/unmarked_checkbox.png") ? descriptionSpan.setAttribute('class', 'taskDescription') : descriptionSpan.setAttribute('class', 'taskDescription strikeText');
        descriptionSpan.innerText = object.description;

        const checkImage = document.createElement('img');
        checkImage.setAttribute('src', object.status);
        checkImage.setAttribute('class', 'checkImage');
        // checkImage.addEventListener('click', () => {
        //     titleSpan.classList.toggle('strikeText');
        //     descriptionSpan.classList.toggle('strikeText');
        //     renderArray(taskContainer, taskHolder.getArray());
        // }) Los eventlisteners tienen que ir en el app-module.js

        const editImage = document.createElement('img');
        editImage.setAttribute('src', '../src/images/edit.png');
        editImage.setAttribute('class', 'editImage taskImage')


        const deleteImage = document.createElement('img');
        deleteImage.setAttribute('src', '../src/images/bin.png');
        deleteImage.setAttribute('class', 'deleteImage taskImage');

        task.appendChild(checkImage);
        task.appendChild(titleSpan);
        task.appendChild(editImage);
        task.appendChild(descriptionSpan);
        task.appendChild(deleteImage);

        element.appendChild(task);
    })
}

export {renderArray}
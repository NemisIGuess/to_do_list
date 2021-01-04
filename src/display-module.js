// Module that displays the app on screen
const renderArray = (element, array) => {
    element.innerHTML = "";
    array.forEach((object, index) => {
        const task = document.createElement('div');
        task.setAttribute('class', 'task');

        const titleSpan = document.createElement('span');
        titleSpan.setAttribute('value', index);
        (object.status === "undone") ? titleSpan.setAttribute('class', 'taskTitle') : titleSpan.setAttribute('class', 'taskTitle strikeText');
        titleSpan.innerText = object.title;

        const descriptionSpan = document.createElement('span');
        descriptionSpan.setAttribute('value', index);
        (object.status === "undone") ? descriptionSpan.setAttribute('class', 'taskDescription') : descriptionSpan.setAttribute('class', 'taskDescription strikeText');
        descriptionSpan.innerText = object.description;

        const checkImage = document.createElement('img');
        (object.status === "undone") ? checkImage.setAttribute('src', '../src/images/unmarked_checkbox.png') : checkImage.setAttribute('src', '../src/images/marked_checkbox.png');
        checkImage.setAttribute('value', index)
        checkImage.setAttribute('class', 'checkImage');

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

const buttonAnimation = (button) => {
    if (button.classList.contains("rotate45")) {
        button.classList.replace("rotate45", "rotate0");
    } else {
        button.classList.remove("rotate0");
        button.classList.add("rotate45");
    }
}

export {renderArray, buttonAnimation}
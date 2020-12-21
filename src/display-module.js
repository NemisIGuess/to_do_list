// Module that displays the app on screen
const renderArray = (element, array) => {
    array.forEach((object, index) => {
        element.appendChild(object);
    })
}

export {renderArray}
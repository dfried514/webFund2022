function incrementYourConnectionsCount() {
    var yourConnectionsCount = document.querySelector('.your-connections-count');
    var connectionsCount = parseInt(yourConnectionsCount.innerText);

    yourConnectionsCount.innerText = connectionsCount + 1;
}

function decrementConnectionRequests() {
    var connectionRequestCount = document.querySelector('.connection-request-count');
    var connectionsCount = parseInt(connectionRequestCount.innerText);

    connectionRequestCount.innerText = connectionsCount - 1;
}

function removeConnection(index) {
    var connectionRequestItems = document.querySelectorAll('.connection-requests .connection-item');
    connectionRequestItems[index].remove();
}

function getElementIndex(element, selector) {
    var idx = 0;
    var elementArray = document.querySelectorAll(selector);

    while (idx < elementArray.length && elementArray[idx] !== element) {
        idx++;
    }
    return idx;
}

function acceptConnection(element) {
    var elementIndex = getElementIndex(element, '.connections-item .connection-accept');
    
    incrementYourConnectionsCount();
    decrementConnectionRequests();
    removeConnection(elementIndex);
}

function rejectConnection(element) {
    var elementIndex = getElementIndex(element, '.connections-item .connection-close');

    decrementConnectionRequests();
    removeConnection(elementIndex);
}

function editProfileName() {
    var profileName = document.querySelector('.profile-name');
    profileName.innerText = 'Fred Flintstone';
}
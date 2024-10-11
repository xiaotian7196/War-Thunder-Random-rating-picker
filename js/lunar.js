function addEventsToColumn(data,right) {
    var showColumn = document.querySelector('.column.left');
    if(right){
        showColumn = document.querySelector('.column.right');
    }

    data.events.forEach(event => {
        const contentBox = document.createElement('div');
        contentBox.className = 'content-box';
        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = event.Title;
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = event.details;
        contentBox.appendChild(content);
        contentBox.appendChild(description);
        showColumn.appendChild(contentBox);
    });
}

addEventsToColumn(data,true);
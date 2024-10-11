function addEventsToColumn(data,right) {
    var showColumn = document.querySelector('.column.left');
    if(right){
        showColumn = document.querySelector('.column.right');
    }

    data.events.forEach(event => {
        // 创建 content-box 容器
        const contentBox = document.createElement('div');
        contentBox.className = 'content-box';

        // 创建 content 元素
        const content = document.createElement('div');
        content.className = 'content';
        content.textContent = event.Title;

        // 创建 description 元素
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = event.details;

        // 将 content 和 description 添加到 content-box 中
        contentBox.appendChild(content);
        contentBox.appendChild(description);

        // 将 content-box 添加到左侧栏中
        showColumn.appendChild(contentBox);
    });
}

addEventsToColumn(data,true);
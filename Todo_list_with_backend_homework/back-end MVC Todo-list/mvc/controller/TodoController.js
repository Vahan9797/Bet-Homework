function TodoController () {

}

TodoController.prototype.add = function(model, title) {
    if (title === '') {
        return;
    };

    $.ajax({
        url: '/',
        type: 'put',
        data: {title: title},
        success: function(data) {
            TodoModel.prototype.add.call(model, data);
        }
    })

}

TodoController.prototype.remove = function(model, id) {
    $.ajax({
        url: '/' + id,
        type: 'delete',
        success: function(data) {
            TodoModel.prototype.remove.call(model, data.index);
        }
    })
}

TodoController.prototype.complete = function(model, id, checked) {
    $.ajax({
        url: '/' + id,
        type: 'post',
        data: {checked: checked},
        success: function(data) {
            TodoModel.prototype.markAsComplete.call(model, data, checked);
        }
    })
}
function TodoController () {

}

TodoController.prototype.add = function(data, title) {
    var el;

    if (title === '') {
        return;
    };
    el = {id: (!data.list.length) ? 1 : data.list[data.list.length - 1].id + 1, title: title, completed: false};

    TodoModel.prototype.add.call(data, el);
}

TodoController.prototype.remove = function(data, el) {
    TodoModel.prototype.remove.call(data, el);
}

TodoController.prototype.complete = function(data, el, check) {
    TodoModel.prototype.markAsComplete.call(data, el, check);
}
function TodoModel(list) {
    this.list = list || [];

    this.notify();
}

TodoModel.prototype.add = function(element) {
    if (Array.isArray(element)) {
        this.list = this.list.concat(element);
    } else {
        this.list.push(element);
    }

    this.notify();
}

TodoModel.prototype.remove = function(element) {
    var index = this.list.findIndex(function(e) {
        return e.id === element.id;
    })
    this.list.splice(index, 1);

    this.notify();
}

TodoModel.prototype.markAsComplete = function(element, isChecked) {
    element.completed = isChecked;

    this.notify();
}

TodoModel.prototype.notify = function() {
    $(document).trigger('modelChange', this);
}
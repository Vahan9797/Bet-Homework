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

TodoModel.prototype.remove = function(index) {
    this.list.splice(index, 1);

    this.notify();
}

TodoModel.prototype.markAsComplete = function(element, isChecked) {
    this.list.find(function(e) {
        return e === element;
    }).completed = isChecked;

    this.notify();
}

TodoModel.prototype.notify = function() {
    $(document).trigger('modelChange', this);
}
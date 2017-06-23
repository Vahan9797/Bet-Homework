function TodoView(selector, onAdd, onDelete, onComplete) {
    this.$container = $(selector);
    this.onAdd = onAdd;
    this.onDelete = onDelete;
    this.onComplete = onComplete;

    this.subscribe();
}

TodoView.prototype.render = function(data) {
    var $list, $input, self = this;

    this.$container.html(
        '<span><input class="new-task" type="text" placeholder="Search...">' +
        '<button class="add-item">Add</button></span> <br> <br>' +
        '<label><input type="radio" id="rad1" name="rad" value="All" checked> All</label>' +
        '<label><input type="radio" id="rad2" name="rad" value="Completed"> Completed</label>' +
        '<label><input type="radio" id="rad3" name="rad" value="Non-completed"> Non-completed</label>' +
        '<ul class="list"></ul>' + `<div id = "Count">All tasks: ${data.list.length} ` + 
        `Completed: ${data.list.filter(function(e) { return e.completed; }).length}</div>`
    );

    this.$container.find('span').on('click', '.add-item', function(e) {
        var $input = self.$container.find('.new-task');
        var title = $input.val().trim();
        typeof self.onAdd === 'function' && self.onAdd(data, title);
    });

    $list = this.$container.find('.list');

    $list.on('click', '.delete-item', function(e) {
        typeof self.onDelete === 'function' && self.onDelete(data, getElement(data, e));
    });

    $list.on('change', '.chck', function(e) {
        typeof self.onComplete === 'function' && self.onComplete(data, getElement(data, e), e.currentTarget.checked);
    })

    data.list.forEach(function(item) {
        $list.append(self.renderItem(item));
    })
};

TodoView.prototype.renderItem = function(item) {
    return '<li style="list-style: none"><input type="checkbox" class="chck" ' + (item.completed ? 'checked' : '') +
    '> ' + item.title + ' <button class="delete-item">Delete</button></li> <br>';
}

function getElement(data, ev) {
    return data.list.find(function(elem) { return ev.currentTarget.parentNode.innerText.slice(1, -7) === elem.title });
}

TodoView.prototype.subscribe = function() {
    var self = this;

    $(document).on('modelChange', function(e, data) {
        self.render(data);
    });
}
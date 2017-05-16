!function() {
    'use strict';
    var ID = 0;
    window.myMethods = window.myMethods || {};

    function makeNotEnumerable(proto) {
        Object.keys(proto).forEach(function(key) {
            Object.defineProperty(proto, key, {
                enumerable: false
            })
        })
    }

    function renderList(obj) {
        var listHTML = '', showCount;
        obj._list.forEach(function(item){
            listHTML += '<li><input id="chck'+ item._id + '" type="checkbox" onclick="l.markAsComplete(' +
            item._id + ')" ' + (item._completed ? 'checked' : '') + '>'+ item._title + 
            '<a href="#" onclick="l.delToDoItem(' + item._id + ')">X</a></li>';
        })

        document.getElementById('todo_list').innerHTML = listHTML;
        if (document.getElementById('rad2').checked) {
            showCount = 'Completed: ' + l.getCompletedCount;
        } else if (document.getElementById('rad3').checked) {
            showCount = 'Non-Completed: ' + (l.getCount - l.getCompletedCount);
        } else {
            showCount = 'All tasks: ' + l.getCount + ' Completed: ' + l.getCompletedCount;
        }
        document.getElementById('Count').innerHTML = showCount;
    }


    function TODOList() {
        this._list = [];
        makeNotEnumerable(this);
    }

    function TODOItem(id, title, completed) {
        this._id = id;
        this._title = title;
        this._completed = completed;
    }

    TODOList.prototype.getCount = 0;
    TODOList.prototype.getCompletedCount = 0;

    TODOList.prototype.addToDoItem = function() {
        var elNewTask = document.getElementById('new_task');
        var title = elNewTask.value.trim();

        if (!title) {
            alert('Please input valid title.');
            return;
        }

        this._list.push(new TODOItem(++ID, title, false));
        this.getCount++;
        renderList(this);
    }

    TODOList.prototype.delToDoItem = function(id) {
        var item = this._list.findIndex(function(v) {
            return v._id == id;
        });

        this._list.splice(item, 1);
        this.getCount -= (this.getCount !== 0) ? 1 : 0;
        this.getCompletedCount -= (this.getCompletedCount !== 0) ? 1 : 0;
        renderList(this);
    }

    TODOList.prototype.markAsComplete = function(id) {
        var check = document.getElementById('chck' + id);
        var i = this._list.findIndex(function (v) {
            return v._id == id;
        });
        this._list[i]._completed = check.checked;
        this.getCompletedCount -= (check.checked) ? -1 : (this.getCompletedCount === 0) ? 0 : 1;
        renderList(this);
    }

    window.l = new TODOList();
    var sortList = new TODOList();
    var searchList = new TODOList();

    window.myMethods.sortByCompleteness = function(id) {
        var radio = document.getElementById('rad' + id).value;
        if (radio === 'Completed') {
            sortList._list = l._list.filter(function(v) {
                return v._completed;
            });
            renderList(sortList);
        } else if (radio === 'Non-completed') {
            sortList._list = l._list.filter(function(v) {
                return !v._completed;
            });
            renderList(sortList);
        } else {
            renderList(l);
        }
    }
/*          NOT WORKING
    window.myMethods.searchByInput = function() {
        if (l._list.length > 0) {
            searchList._list = l._list.filter(function(v) {
                return v._title.indexOf(document.getElementById('new_task').value) !== -1;
            });
            renderList(searchList);
        }
    }
*/
}();
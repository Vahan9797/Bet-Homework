var controller = new TodoController();
var view = new TodoView('#view-container', controller.add, controller.remove, controller.complete);
var model = new TodoModel();

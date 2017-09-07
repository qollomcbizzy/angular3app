;
var Appcomponent = (function () {
    function Appcomponent() {
        this.tasks = [
            new Task("washing clothes ", 0),
            new Task("programming ", 1),
            new Task("listening to music ", 2),
            new Task("watching series", 3),
        ];
    }
    //function for the dostuff()
    Appcomponent.prototype.doStuff = function () {
        alert("you have just totally clicke don a certain task");
    };
    ;
    return Appcomponent;
})();
exports.Appcomponent = Appcomponent;
var Task = (function () {
    function Task(description, id) {
        this.description = description;
        this.id = id;
        this.done = false;
    }
    return Task;
})();
exports.Task = Task;

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="./typings/node/node.d.ts" />
var events = require('events');
/**
 *
 *
 */
var TaskLord = (function (_super) {
    __extends(TaskLord, _super);
    function TaskLord(settings) {
        _super.call(this);
        this.settings = {};
    }
    TaskLord.prototype.addTaskTypePrototypes = function (taskType) {
        /**
         * Add done() function to the passed action function
         * that will make tell the queue that the task is finished.
         */
    };
    TaskLord.prototype.runQueue = function () { };
    TaskLord.prototype.createTaskID = function () { };
    TaskLord.prototype.createTaskTypeID = function () { };
    TaskLord.prototype.createQueueID = function () { };
    //Task types crud
    TaskLord.prototype.taskTypes = function () { };
    TaskLord.prototype.createTaskType = function () { };
    TaskLord.prototype.updateTaskType = function () { };
    TaskLord.prototype.removeTaskType = function () { };
    //Task crud
    TaskLord.prototype.tasks = function () { };
    TaskLord.prototype.createTask = function () { };
    TaskLord.prototype.updateTask = function () { };
    TaskLord.prototype.removeTask = function () { };
    //Task running actions
    TaskLord.prototype.taskFinished = function (task) {
        /**
         * Passed from the .done() function of
         * an action function.  When complete move task and results
         * into the queue's finished array.  Tell Queue to continue.
         */
    };
    TaskLord.prototype.stopTask = function () { };
    TaskLord.prototype.cancelTask = function () { };
    TaskLord.prototype.restartTask = function () { };
    TaskLord.prototype.stopAllTasks = function () { };
    TaskLord.prototype.cancelAllTasks = function () { };
    TaskLord.prototype.restartAllTasks = function () { };
    //Queue crud
    TaskLord.prototype.queues = function () { };
    TaskLord.prototype.createQueue = function () { };
    TaskLord.prototype.updateQueue = function () { };
    TaskLord.prototype.removeQueue = function () { };
    //Task in queue manipulation
    TaskLord.prototype.moveTaskToFront = function () { };
    TaskLord.prototype.moveTaskToEnd = function () { };
    TaskLord.prototype.moveTaskTo = function () { };
    TaskLord.prototype.moveTaskToQueue = function () { };
    //queue running
    TaskLord.prototype.startQueue = function () { };
    TaskLord.prototype.stopQueue = function () { };
    TaskLord.prototype.restartQueue = function () { };
    TaskLord.prototype.startAllQueues = function () { };
    TaskLord.prototype.stopAllQueues = function () { };
    TaskLord.prototype.restartAllQueues = function () { };
    return TaskLord;
})(events.EventEmitter);
//# sourceMappingURL=index.js.map
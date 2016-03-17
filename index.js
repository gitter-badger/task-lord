var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="./typings/node/node.d.ts" />
var events = require('events');
/**
 *
 * TODO: think out logic for how to allow users to store
 * tasks and queues to different database types.
 */
var CueQueue = (function (_super) {
    __extends(CueQueue, _super);
    function CueQueue() {
        _super.call(this);
        this.settings = {};
    }
    //Task types crud
    CueQueue.prototype.taskTypes = function () { };
    CueQueue.prototype.createTaskType = function () { };
    CueQueue.prototype.updateTaskType = function () { };
    CueQueue.prototype.removeTaskType = function () { };
    //Task crud
    CueQueue.prototype.tasks = function () { };
    CueQueue.prototype.createTask = function () { };
    CueQueue.prototype.updateTask = function () { };
    CueQueue.prototype.removeTask = function () { };
    //Task running actions
    CueQueue.prototype.stopTask = function () { };
    CueQueue.prototype.cancelTask = function () { };
    CueQueue.prototype.restartTask = function () { };
    //Queue crud
    CueQueue.prototype.queues = function () { };
    CueQueue.prototype.createQueue = function () { };
    CueQueue.prototype.updateQueue = function () { };
    CueQueue.prototype.removeQueue = function () { };
    //Task in queue manipulation
    CueQueue.prototype.moveTaskToFront = function () { };
    CueQueue.prototype.moveTaskToEnd = function () { };
    CueQueue.prototype.moveTaskTo = function () { };
    CueQueue.prototype.moveTaskToQueue = function () { };
    return CueQueue;
})(events.EventEmitter);
//# sourceMappingURL=index.js.map
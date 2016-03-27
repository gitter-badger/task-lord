///<reference path="./typings/node/node.d.ts" />
import events = require('events')

/**
 * Task:
 * A task is a database storable object which is held
 * in the task queue. A task stores it's own task specific
 * data and results data.
 * 
 * taskID: Unique ID for the task
 * name: Human readable name for task
 * taskTypeID: Reference to taskType
 * queueID: Reference to the holding queue of task.
 * description: description
 * concurrent: whether or not task is allowed to run concurrently
 * timeout: timeout for task
 * data:  Custom data for specific task.
 * results: the result data of a successful run.
 */
interface task {
    taskID: string
    name: string
    taskTypeID: string
    queueID: string
    description: string
    concurrent: boolean
    timeout: string
    data: any
    results: any
    duration: any
}

/**
 * Task Type:
 * A taskType is a definition for a task's actions. This
 * is defined in the javascript as it stores the actual
 * task logic and cannot be stored in a database.
 * 
 * taskTypeID: Unique ID for task type.
 * name:  Human readable name
 * description:  description
 * action: function to be run.  Must call done() when complete
 * kill() is a reference to a function to kill the child process or request.
 * concurrentTasks: How many can be run at the same time.
 * concurrent:  Whether or not the task type can be run concurrently with others.
 * timeout: timeout for a task.
 * data: any custom data that applies to all tasks of type.
 */
interface taskType {
    taskTypeID: string
    name: string
    description: string
    action: any
    kill: any
    concurrentTasks: number
    concurrent: boolean
    timeout: string
    data: any
}

/**
 * Queue:
 * A queue is an object that stores the tasks to be run in order.
 * The queue runs through it's task array sending each completed
 * task to the finishedTasks array for retrieval. Queues can also
 * be scheduled on a timeline for future or recurring task execution.
 * Queue data can be stored in a database.  Need initializer with check
 * for queue creation so that a queue can be created in JavaScript, but will
 * be checked for existence on a restart of the service rather than creating
 * again || pass in queues with the interface configuration and check for existence
 * in the database before creating and saving again resulting in duplicates.
 * 
 * queueID: Unique ID for a queue
 * name: human readable name for queue
 * description: description
 * running: whether or not the queue is in active running state
 * scheduled: whether or not queue has schedule
 * schedule: schedule data
 * recurring: whether or not queue schedule is recurring.
 * recurringInterval: interval for recurrence.
 * tasks: array of task instances
 * finishedTasks: Array of completed tasks
 * finishedTasksTimeout: How long task data exists before being wiped.
 */
interface queue {
    queueID: string
    name: string
    description: string
    running: boolean
    scheduled: boolean
    schedule: string
    recurring: boolean
    recurringInterval: string
    tasks: task[]
    finishedTasks: task[]
    finishedTasksTimeout: string,
    duration: any
}


/**
 * All service settings
 * optional CRUD database functions for all crud methods
 * databaseSaving: whether or not to save data to the database
 */
interface serviceSettings {
    databaseSaving?: boolean
    queueLoader?: any
    queueSaver?: any
    taskLoader?: any
    taskSaver?: any
}

/**
 * Holds data pertaining to queue scheduling
 */
interface queueSchedule {
    timeCheckInterval: number
    scheduledQueues: queue[]
}


/**
 * 
 * 
 */
class TaskLord extends events.EventEmitter {
    public settings: serviceSettings = {}
    constructor(settings: serviceSettings) {
        super()



    }
    private addTaskTypePrototypes(taskType: taskType) {
        /**
         * Add done() function to the passed action function 
         * that will make tell the queue that the task is finished.
         */

    }
    private runQueue() { }
    private createTaskID() { }
    private createTaskTypeID() { }
    private createQueueID() { }

    //Task types crud
    public taskTypes() { }
    public createTaskType() { }
    public updateTaskType() { }
    public removeTaskType() { }

    //Task crud
    public tasks() { }
    public createTask() { }
    public updateTask() { }
    public removeTask() { }

    //Task running actions
    private taskFinished(task: task, results: any) {
        /**
         * Saves task results to task object, if provided.
         * Moves task to finishedTasks in associate queue.
         * if queue is running, run continueQueue()
         */
    }
    public stopTask() { }
    public cancelTask() { }
    public restartTask() { }
    public stopAllTasks() { }
    public cancelAllTasks() { }
    public restartAllTasks() { }

    //Queue crud
    public queues() { }
    public createQueue() { }
    public updateQueue() { }
    public removeQueue() { }


    //Task in queue manipulation
    public moveTaskToFront() { }
    public moveTaskToEnd() { }
    public moveTaskTo() { }
    public moveTaskToQueue() { }

    //queue running
    public startQueue() { }
    public stopQueue() { }
    public continueQueue() { }
    public restartQueue() { }
    public startAllQueues() { }
    public stopAllQueues() { }
    public restartAllQueues() { }
}

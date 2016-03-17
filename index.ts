///<reference path="./typings/node/node.d.ts" />
import events = require('events')

/**
 * Task:
 * A task is a database storable object which is held
 * in the task queue. A task stores it's own task specific
 * data and results data.
 */
interface task{
    taskID: string
    name : string
    taskTypeID: string
    description: string
    concurrent: boolean
    timeout: string
    data:any
    results:any
}

/**
 * Task Type:
 * A taskType is a definition for a task's actions. This
 * is defined in the javascript as it stores the actual
 * task logic and cannot be stored in a database.
 */
interface taskType{
    taskTypeID: string
    name: string
    description: string
    action: any
    concurrentTasks: number
    concurrent: boolean
    timeout: string
    data:any
}

/**
 * Queue:
 * A queue is an object that stores the tasks to be run in order.
 * The queue runs through it's task array sending each completed
 * task to the finishedTasks array for retrieval. Queues can also
 * be scheduled on a timeline for future or recurring task execution.
 * Queue data can be stored in a database.
 */
interface queue{
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
    finishedTasksTimeout:string
}


/**
 * All service settings
 * optional CRUD database functions for all crud methods
 */
interface serviceSettings{
    databaseSaving?:boolean
    queueLoader?:any
    queueSaver?: any
    taskLoader?:any
    taskSaver?:any
}


/**
 * 
 * TODO: think out logic for how to allow users to store 
 * tasks and queues to different database types.
 */
class CueQueue extends events.EventEmitter{
    public settings : serviceSettings = {}
    constructor(){
        super()
        
        
        
    }
    private addTaskTypePrototypes(){}
    private runQueue(){}
    
    
    //Task types crud
    public taskTypes(){}
    public createTaskType(){}
    public updateTaskType(){}
    public removeTaskType(){}
    
    //Task crud
    public tasks(){}
    public createTask(){}
    public updateTask(){}
    public removeTask(){}
    
    //Task running actions
    public stopTask(){}
    public cancelTask(){}
    public restartTask(){}
    public stopAllTasks(){}
    public cancelAllTasks(){}
    public restartAllTasks(){}
    
    //Queue crud
    public queues(){}
    public createQueue(){}
    public updateQueue(){}
    public removeQueue(){}
    
    
    //Task in queue manipulation
    public moveTaskToFront(){}
    public moveTaskToEnd(){}
    public moveTaskTo(){}
    public moveTaskToQueue(){}
    
    //queue running
    public startQueue(){}
    public stopQueue(){}
    public restartQueue(){}
    public startAllQueues(){}
    public stopAllQueues(){}
    public restartAllQueues(){}
    
    
}

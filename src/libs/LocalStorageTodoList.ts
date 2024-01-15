type TasksType = {
    id?:number;
    title: string;
    description: string;
    status: "Complited" | "Active";
  };
class LocalStorageTodoList{

   private tasks:TasksType[];

    constructor(){
       const storedTasks=localStorage.getItem("tasks");
       this.tasks=storedTasks?JSON.parse(storedTasks):[]
    }

   saveTasks(tasks:TasksType[]):void{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }

    addTask(task:TasksType):void{
        const newTask={
            id:this.tasks.length+1,
            title:task.title,
            description:task.description,
            status:task.status
        }

        this.tasks.push(newTask)
        this.saveTasks(this.tasks)
    }

      getTasks(): TasksType[] {
        return this.tasks;
      }
    

}

const todoListStorage = new LocalStorageTodoList();
export default todoListStorage
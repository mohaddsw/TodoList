import todoListStorage from "@/libs/LocalStorageTodoList";
import { create } from "zustand";

export type TodoListObjectType = {
  title: string;
  description: string;
  status: "Complited" | "Active";
  id?:number
};

export type TodoListType = {
  todoList: TodoListObjectType[];
  setTodoList: (value: TodoListObjectType) => void;
  setComplited:(taskId:number)=>void;
  setDeleted:(taskId:number)=>void;
};

const useTodoListStore = create<TodoListType>((set) => ({
  todoList: todoListStorage.getTasks(),


  setTodoList: (value: TodoListObjectType) =>{ 
    todoListStorage.addTask(value)
    const tasks=todoListStorage.getTasks()
    set({ todoList: tasks })},

    setComplited:(taskId:number)=>{
      const tasks=todoListStorage.getTasks()
      const taskIndex = tasks.findIndex(task => task.id === taskId);
    
      if (taskIndex !== -1) {
        tasks[taskIndex].status = "Complited";
      }
      todoListStorage.saveTasks(tasks)
      set({ todoList: tasks })
    },
    setDeleted:(taskId:number)=>{
      const tasks=todoListStorage.getTasks()
      const newTask = tasks.filter(task => task.id !== taskId);
      todoListStorage.saveTasks(newTask)
      set({ todoList: newTask })
    }

}));


export default useTodoListStore
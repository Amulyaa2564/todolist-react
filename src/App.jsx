import { useState,useEffect } from "react"
import AddTask from "./addTask"
import TaskList from "./taskList"
const App=()=>{
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [priority,setPriority]=useState("");
  const [tasks,setTasks]=useState(()=>{
      const savedTasks=localStorage.getItem("task");
      return savedTasks ? JSON.parse(savedTasks):[];
  })
  

  const submitHandler=(e)=>{
    e.preventDefault()
    const newTask={title,content,priority,completed:false}
    setTasks([...tasks,newTask])
    setTitle("")
    setContent("")
  
  }
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(tasks))
  },[tasks])
  
  return(
    <form onSubmit={submitHandler} className="h-screen w-screen flex flex-col md:flex-row">
      <AddTask title={title} setTitle={setTitle} content={content} setContent={setContent} priority={priority} setPriority={setPriority}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </form>
  )
}
export default App
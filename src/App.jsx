import AddTask from "./addTask"
import TaskList from "./taskList"
const App=()=>{
  return(
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <AddTask/>
      <TaskList/>
    </div>
  )
}
export default App
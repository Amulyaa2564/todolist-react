const TaskList=({tasks,setTasks} )=>{
    const deleteTask=function(idx){
        const copyTask=[...tasks]
        copyTask.splice(idx,1)
        setTasks(copyTask)
    }
    return(
        <div className="  flex-1 p-2">
            <h1>Tasks</h1>
            {tasks.map((task,idx)=>{
                let priorityColor="";
                    if(task.priority== "High"){
                        priorityColor = " bg-red-400";
                    }
                    else if(task.priority=="Medium"){
                        priorityColor=" bg-yellow-200";
                    }
                    else if (task.priority === "Least") {
                        priorityColor = " bg-green-200";
                    }
                return(
                    <div key={idx} className={`border p-3 rounded-2xl m-2 ${priorityColor} flex items-center text-black ${task.completed ? "opacity-40" : priorityColor}`}>
                    <div>
                        <input type="checkbox" className="scale-125" onChange={()=>{
                            const updated=[...tasks];
                            updated[idx].completed= !updated[idx].completed;
                            setTasks(updated);
                        }}/>
                    </div>
                    <div className="flex  justify-between w-full">
                        <div>
                        <h2 className="text-2xl font-semibold ml-3">{task.title}</h2>
                        <p className="ml-3">{task.content}</p>
                        </div>
                        <div>
                        <p className="text-lg ml-2 mb-2 rounded-b-full">{task.priority}</p>
                        <button className="bg-yellow-400" type="button" onClick={()=>{
                            deleteTask(idx)
                        }}>Delete</button>
                        </div>
                        
                    </div>
                    
                    
                    
                </div>
                )
                
            })}
                
        </div>
    )
}
export default TaskList
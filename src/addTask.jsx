const AddTask=({title,setTitle,content,setContent,priority,setPriority})=>{
    const titleChange=(e)=>{
            setTitle(e.target.value)
        }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const priorityChange=(e)=>{
        setPriority(e.target.value)
    }
    return(
        <div className="flex-1">
            <h1 className="ml-2 p-2">To Do List</h1>
            <div>
                <div className="flex flex-col w-full max-w-md p-3">
                    <input type="text" placeholder="Enter task title" value={title} className="border w-full p-2 mb-2" onChange={titleChange}/>
                    <textarea placeholder="Enter task description" className="border w-full h-80 p-2 mb-2 " value={content} onChange={contentChange}></textarea>
                    <button type="submit" className="bg-gray-700  w-full mb-2">Add Note</button>
                    <div className="flex gap-2 ml-2">
                        <div>
                        <input type="radio" id="high" name="priority" value="High" className="mr-2" onChange={priorityChange} checked={priority==="High"}/>
                        <label htmlFor="high" className=" text-red-500">High Priority</label>
                        </div>
                        <div>
                        <input type="radio" id="medium" name="priority" value="Medium" className="mr-2"
                        onChange={priorityChange} checked={priority==="Medium"}/>
                        <label htmlFor="medium" className="text-yellow-600">Medium Priority</label>
                        </div>
                        <div>
                        <input type="radio" id="least" name="priority" value="Least" className="mr-2"
                        onChange={priorityChange} checked={priority==="Least"}/>
                        <label htmlFor="least" className="text-green-600">Least Priority</label>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default AddTask
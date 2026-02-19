const AddTask=()=>{
    return(
        <div className="border border-black  flex-1">
            <h1 className="ml-6 p-2">To Do List</h1>
            <form>
                <div className="flex flex-col w-full max-w-md p-3">
                    <input type="text" placeholder="Enter task title" className="border w-full p-2 ml-4"/>
                    <textarea placeholder="Enter task description" className="border w-full h-80 p-2 m-4"></textarea>
                    <button type="submit" className="bg-gray-700 m-4 w-full">Add Note</button>
                    <div className="flex gap-5 ml-5">
                        <div>
                        <input type="radio" id="high" name="priority" className="mr-2"/>
                        <label htmlFor="high" className=" text-red-500">High Priority</label>
                        </div>
                        <div>
                        <input type="radio" id="medium" name="priority" className="mr-2"/>
                        <label htmlFor="medium" className="text-yellow-600">Medium Priority</label>
                        </div>
                        <div>
                        <input type="radio" id="least" name="priority" className="mr-2"/>
                        <label htmlFor="least" className="text-green-600">Least Priority</label>
                        </div>
                    </div>
                </div>
                
                
            </form>
        </div>
    )
}
export default AddTask
const getAlltasks = (req,res)=>{
    res.send("All Items")
}

const createTask = (req,res)=>{
    res.send("Create task")
    
}

const getTask = (req,res)=>{
    const id = req.params.id
    res.send(`get a single task with id ${id}`)
    // res.send(`${id}`)
}

const updateTask = (req,res)=>{
    res.send("Update tasks")
}

const deleteTask= (req,res)=>{
    res.send("Delete Task")
}


module.exports = {
    getAlltasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
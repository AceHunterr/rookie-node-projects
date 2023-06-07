const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// Middleware 
app.use(express.json())  // Without this json format mein nahi aayega data

app.get('/',(req,res)=>{
    res.send("welcome to our page") 
    res.end()
})

app.use('/api/v1/tasks',tasks)




const port = 3000
app.listen(port,console.log(`Server is listening to ${port}...`))
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB =  require('./db/connect')
require('dotenv').config()

// Middleware 
app.use(express.json())  // Without this json format mein nahi aayega data

app.get('/',(req,res)=>{
    res.send("welcome to our page") 
    res.end()
})

app.use('/api/v1/tasks',tasks)



const port = 3000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening to ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
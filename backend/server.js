require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')

//express app
const app=express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts/',workoutRoutes)

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //start server
    app.listen(process.env.PORT, ()=>{
      console.log('Server running at http://localhost:4000',process.env.PORT)
    })
  })
  .catch((error)=>{
    console.log(error)
  })

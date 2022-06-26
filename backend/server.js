require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')

app.use(express.json())

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts/',workoutRoutes)

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
  .then(() => {
    app.listen(process.env.PORT, ()=>{
      console.log('Server running at http://localhost:4000',process.env.PORT)
    })
  })
  .catch(err => console.error(err))


app.listen(process.env.PORT, ()=>{
  console.log('Server running at http://localhost:4000',process.env.PORT)
})


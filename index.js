require('dotenv').config()
const express = require('express')


const app = express()
app.use(express.json())


app.get('/fio',(req,res)=>{
    res.send(`Артем Захаров`)
})



app.get('/',(req,res)=>{
    res.send(`hello world`)
})

        app.listen(process.env.PORT || 8080, () => console.log(`Server start no ${process.env.PORT || 8080}`))
   

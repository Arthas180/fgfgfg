require('dotenv').config()
const express = require('express')


const app = express()
app.use(express.json())


app.get('/fio',(req,res)=>{
    res.send(`Артем Захаров`)
})

app.post('/',async(req,res)=>{
    const {login,password} = req.body
    await User.create({login,password})
})

app.get('/',(req,res)=>{
    res.send(`hello world`)
})

       async function start() {
           try {
               await sequelize.authenticate();
               await sequelize.sync()
               app.listen(PORT || 8080, () => console.log(`Server start no ${PORT}`))
           } catch (error) {
               console.log(error)
           }
       }
       start()
       

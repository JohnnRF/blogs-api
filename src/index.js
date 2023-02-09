//packages 
const express = require('express')
const app = express()

//middlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use(require('./routes/index'))

//Server execution 
app.get('/', (req,res)=>{res.send('Welcome')})

app.listen(5528)

console.log('Server runnig on: http://localhost:3000');
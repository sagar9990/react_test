const express = require('express')
const cors = require('cors')
const db = require('./models')
const employees = require('./routes/Employees')
const app = express()


app.use(express.json());
app.use(cors())
app.use("/employees",employees)

db.sequelize.sync().then(()=>{
    app.listen(8011,()=>{
        console.log("server is running at 8011");
    })
})
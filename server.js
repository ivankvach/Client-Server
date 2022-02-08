const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/addTask', (req,res) => {
    if (req.body.task != "") {
    const ADD_QUERY = `INSERT INTO taskk (task, taskF) VALUES ('${req.body.task}', '${req.body.taskF}')`;
    connection.query(ADD_QUERY, (err)=>{
       if(err) console.log(err)
       else  res.send('task has been added')
    })
}
})

app.listen(4000, ()=> {
    console.log('running for port 4000')
})
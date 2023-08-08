import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


const array=[];
const workArray = [];

app.get('/', (req,res) => {
    const task = req.body["task"];
    res.render('today',{data:array, task:task});
})

app.get('/work', (req,res)=>{
    const workTask = req.body["task"];
    res.render('work', {workData:workArray, workTask: workTask,});
})

app.post('/', (req, res)=>{
    const inputTask = req.body["task"];
    array.push(inputTask);
    res.render("today", {data:array});
    
});

app.post('/work', (req, res)=>{
    const workTask = req.body["tasks"];
    workArray.push(workTask);
    res.render("work", {workTask:workTask, workData:workArray});
    
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

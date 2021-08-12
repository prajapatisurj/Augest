const express =require('express')
const app=express();
const mongoose = require('mongoose')
const routerUrls=require('./routes/routes')
const cors= require('cors')



mongoose.connect('mongodb://localhost:27017/signup_form',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("error connecting to Database");
})


app.use(express.json());
app.use(cors());
app.use('/app',routerUrls);

app.listen(5000,()=>{
    console.log('server is running at http://localhost:5000')
})
import express from 'express';
import dotenv from 'dotenv';
import connections from './database/db.js'
import routes from './routes/apiRoutes.js'
import cors from 'cors';
import path from 'path'
dotenv.config();

const __dirname = path.resolve();

const port = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/',routes)

app.use(express.static(path.join(__dirname,'./client/dist')));
app.get('*',function(_,res){
res.sendFile(path.join(__dirname, "./client/dist/index.html"), function(err){
    res.status(500).send(err)
})
})

connections();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)  // replace with your port number
})
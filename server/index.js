import express from 'express';
import dotenv from 'dotenv';
import connections from './database/db.js'
import routes from './routes/apiRoutes.js'
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/',routes)

connections();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)  // replace with your port number
})
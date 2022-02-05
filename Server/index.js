import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/Posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://sulubsson:sulubsson123@sulubsson.jql9o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//to prevent future errors
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
//
.then(()=> app.listen(PORT,() => console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

//to prevent future errors
// mongoose.set('useFindAndModify', false);

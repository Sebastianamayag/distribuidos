const express =require('express');
const morgan = require('morgan');
const cors = require('cors');
const app =express();
//bring conecction since database.js
const {mongoose} =require('./database');
//Settings
//Port configure
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
//Routes

app.use('/api/students',require('./routes/students.routes'));


//Starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})
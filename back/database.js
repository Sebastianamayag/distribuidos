//module conect to mongo db
const mongoose=require('mongoose');

const URI="mongodb://localhost/Colegio";
mongoose.connect(URI)
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.log(err));
module.exports=mongoose;
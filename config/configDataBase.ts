const mongoose=require('mongoose')

function dbConnection(url:any){
    console.log(url);
    mongoose.connect(url)
        .then(() => console.log('Connected'))
        .catch(() => console.log('failed'));
}

export default dbConnection;

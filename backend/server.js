const dotenv=require('dotenv');
const  mongoose  = require('mongoose');
dotenv.config({path:'./config.env'});
const app=require('./app');

mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db=mongoose.connection;
db.once('open',()=>{console.log("DATABASE CONNECTED")})
app.listen(process.env.PORT,()=>{
    console.log(`Api running on ${process.env.PORT}`);
})
process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('Unhandled error occluded, shutting the server down');
    server.close(() => {
      process.exit(1);
    });
  });
  process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    console.log('Uncaught exception has occluded, shutting the server down');
    server.close(() => {
      process.exit(1);
    });
  });
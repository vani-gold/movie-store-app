// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// // dotenv.config({ path: './config.env'});
// dotenv.config(); 

// const app =  require('./app');

// // console.log(process.env);

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
// .then(() => console.log('DB CONNECTION SUCCESSFULL'));

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`)
// });
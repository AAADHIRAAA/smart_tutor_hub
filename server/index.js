const express = require('express');
const cors = require('cors');

const connectDB = require('./connection');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const ejs = require('ejs');
const path=require('path');



const app = express();
const PORT = 5000; 
connectDB()
  .then(() => {
    // Set up your middleware, routes, and other server configurations here
  
    const userRouter = require('./routes/userRouter');
    const adminRouter = require('./routes/adminRouter');



/*--------------------app usage and set------------------ */

// // Handle CORS
app.use(cors());

app.options('*', cors());



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use('/api/v1/users',userRouter);
app.use('/api/v1/admin',adminRouter);

app.get('/', (req, res) => {
  res.send('App is running on port 5000..');
});
/*---------------------------routing-------------------------- */


  // Start the server
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

module.exports = app

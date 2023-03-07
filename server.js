const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
// app.use(require('cors')());
// app.use(require('helmet')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
// Passport
// require('./config/passport')(passport);

// Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
}


// app.use(express.static('../client/build'));
// app.use('/flags', express.static('../client/build/flags'));

//////////////////////// Routes///////////////////////////
app.use('/api/v1', require('./routes/crypto'));
//////////////////////////////////////////////////////////



app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
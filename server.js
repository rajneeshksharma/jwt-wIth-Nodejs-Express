const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwtauth',{ useNewUrlParser: true });

const PORT = 3000;
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
   res.json({
      "Tutorial": "Welcome to the Node express JWT Tutorial"
   });
});
// // view engine setup
// app.set('views', path.join(__dirname + '/public'));
// app.set('views', path.join(__dirname + '/views')); 
// app.set('view engine', 'ejs');

// app.engine('html', require('ejs').renderFile);


app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});
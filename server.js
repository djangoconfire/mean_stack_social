var express=require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var User=require('./app/model/user');
var bodyParser=require('body-parser');
var router=express.Router();
var appRoutes=require('./app/routes/api')(router);
// Create the application
var app=express();

// Server running port
var port=process.env.PORT || 8080;

// Middleware (Order of middleware is important)

// start logging the request
app.use(morgan('dev'));
app.use(bodyParser.json());// start parsing the data
app.use(bodyParser.urlencoded({extended:true}));


// Routes

//use the routes
app.use('/api',appRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/meantuts',function(err){
	if(err){
		console.log('Not connected to mongodb ' + err);
	}else{
		console.log('successfully connected to mongodb')
	}

})




app.listen(port, function(){
	console.log('server running on port : ' + port);
});
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');

var UserSchema=new Schema({
	username :{type:String,lowercase:true,required:true,unique:true},
	password :{type:String,required:true},
	email : {type:String,reuired:true,lowercase:true,unique:true}
});

// hashing the password
UserSchema.pre('save',function(next){
	var user=this;
	bcrypt.hash(user.password,function(err,hash){
		if(err) return next(err)
		user.passowrd=hash;
		next()	
	})
})

module.exports=mongoose.model('User',UserSchema);
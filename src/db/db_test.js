const md5 = require('blueimp-md5');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/test";


mongoose.connect(url);

const conn = mongoose.connection;

conn.on('connected', function(){
    console.log("yeah!!");
})

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true},

});

const UserModel = mongoose.model('user', userSchema);

function testSave(){
    const userModel = new UserModel({username: 'Tom', password:md5('123'), type:'client'});
    userModel.save(function(error, user){
        console.log('save()', error, user);
    })
}

testSave();
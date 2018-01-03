var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/moviesite';
var db;
mongoClient.connect(mongoUrl, (error, database)=>{
	if(error){
		throw error;
	}else{
		db = database;
		console.log('connected to mongo')
	}

});
/* GET home page. */
router.get('/', function(req, res, next) {
	db.collection('movies').find().toArray((error, results)=>{
		res.json(results);
	})
  
});

module.exports = router;

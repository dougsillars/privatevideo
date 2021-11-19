require('dotenv').config();
//import express from 'express';
const express = require('express');
//express for the website and pug to create the pages
const app = express();
const pug = require('pug');
bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug');
var request = require("request");





//apivideo
const apiVideo = require('@api.video/nodejs-sdk');

//if you chnage the key to sandbox or prod - make sure you fix the delegated toekn on the upload page
const apiVideoKey = process.env.apiProductionKey;



app.get('/', (req, res) => {
	

	
	
	//get private video URL:
	const client = new apiVideo.Client({ apiKey: apiVideoKey });
	let videoId = "vitkytkieTnEvUjKE0VQpd2";
	let privateVideo = client.videos.get(videoId);

	privateVideo.then(function(pvtVideo){
		console.log(pvtVideo);
		var playerUrl= (pvtVideo.assets.player);
		console.log("playerUrl",(playerUrl));
		var player = {"playerUrl": playerUrl};
		return res.render('index', player);

	}).catch((err) => {
		console.log(err);
	});



});


//testing on 3030
app.listen(process.env.PORT || 3090, () =>
  console.log('Example app listening on port 3090!'),
);
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
    // Note: after client disconnect, the subprocess will cause an Error EPIPE, which can only be caught this way.
});



	
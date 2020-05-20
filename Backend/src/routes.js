const express = require('express');
const route = express.Router();
const GetinfoVideo = require('./Controllers/GetInfoVideo');
const ConvertController = require('./Controllers/ConvertController');

route.get('/mp3download', ConvertController.mp3);
route.get('/mp4download', ConvertController.mp4);

route.get('/info', GetinfoVideo.info);


module.exports = route;
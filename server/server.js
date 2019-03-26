if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

// ===== Middleware ====
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'));
	});
}

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// ==== Adding DB Schemas ====
var Sheet = require('./db/models/Sheet');
var Current = require('./db/models/Current');

// ==== Routes ====

// ==== Submit a Pool Sheet ====
app.post('/submit', function(req, res) {
	Sheet.create({
		username: req.body.username,
		group: req.body.group,
		jonSnow: req.body.jonSnow,
		sansaStark: req.body.sansaStark,
		aryaStark: req.body.aryaStark,
		branStark: req.body.branStark,
		daenerysTargaryen: req.body.daenerysTargaryen,
		cerseiLannister: req.body.cerseiLannister,
		jaimeLannister: req.body.jaimeLannister,
		tyrionLannister: req.body.tyrionLannister,
		yaraGreyjoy: req.body.yaraGreyjoy,
		theonGreyjoy: req.body.theonGreyjoy,
		melisandre: req.body.melisandre,
		jorahMormont: req.body.jorahMormont,
		hound: req.body.hound,
		mountain: req.body.mountain,
		samwellTarley: req.body.samwellTarley,
		gilly: req.body.gilly,
		littleSam: req.body.littleSam,
		varys: req.body.varys,
		brienneOfTarth: req.body.brienneOfTarth,
		davosSeaworth: req.body.davosSeaworth,
		bronn: req.body.bronn,
		pod: req.body.pod,
		tormund: req.body.tormund,
		greyworm: req.body.greyworm,
		missandei: req.body.missandei,
		gendry: req.body.gendry,
		beric: req.body.beric,
		euronGreyjoy: req.body.euronGreyjoy
	})
		.then(function(result) {
			res.json(result);
		})
		.catch(function(err) {
			res.json(err);
		});
});

//===== Route to Pull All Sheets =====
app.get('/find', function(req, res) {
	Sheet.find({}).then((dbItem) => res.json(dbItem)).catch((err) => res.json(err));
});

// ===== Route to Find Sheets by Group. =====
app.get('/find/group/:group', function(req, res) {
	Sheet.find({
		group: req.params.group
	})
		.then((dbItem) => res.json(dbItem))
		.catch((err) => res.json(err));
});

// ===== Submit Current Character List =====
app.post('/current', function(req, res) {
	Current.create({
		jonSnow: req.body.jonSnow,
		sansaStark: req.body.sansaStark,
		aryaStark: req.body.aryaStark,
		branStark: req.body.branStark,
		daenerysTargaryen: req.body.daenerysTargaryen,
		cerseiLannister: req.body.cerseiLannister,
		jaimeLannister: req.body.jaimeLannister,
		tyrionLannister: req.body.tyrionLannister,
		yaraGreyjoy: req.body.yaraGreyjoy,
		theonGreyjoy: req.body.theonGreyjoy,
		melisandre: req.body.melisandre,
		jorahMormont: req.body.jorahMormont,
		hound: req.body.hound,
		mountain: req.body.mountain,
		samwellTarley: req.body.samwellTarley,
		gilly: req.body.gilly,
		littleSam: req.body.littleSam,
		varys: req.body.varys,
		brienneOfTarth: req.body.brienneOfTarth,
		davosSeaworth: req.body.davosSeaworth,
		bronn: req.body.bronn,
		pod: req.body.pod,
		torumnd: req.body.torumnd,
		greyworm: req.body.greyworm,
		missandei: req.body.missandei,
		gendry: req.body.gendry,
		beric: req.body.beric,
		euronGreyjoy: req.body.euronGreyjoy
	})
		.then((dbItem) => res.json(dbItem))
		.catch((err) => res.json(err));
});

// ===== Get the Current Character List =====
app.get('/current', function(req, res) {
	Current.find({}).then((dbItem) => res.json(dbItem)).catch((err) => res.json(err));
	// console.log(dbItem);
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GoT_Pool');

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});

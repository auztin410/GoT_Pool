var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CurrentSchema = new Schema({
	jonSnow: {
		type: Object
	},
	sansaStark: {
		type: Object
	},
	aryaStark: {
		type: Object
	},
	branStark: {
		type: Object
	},
	daenerysTargaryen: {
		type: Object
	},
	cerseiLannister: {
		type: Object
	},
	jaimeLannister: {
		type: Object
	},
	tyrionLannister: {
		type: Object
	},
	yaraGreyjoy: {
		type: Object
	},
	theonGreyjoy: {
		type: Object
	},
	melisandre: {
		type: Object
	},
	jorahMormont: {
		type: Object
	},
	hound: {
		type: Object
	},
	mountain: {
		type: Object
	},
	samwellTarley: {
		type: Object
	},
	gilly: {
		type: Object
	},
	littleSam: {
		type: Object
	},
	varys: {
		type: Object
	},
	brienneOfTarth: {
		type: Object
	},
	davosSeaworth: {
		type: Object
	},
	bronn: {
		type: Object
	},
	pod: {
		type: Object
	},
	tormund: {
		type: Object
	},
	greyworm: {
		type: Object
	},
	missandei: {
		type: Object
	},
	gendry: {
		type: Object
	},
	beric: {
		type: Object
	},
	euronGreyjoy: {
		type: Object
	}
});

var Current = mongoose.model('Current', CurrentSchema);

module.exports = Current;

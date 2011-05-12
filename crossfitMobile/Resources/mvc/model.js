//***********************************************************
//MODEL
//***********************************************************

var global_AppName = "Crossfit Trainer";

//Link for info http://www.crossfit.com/cf-info/faq.html

//Add the New Girls
/*
Annie
Double-unders
Sit-ups
50-40-30-20 and 10 rep rounds; for time

Eva	
Run 800 meters
2 pood KB swing, 30 reps
30 pullups
5 rounds for time.

Kelly	
Run 400 meters
30 box jump, 24 inch box
30 Wall ball shots, 20 pound ball
Five rounds for time

Lynne
Bodyweight bench press (e.g., same amount on bar as you weigh)
pullups
5 rounds for max reps. There is NO time component to this WOD.

Nicole
Run 400 meters
Max rep Pull-ups
As many rounds as possible in 20 minutes.
Note number of pull-ups completed for each round.
*/

/*
var scripts = [
			['getReady','pullUps20', 'rest10', 'pullUps20', 'rest10','sitUps40', 'rest10', 'squats50' ],
			['getReady','pullUps20', 'rest10', 'pullUps20', 'rest10','sitUps40', 'rest10', 'squats50' ]
			];
*/

//sliteType: 'start','training','results'

var slides = [
	{slideName:'getReady', audio:'../audio/getReady.wav', slideType:'start',instructions:'Get Ready To Start', timerType:'down', durationMin:'0', durationSec:'5'},
	{slideName:'finish', audio:'../audio/finish.wav', slideType:'results',instructions:'Finish', timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'comingsoon', audio:'../audio/comingsoon.wav', slideType:'training',instructions:'Coming Soon', timerType:'down', durationMin:'0', durationSec:'5'},
	{slideName:'pullUps5down5', audio:'../audio/getReady.wav', slideType:'training',instructions:'10 Pull-Ups before the timer ends.',  timerType:'down', durationMin:'5', durationSec:'0'},
	{slideName:'pullUps9', audio:'../audio/9pullupsfortime.wav', slideType:'training',instructions:'9 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps2', audio:'../audio/2pullupsfortime.wav', slideType:'training',instructions:'2 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps10', audio:'../audio/10pullupsfortime.wav', slideType:'training',instructions:'10 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps20', audio:'../audio/20pullupsfortime.wav', slideType:'training',instructions:'20 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps30', audio:'../audio/30pullupsfortime.wav', slideType:'training',instructions:'30 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps50', audio:'../audio/50pullupsfortime.wav', slideType:'training',instructions:'50 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps100', audio:'../audio/100pullupsfortime.wav', slideType:'training',instructions:'100 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps21', audio:'../audio/21pullupsfortime.wav', slideType:'training',instructions:'21 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps12', audio:'../audio/12pullupsfortime.wav', slideType:'training',instructions:'12 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps15', audio:'../audio/15pullupsfortime.wav', slideType:'training',instructions:'15 Pull-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'rest3', audio:'../audio/getReady.wav', slideType:'training',instructions:'rest',  timerType:'down', durationMin:'3', durationSec:'0'},
	{slideName:'rest10', audio:'../audio/getReady.wav', slideType:'training',instructions:'rest',  timerType:'down', durationMin:'0', durationSec:'10'},
	{slideName:'rest30', audio:'../audio/getReady.wav', slideType:'training',instructions:'rest',  timerType:'down', durationMin:'0', durationSec:'30'},
	{slideName:'rest60', audio:'../audio/getReady.wav', slideType:'training',instructions:'rest',  timerType:'down', durationMin:'0', durationSec:'60'},
	{slideName:'pushUps10down5', audio:'../audio/getReady.wav', slideType:'training',instructions:'10 Push-Ups for before the timer ends.',  timerType:'down', durationMin:'5', durationSec:'0'},
	{slideName:'pushUps3', audio:'../audio/3pushupsfortime.wav', slideType:'training',instructions:'3 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps10', audio:'../audio/10pushupsfortime.wav', slideType:'training',instructions:'10 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps15', audio:'../audio/15pushupsfortime.wav', slideType:'training',instructions:'15 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps30', audio:'../audio/30pushupsfortime.wav', slideType:'training',instructions:'10 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps20', audio:'../audio/20pushupsfortime.wav', slideType:'training',instructions:'20 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps50', audio:'../audio/50pushupsfortime.wav', slideType:'training',instructions:'50 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUps100', audio:'../audio/100pushupsfortime.wav', slideType:'training',instructions:'100 Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUpsHandStand21', audio:'../audio/21handstandpushupsfortime.wav', slideType:'training',instructions:'21 HandStand Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUpsHandStand15', audio:'../audio/15handstandpushupsfortime.wav', slideType:'training',instructions:'15 HandStand Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUpsHandStand9', audio:'../audio/9handstandpushupsfortime.wav', slideType:'training',instructions:'9 HandStand Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pushUpsHandStand5', audio:'../audio/5handstandpushupsfortime.wav', slideType:'training',instructions:'5 HandStand Push-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps4', audio:'../audio/4situpsfortime.wav', slideType:'training',instructions:'4 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps10', audio:'../audio/10situpsfortime.wav', slideType:'training',instructions:'10 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps25', audio:'../audio/25situpsfortime.wav', slideType:'training',instructions:'25 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps40', audio:'../audio/40situpsfortime.wav', slideType:'training',instructions:'40 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps50', audio:'../audio/50situpsfortime.wav', slideType:'training',instructions:'50 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'sitUps100', audio:'../audio/100situpsfortime.wav', slideType:'training',instructions:'100 Sit-Ups for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'run100', audio:'../audio/100mrunfortime.wav', slideType:'training',instructions:'100m run Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'run400', audio:'../audio/400mrunfortime.wav', slideType:'training',instructions:'400m run Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'squats15down5', audio:'../audio/15squatsbeforetimeends.wav', slideType:'training',instructions:'15 Squats for before the timer ends.',  timerType:'down', durationMin:'5', durationSec:'0'},
	{slideName:'squats5', audio:'../audio/5squatsfortime.wav', slideType:'training',instructions:'5 Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'squats25', audio:'../audio/25squatsfortime.wav', slideType:'training',instructions:'25 Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'squats10Up', audio:'../audio/10squatsfortime.wav', slideType:'training',instructions:'10 Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'squats50Up', audio:'../audio/50squatsfortime.wav', slideType:'training',instructions:'50 Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'squats100Up', audio:'../audio/100squatsfortime.wav', slideType:'training',instructions:'100 Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'overheadsquats95Up15', audio:'../audio/getReady.wav', slideType:'training',instructions:'15 95lbs Overhead Squats for time Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'deadLift225Up21', audio:'../audio/dealdlift225up21fortime.wav', slideType:'training',instructions:'Deadlift 225 lbs 21 times.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'deadLift225Up15', audio:'../audio/dealdlift225up15fortime.wav', slideType:'training',instructions:'Deadlift 225 lbs 15 times.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'deadLift225Up9', audio:'../audio/dealdlift225up9fortime.wav', slideType:'training',instructions:'Deadlift 225 lbs 9 times.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'clean135Up21', audio:'../audio/clean135up21fortime.wav', slideType:'training',instructions:'Clean Lift 135lbs 21 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'clean135Up15', audio:'../audio/clean135up15fortime.wav', slideType:'training',instructions:'Clean Lift 135lbs 15 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'clean135Up9', audio:'../audio/clean135up9fortime.wav', slideType:'training',instructions:'Clean Lift 135lbs 9 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'ringdipsUp21', audio:'../audio/21ringdipsfortime.wav', slideType:'training',instructions:'21 Ring dips Press button when finished.',  timerType:'down', durationMin:'0', durationSec:'0'},
	{slideName:'ringdipsUp15', audio:'../audio/15ringdipsfortime.wav', slideType:'training',instructions:'15 Ring dips Press button when finished.',  timerType:'down', durationMin:'0', durationSec:'0'},
	{slideName:'ringdipsUp9', audio:'../audio/9ringdipsfortime.wav', slideType:'training',instructions:'9 Ring dips Press button when finished.',  timerType:'down', durationMin:'0', durationSec:'0'},
	{slideName:'thruster95Up21', audio:'../audio/getReady.wav', slideType:'training',instructions:'Clean Lift 135lbs 21 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'thruster95Up15', audio:'../audio/getReady.wav', slideType:'training',instructions:'Clean Lift 135lbs 21 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'thruster95Up9', audio:'../audio/getReady.wav', slideType:'training',instructions:'Clean Lift 135lbs 21 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'thruster45Up50', audio:'../audio/getReady.wav', slideType:'training',instructions:'Thruster 34lbs 50 times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'kettlebellSwing21Up', audio:'../audio/21kettlebellswingfortime.wav', slideType:'training',instructions:'21 kettlebell swings times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'snatch135Up30', audio:'../audio/getReady.wav', slideType:'training',instructions:'30 135lb Snatch times Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'pullUps2Push5Squat10down10', audio:'../audio/getReady.wav', slideType:'training',instructions:'As many 2 Pull-ups + 5 Push-ups + 10 Squats. Before the time ends.',  timerType:'down', durationMin:'10', durationSec:'0'},
	{slideName:'pullUps5Push10Squat15down10', audio:'../audio/getReady.wav', slideType:'training',instructions:'As many 5 Pull-ups + 10 Push-ups + 15 Squats. Before the time ends.',  timerType:'down', durationMin:'15', durationSec:'0'},
	{slideName:'pullUps5Push10Squat15down5', audio:'../audio/getReady.wav', slideType:'training',instructions:'As many 5 Pull-ups + 10 Push-ups + 15 Squats. Before the time ends.',  timerType:'down', durationMin:'5', durationSec:'0'},
	{slideName:'row100', audio:'../audio/100mrowfortime.wav', slideType:'training',instructions:'100m run Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},

	{slideName:'wallball50', audio:'../audio/50fwallballsfortime.wav', slideType:'training',instructions:'50 Wall ball run Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'},
	{slideName:'oneLegSquat10', audio:'../audio/10onelegsquatsfortime.wav', slideType:'training',instructions:'10 1-legged squats Press button when finished.',  timerType:'up', durationMin:'0', durationSec:'0'}
];

// create table view data object
var woddata = [
	{
		title:'Angie', youtubesearchchannel:'jayrhodes', youtubesearch:'angie', timerType:'up', totaltimemin:'0',
		//descript:'100 Pull-ups 100 + Push-ups 100 + Sit-ups + 100 Squats.',
		descript:'Pull-ups + Push-ups + Sit-ups + Squats.',
		instructions:'For Time Complete all reps of each exercise before moving to the next.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'pull-ups, push-ups, sitUps, squats',
		scriptList:{
			"Easy":['getReady','pullUps10', 'pushUps10', 'sitUps10', 'squats10Up','finish' ],
			"Medium":['getReady','pullUps50', 'pushUps50', 'sitUps50', 'squats50Up','finish' ],
			"Hard":['getReady','pullUps100', 'pushUps100', 'sitUps100', 'squats100Up','finish' ] 
		}
	},
	{
		title:'Barbara', youtubesearchchannel:'dlrmsgud',youtubesearch:'Barbara',timerType:'up', totaltimemin:'0',
		//descript:'20 Pull-ups + 30 Push-ups + 40 Sit-ups+ 50 Squats Rest precisely three minutes between each round.', 
		descript:'Pull-ups + Push-ups + Sit-ups + Squats Rest precisely three minutes between each round.',
		instructions:'5 rounds, time each round.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'pull-ups, push-ups, sitUps, squats',
		scriptList:{
			"Easy":['getReady','pullUps2', 'pushUps3', 'sitUps4', 'squats5', 'rest3', 'pullUps2', 'pushUps3', 'sitUps4', 'squats5', 'rest3','pullUps2', 'pushUps3', 'sitUps4', 'squats5', 'rest3','pullUps2', 'pushUps3', 'sitUps4', 'squats5', 'rest3','pullUps2', 'pushUps3', 'sitUps4', 'squats5', 'rest3','finish' ],
			"Medium":['getReady','pullUps10', 'pushUps15', 'sitUps25', 'squats25', 'rest3', 'pullUps10', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','finish' ],
			"Hard":['getReady','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3', 'pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','pullUps20', 'pushUps30', 'sitUps40', 'squats50', 'rest3','finish' ]
		}
	},
	{
		title:'Chelsea', youtubesearchchannel:'teamcrossfitusa',youtubesearch:'Chelsea',timerType:'down', totaltimemin:'30',
		//descript:'5 Pull-ups + 10 Push-ups + 15 Squats.',
		descript:'Pull-ups + Push-ups + Squats.',
		instructions:'Each min on the min for 30 min.',
		hasChild:true, test:'../components/aboutWodView.js',
		exercises:'pull-ups, push-ups, sitUps, squats',
		scriptList:{
			"Easy":['getReady', 'pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5', 'finish' ],
			"Medium":['getReady', 'pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5', 'finish' ],
			"Hard":['getReady', 'pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','pullUps5down5', 'pushUps10down5', 'squats15down5','finish' ]
		}
	},
	{
		title:'Cindy', youtubesearchchannel:'PeopleJam',youtubesearch:'Cindy',timerType:'down', totaltimemin:'20',
		descript:'Pull-ups + Push-ups + Squats.', 
		instructions:'As many rounds as possible in 20 min.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'pull-ups, push-ups, squats',
		scriptList:{
			"Easy":['getReady', 'pullUps2Push5Squat10down10', 'finish' ],
			"Medium":['getReady', 'pullUps5Push10Squat15down10', 'finish' ],
			"Hard":['getReady', 'pullUps5Push10Squat15down5', 'finish' ]
		}
	},
	/*
	{
		title:'Diane', youtubesearchchannel:'CrossFitKOA',youtubesearch:'Diane',timerType:'up', totaltimemin:'0',
		descript:'Deadlift 225 lbs + Handstand push-ups.',
		instructions:'21-15-9 reps, for time.',
		hasChild:true, test:'../components/aboutWodView.js',
		exercises:'deadlifts, handstand push-ups',
		//script:['getReady','deadLift225Up21','pushUpsHandStand21','deadLift225Up15','pushUpsHandStand15','deadLift225Up9','pushUpsHandStand9','finish' ],
		scriptList:{
			"Easy":['getReady','deadLift225Up21','pushUpsHandStand21','deadLift225Up15','pushUpsHandStand15','deadLift225Up9','pushUpsHandStand9','finish' ],
			"Medium":['getReady','deadLift225Up21','pushUpsHandStand21','deadLift225Up15','pushUpsHandStand15','deadLift225Up9','pushUpsHandStand9','finish' ],
			"Hard":['getReady','deadLift225Up21','pushUpsHandStand21','deadLift225Up15','pushUpsHandStand15','deadLift225Up9','pushUpsHandStand9','finish' ]
		}
	},
	{
		title:'Elizabeth', youtubesearchchannel:'PeopleJam',youtubesearch:'Elizabeth',timerType:'up', totaltimemin:'0',descript:'Clean 135 lbs + Ring Dips.', instructions:'21-15-9 reps, for time.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'clean, ring dips',
		script:['getReady', 'clean135Up21', 'ringdipsUp21', 'clean135Up15', 'ringdipsUp15', 'clean135Up9', 'ringdipsUp9', 'finish' ],
		scriptList:{
			"Easy":['getReady', 'clean135Up21', 'ringdipsUp21', 'clean135Up15', 'ringdipsUp15', 'clean135Up9', 'ringdipsUp9', 'finish' ],
			"Medium":['getReady', 'clean135Up21', 'ringdipsUp21', 'clean135Up15', 'ringdipsUp15', 'clean135Up9', 'ringdipsUp9', 'finish' ],
			"Hard":['getReady', 'clean135Up21', 'ringdipsUp21', 'clean135Up15', 'ringdipsUp15', 'clean135Up9', 'ringdipsUp9', 'finish' ]
		}
	},
	{
		title:'Fran', youtubesearchchannel:'PeopleJam',youtubesearch:'Fran',timerType:'up', totaltimemin:'0',descript:'Thruster 95 lbs + Pull-ups.', instructions:'21-15-9 reps, for time.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'thrusters pull-ups',
		script:['getReady', 'thruster95Up21' , 'pullUps21','thruster95Up15' , 'pullUps15','thruster95Up9' , 'pullUps9','finish' ],
		scriptList:{
			"Easy":['getReady', 'thruster95Up21' , 'pullUps21','thruster95Up15' , 'pullUps15','thruster95Up9' , 'pullUps9','finish' ],
			"Medium":['getReady', 'thruster95Up21' , 'pullUps21','thruster95Up15' , 'pullUps15','thruster95Up9' , 'pullUps9','finish' ],
			"Hard":['getReady', 'thruster95Up21' , 'pullUps21','thruster95Up15' , 'pullUps15','thruster95Up9' , 'pullUps9','finish' ]
		}
	},
	{
		title:'Grace', youtubesearchchannel:' redoak91',youtubesearch:'Grace',timerType:'up', totaltimemin:'0',descript:'Clean and Jerk 135 lbs.', instructions:'30 reps for time.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'clean and jerk',
		script:['comingsoon', 'finish' ],
		scriptList:{
			"Easy":['comingsoon', 'finish' ],
			"Medium":['comingsoon', 'finish' ],
			"Hard":['comingsoon', 'finish' ]
		}
	},
	{
		title:'Helen', youtubesearchchannel:'PeopleJam',youtubesearch:'Helen',timerType:'up', totaltimemin:'0',descript:'400 meter run + 1.5 pood Kettlebell swing x 21 + Pull-ups 12 reps.', instructions:'3 rounds for time', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'run, kettlebell, pull-ups',
		script:['getReady', 'run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12', 'finish' ],
		scriptList:{
			"Easy":['getReady', 'run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12', 'finish' ],
			"Medium":['getReady', 'run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12', 'finish' ],
			"Hard":['getReady', 'run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12','run400', 'kettlebellSwing21Up', 'pullUps12', 'finish' ]
		}
	},
	{
		title:'Isabel', youtubesearchchannel:'CrossfitMarina',youtubesearch:'Isabel',timerType:'up', totaltimemin:'0',descript:'Snatch 135 pounds.', instructions:'30 reps for time.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'snatch',
		script:['getReady', 'snatch135Up30', 'finish' ],
		scriptList:{
		"Easy":['getReady', 'snatch135Up30', 'finish' ],
		"Medium":['getReady', 'snatch135Up30', 'finish' ],
		"Hard":['getReady', 'snatch135Up30', 'finish' ]
		}
	},
	{
		title:'Jackie', youtubesearchchannel:'Transform1234',youtubesearch:'Jackie',timerType:'up', totaltimemin:'0',descript:'1000 meter row + Thruster 45 lbs (50 reps) + Pull-ups (30 reps).', instructions:'For time', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'row, thruster, pull-ups',
		script:['getReady', 'row100', 'thruster45Up50', 'pullUps30', 'finish' ],
		scriptList:{
			"Easy":['getReady', 'row100', 'thruster45Up50', 'pullUps30', 'finish' ],
			"Medium":['getReady', 'row100', 'thruster45Up50', 'pullUps30', 'finish' ],
			"Hard":['getReady', 'row100', 'thruster45Up50', 'pullUps30', 'finish' ]
		}
	},*/
	{
		title:'Karen', youtubesearchchannel:'jayrhodes',youtubesearch:'Karen',timerType:'up', totaltimemin:'0',
		descript:'Wall-ball shots.', instructions:'For time', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'wall ball',
		scriptList:{
			"Easy":['getReady', 'wallball50', 'finish' ],
			"Medium":['getReady', 'wallball50', 'wallball50','wallball50', 'finish' ],
			"Hard":['getReady', 'wallball50', 'wallball50','wallball50','wallball50','wallball50', 'finish' ]
		}
	},/*
	{
		title:'Linda (aka "3 bars of death")', youtubesearchchannel:'MBSCrossFit',youtubesearch:'Linda',timerType:'up',totaltimemin:'0',descript:'Deadlift 1 1/2 BW + Bench BW + Clean 3/4 BW.', instructions:'10/9/8/7/6/5/4/3/2/1 rep + rounds for time', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'deadlift, bench, clean',
		script:['comingsoon', 'finish' ],
		scriptList:{
			"Easy":['comingsoon', 'finish'  ],
			"Medium":['comingsoon', 'finish'  ],
			"Hard":['comingsoon', 'finish'  ]
		}
	},
	{
		title:'Mary', youtubesearchchannel:'CrossFitCentral',youtubesearch:'',timerType:'down', totaltimemin:'20',
		descript:'5 Handstand push-ups + 10 1-legged squats + 15 Pull-ups.', instructions:'As many rounds as possible in 20 min.', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'handstand push-ups, 1-legged squats, pull-ups',
		script:[ 'getReady','pushUpsHandStand5', 'oneLegSquat10', 'pullUps15','finish' ],
		scriptList:{
			"Easy":['getReady','pushUpsHandStand5', 'oneLegSquat10', 'pullUps15','finish' ],
			"Medium":['getReady','pushUpsHandStand5', 'oneLegSquat10', 'pullUps15','finish' ],
			"Hard":['getReady','pushUpsHandStand5', 'oneLegSquat10', 'pullUps15','finish' ]
		}
	},*/
	{
		title:'Nancy', youtubesearchchannel:'PeopleJam',youtubesearch:'Nancy',timerType:'up', totaltimemin:'0',descript:'400 meter run + Overhead squat 95 lbs x 15.', instructions:'5 rounds for time', hasChild:true, test:'../components/aboutWodView.js',
		exercises:'run, squats',
		script:['getReady', 'run400', 'overheadsquats95Up15', 'finish' ],
		scriptList:{
			"Easy":['getReady', 'run100', 'overheadsquats95Up15', 'run100', 'overheadsquats95Up15', 'run100', 'overheadsquats95Up15', 'run100', 'overheadsquats95Up15', 'run100', 'overheadsquats95Up15', 'finish' ],
			"Medium":['getReady', 'run200', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'finish' ],
			"Hard":['getReady', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'run400', 'overheadsquats95Up15', 'finish']
		}
	}
];




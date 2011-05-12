Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');
Titanium.include('stopwatchup.js');
Titanium.include('stopwatchdown.js');

var win = Ti.UI.currentWindow;
backgroundColor = skin_backgroundcolor;

var scrollView;
if (Titanium.Platform.name == 'android') 
{
	var scrollView = Ti.UI.createView({
		layout:'vertical',
		backgroundColor: skin_backgroundcolor
	});
}//end android
else
{
	
	var scrollView = Titanium.UI.createScrollView({
		contentWidth:'320',
		contentHeight:'auto',
		top:0,
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:false,
		layout:'vertical',
		//borderRadius:10,
		backgroundColor: skin_backgroundcolor
	});
}

//HEADER VIEW
var header = Ti.UI.createView({height:'auto',layout:'vertical'});

//NAME
var headerLabel = Ti.UI.createLabel( { textAlign:'center', height:'auto', text:win.wodName, color:skin_mainTextColor, font:{ fontWeight:'bold',fontSize:30, fontFamily:'Helvetica Neue'}});
header.add(headerLabel);

scrollView.add( header );

var spacer1 = Ti.UI.createView({height:'10', layout:'vertical'});
scrollView.add( spacer1 );

//Description
var descriptionView = Ti.UI.createView({height:'auto', layout:'vertical'});
var descriptLabel= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:'Description', color:skin_mainTextColor, font:{fontWeight:'bold',fontSize:15} });
descriptionView.add( descriptLabel);
var descriptContent= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:win.wodDescription,color:skin_mainTextColor, font:{fontWeight:'normal',fontSize:15, fontFamily:'Helvetica Neue' } });
descriptionView.add( descriptContent);
scrollView.add(descriptionView);

var spacer2 = Ti.UI.createView({height:'10', layout:'vertical'});
scrollView.add( spacer2 );

//Instructions
var instructionView = Ti.UI.createView({height:'auto', layout:'vertical'});
var instructLabel= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:"Instructions", color:skin_mainTextColor, font:{fontWeight:'bold',fontSize:15, fontFamily:'Helvetica Neue'} });
instructionView.add( instructLabel);
var instructContent= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:win.wodInstructions, color:skin_mainTextColor, font:{fontWeight:'normal',fontSize:15, fontFamily:'Helvetica Neue'} });
instructionView.add( instructContent);
scrollView.add(instructionView);

var spacer3 = Ti.UI.createView({height:'10', layout:'vertical'});
scrollView.add( spacer3 );
	
// FOOTER
var footer = Ti.UI.createView({height:'auto', layout:'vertical' });

var easyWorkoutButton = Ti.UI.createButton({
	title:'Start Work Out Easy',
	width:240,
	top:10,
	height:45,
	font:{
		fontSize:18,
		fontWeight:'bold'
	},
	textAlign:'center'
});

easyWorkoutButton.addEventListener('click',function(){
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:win.wodIndex,
		//wodScript:woddata[win.wodIndex].script,
		wodScript:woddata[win.wodIndex].scriptList.Easy,
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	
});
footer.add( easyWorkoutButton );

var mediumWorkoutButton = Ti.UI.createButton({
	title:'Start Work Out Medium',
	width:240,
	top:10,
	height:45,
	font:{
		fontSize:18,
		fontWeight:'bold'
	},
	textAlign:'center'
});

mediumWorkoutButton.addEventListener('click',function(){
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:win.wodIndex,
		//wodScript:woddata[win.wodIndex].script,
		wodScript:woddata[win.wodIndex].scriptList.Medium,
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	
});
footer.add( mediumWorkoutButton );

var hardWorkoutButton = Ti.UI.createButton({
	title:'Start Work Out Hard',
	width:240,
	top:10,
	height:45,
	font:{
		fontSize:18,
		fontWeight:'bold'
	},
	textAlign:'center'
});

hardWorkoutButton.addEventListener('click',function(){
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:win.wodIndex,
		//wodScript:woddata[win.wodIndex].script,
		wodScript:woddata[win.wodIndex].scriptList.Hard,
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	
});
footer.add( hardWorkoutButton );

/*
var startWorkoutButton = Ti.UI.createButton({
	title:'Start Work Out',
	width:210,
	top:10,
	height:60,
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});
startWorkoutButton.addEventListener('click',function(){
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:win.wodIndex,
		//wodScript:woddata[win.wodIndex].script,
		wodScript:woddata[win.wodIndex].scriptList.Easy,
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	
});
footer.add( startWorkoutButton );
*/

scrollView.add(footer);

win.add(scrollView);


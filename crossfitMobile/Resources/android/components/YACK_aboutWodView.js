Titanium.include('../mvc/model.js' );
Titanium.include('stopwatchup.js');
Titanium.include('stopwatchdown.js');

//ANDROID aboutWodView.js

var win = Ti.UI.currentWindow;

var scrollView = Ti.UI.createView({
	layout:'vertical',
	backgroundColor: 'white'
});

//HEADER VIEW
var header = Ti.UI.createView({height:'auto',layout:'vertical'});

//NAME
var headerLabel = Ti.UI.createLabel( { textAlign:'center', height:'auto', text:win.wodName, color:'black', font:{ fontWeight:'bold',fontSize:30, fontFamily:'Helvetica Neue'}});
header.add(headerLabel);

scrollView.add( header );

var spacer1 = Ti.UI.createView({height:'20', layout:'vertical'});
scrollView.add( spacer1 );

//Description
var descriptionView = Ti.UI.createView({height:'auto', layout:'vertical'});
var descriptLabel= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:'Description', color:'black', font:{fontWeight:'bold',fontSize:15} });
descriptionView.add( descriptLabel);
var descriptContent= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:win.wodDescription,color:'black', font:{fontWeight:'normal',fontSize:15, fontFamily:'Helvetica Neue' } });
descriptionView.add( descriptContent);
scrollView.add(descriptionView);

var spacer2 = Ti.UI.createView({height:'20', layout:'vertical'});
scrollView.add( spacer2 );

//Instructions
var instructionView = Ti.UI.createView({height:'auto', layout:'vertical'});
var instructLabel= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:"Instructions", color:'black', font:{fontWeight:'bold',fontSize:15, fontFamily:'Helvetica Neue'} });
instructionView.add( instructLabel);
var instructContent= Ti.UI.createLabel({ left:10, textAlign:'center', height:'auto', text:win.wodInstructions, color:'black',font:{fontWeight:'normal',fontSize:15, fontFamily:'Helvetica Neue'} });
instructionView.add( instructContent);
scrollView.add(instructionView);

var spacer3 = Ti.UI.createView({height:'20', layout:'vertical'});
scrollView.add( spacer3 );

	//Start Workout View
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var timerView = Ti.UI.createView({height:'auto', layout:'vertical'});
	
	var display_lbl =  Titanium.UI.createLabel({
		text: win.wodTotalTimeMin + ":00",
		height:40,
		width:220,
		//top:100,
		//left:0,
		color:'#fff',
		borderRadius:10,
		backgroundColor:'#000',
		font:{
			fontSize:30,
			fontWeight:'bold'
		},
		textAlign:'center'
	});
	timerView.add(display_lbl);	
	
	var timerControlsView = Ti.UI.createView( {height:'auto'});
	
	
	var start_btn = Titanium.UI.createButton({
		title:'Start',
		width:100,
		height:30,
		top:5,
		left:5,	
		font:{
			fontSize:20,
			fontWeight:'bold'
		},
		textAlign:'center'
	});

	var stop_btn = Titanium.UI.createButton({
		title:'Stop',
		width:100,
		height:30,
		top:5,
		left:110,
		font:{
			fontSize:20,
			fontWeight:'bold'
		},
		textAlign:'center'
	});
	
	var set_btn = Titanium.UI.createButton({
		title:'Reset',
		width:100,
		height:30,
		top:5,
		left:220,	
		font:{
			fontSize:20,
			fontWeight:'bold'
		},
		textAlign:'center'
	});
	
	timerControlsView.add(start_btn);
	timerControlsView.add(stop_btn);
	timerControlsView.add(set_btn);
	timerView.add( timerControlsView );
	var sw;
	if ( win.wodTimerType =='up')
	{
		sw = new stopwatchup(0,0,
			function() {
				display_lbl.text = sw.time.m+" : "+sw.time.s;
			}
		);
	}//end else
	else // count down timer
	{
		sw = new stopwatchdown(win.wodTotalTimeMin,0,
			function() {
				display_lbl.text = sw.time.m+" : "+sw.time.s;
			},
			function() {
				alert("The time is up!");
			}
		);
	}//end else
	
set_btn.addEventListener('click',function(){
	display_lbl.text = win.wodTotalTimeMin+":" + 0;
	sw.set(win.wodTotalTimeMin,0);
});

stop_btn.addEventListener('click',function(){
	sw.stop();
});

start_btn.addEventListener('click',function(){
	sw.start();
});

scrollView.add(timerView);

// FOOTER
var footer = Ti.UI.createView({height:'auto', layout:'vertical' });
var videoButton = Titanium.UI.createButton({
	title:'Watch Videos',
	width:200,
	height:30,
	top:5,
	//left:0,
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});
videoButton.addEventListener('click',function(){
	var newWin = Titanium.UI.createWindow({
		url:"youtubemovieviewer.js",
		YoutubeSearch:win.YoutubeSearch,
		YoutubeSearchChannel:win.YoutubeSearchChannel,
		title:win.wodYoutubeSearch
	});
		Titanium.UI.currentTab.open(newWin,{animated:true});	
});
if (Titanium.Network.online)
{
	footer.add( videoButton );	
}
scrollView.add(footer);
win.add(scrollView);




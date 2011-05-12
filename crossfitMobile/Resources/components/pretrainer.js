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

// FOOTER
var footer = Ti.UI.createView({height:'auto', layout:'vertical' });

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

win.add(scrollView);


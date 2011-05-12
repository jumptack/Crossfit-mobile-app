Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');

var win = Ti.UI.currentWindow;
win.backgroundImage='../images/backgrounds/gradientbackground.png';
win.backgroundColor = skin_backgroundcolor;

var messageTop = Ti.UI.createLabel({
	text:global_AppName,
	color:skin_mainTextColor,
	width:'auto',
	height:'auto',
	font:{fontSize:30,fontWeight:'bold'},
	top:20
});
win.add(messageTop);

var splashImage = Ti.UI.createImageView({
	image:'../images/backgrounds/splash.png',
	top: 80,
	height:'auto',
	width:'auto'
});
win.add( splashImage );

var messageVersion = Ti.UI.createLabel({
	text:'1.16',
	color:skin_mainTextColor,
	width:'auto',
	height:'auto',
	font:{fontSize:8,fontWeight:'bold'},
	bottom:20,
	left:10
});
win.add(messageVersion);
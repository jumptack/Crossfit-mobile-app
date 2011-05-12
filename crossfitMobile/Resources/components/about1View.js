Titanium.include('../mvc/model.js' );

var win = Ti.UI.currentWindow;

var messageTop = Ti.UI.createLabel({
	text:'ABOUT 1 SCREEN',
	color:'#fff',
	width:'auto',
	height:'auto',
	font:{fontSize:30,fontWeight:'bold'},
	top:20
});
win.add(messageTop);

var messageBottom = Ti.UI.createLabel({
	text:'Template',
	color:'#fff',
	width:'auto',
	height:'auto',
	font:{fontSize:30,fontWeight:'bold'},
	bottom:20
});
win.add(messageBottom);


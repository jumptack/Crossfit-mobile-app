Titanium.include('mvc/services.js');
Titanium.include('mvc/model.js' );
Titanium.include('skin.js');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor(skin_backgroundcolor);

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// Tab Home
var winHome = Titanium.UI.createWindow({  
	url:'main/home.js',
	backgroundImage:'images/backgrounds/gradientbackground.png'
});

var tabHome = Titanium.UI.createTab({
    icon:'images/icons/icon_home.png',
    title:'Home',
    window:winHome
});

// Tab Events
var winVideos = Titanium.UI.createWindow({  
	//url:'main/videos.js',
	YoutubeSearchChannel:"Crossfit",
	YoutubeSearch:"",
	url:'components/youtubemovieviewer.js',
	backgroundImage:'images/backgrounds/gradientbackground.png'
});
var tabVideos = Titanium.UI.createTab({
    icon:'images/icons/icon_screen.png',
    title:'Videos',
    window:winVideos
});

// Tab Wods
var winWods = Titanium.UI.createWindow({
   	url:'main/wods.js',
	backgroundImage:'images/backgrounds/gradientbackground.png'
});
var tabWods = Titanium.UI.createTab({
    icon:'images/icons/icon_bolt.png',
    title:'WODs',
    window:winWods
});

// Tab Wods
var winRandomWods = Titanium.UI.createWindow({
   	url:'main/randomwod.js',
	backgroundImage:'images/backgrounds/gradientbackground.png'
});
var tabRandomWods = Titanium.UI.createTab({
    icon:'images/icons/icon_bolt.png',
    title:'Random WOD',
    window:winRandomWods
});

//initialize the database:
//initModel();
initServices();

//  add tabs
tabGroup.addTab(tabHome);
tabGroup.addTab(tabWods);
if (Titanium.Platform.name != 'android') //picker is not available on the android
{
	//tabGroup.addTab(tabRandomWods);
}
tabGroup.addTab(tabVideos);

// open tab group
//tabGroup.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
tabGroup.open();

//use Ti.App.fireEvent('show_indicator', {title:'YACK ...'});
//Create custom loading Indicator
var indWin = null;
var actInd = null;
function showIndicator(title){
	indicatorShowing = true;
	indWin = Titanium.UI.createWindow({
		height:150,
		width:150
	});
	//black view
	var indView = Ti.UI.createView({
		height:150,
		width:150,
		backgorundColor:'#000',
		borderRadius:10,
		opacity:0.7
	});
	indWin.add(indView);
	
	//loading indicator
	actInd = Ti.UI.createActivityIndicator({
		style:Titanium.UI.iPhone.ActivityindicatorStyle.BIG,
		height:30,
		width:30
	});
	indWin.add(actInd);
	
	//message
	var message = Ti.UI.createLabel({
		text:title,
		color:'#fff',
		width:'auto',
		height:'auto',
		font:{fontSize:20,fontWeight:'bold'},
		bottom:20
	});
	indWin.add(message);
	indWin.open();
	actInd.show();
};//end showIndicator

function hideIndicator(){
	actInd.hide();
	indWin.close({opacity:0,duration:500});
	indicatorShowing = false;
};

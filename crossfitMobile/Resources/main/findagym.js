Titanium.include('../mvc/model.js' );

var win = Titanium.UI.currentWindow;

// CREATE MAP VIEW
var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region: {latitude:33.74511, longitude:-84.38993, latitudeDelta:0.01, longitudeDelta:0.01},
	animate:true,
	regionFit:true,
	userLocation:true
});

function setData()
{
	Ti.API.log( "map.js setData" );
	
	//remove any annotations in the current map view
	//mapview.removeAnnotation(mountainView);
		
	for ( i=0; i < workTicketData.workTicketList.length; i ++)
	{
		var ticket = workTicketData.workTicketList[i];
		Ti.API.log( "ticket -->"+ticket);
		Ti.API.log( "ticket['myAthleteDeviceID'] --> " + ticket.myAthleteDeviceID );
		//var row = Ti.UI.createTableViewRow({hasChild:true,title:runner['name'], comp:'../components/athletedetail.js'});
		//prodata.push(row);
		
		var newAnnotation = Titanium.Map.createAnnotation({
			latitude:ticket.latitude,
			longitude:ticket.longitude,
			title: ticket.name,
			subtitle: ticket.myAthleteDeviceID.toString(),
			pincolor:Titanium.Map.ANNOTATION_RED,
			animate:true,
			leftButton: '../images/appcelerator_small.png',
			myid:ticket.id // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
		});
		
		mapview.addAnnotation( newAnnotation );
		
	}//end for
	
}//end setData


win.add(mapview);

//
// CREATE ANNOTATIONS
var myLocation = Titanium.Map.createAnnotation({
	latitude:37.390749,
	longitude:-122.081651,
	title:"title: myLocation",
	subtitle:'subtitle: myLocation',
	pincolor:Titanium.Map.ANNOTATION_RED,
	animate:true,
	leftButton: '../images/appcelerator_small.png',
	myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

// PRE-DEFINED REGIONS
var regionAtlanta = {latitude:33.74511,longitude:-84.38993,animate:true,latitudeDelta:0.04, longitudeDelta:0.04};
var regionSV = {latitude:37.337681,longitude:-122.038193,animate:true,latitudeDelta:0.04, longitudeDelta:0.04};

// TOOLBAR BUTTONS
var flexSpace = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

// button to change map type to SAT
var sat = Titanium.UI.createButton({
	title:'Sat',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
sat.addEventListener('click',function()
{
	// set map type to satellite
	mapview.setMapType(Titanium.Map.SATELLITE_TYPE);
});

// button to change map type to STD
var std = Titanium.UI.createButton({
	title:'Std',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
std.addEventListener('click',function()
{
	// set map type to standard
	mapview.setMapType(Titanium.Map.STANDARD_TYPE);
});

// button to change map type to HYBRID
var hyb = Titanium.UI.createButton({
	title:'Hyb',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
hyb.addEventListener('click',function()
{
	// set map type to hybrid
	mapview.setMapType(Titanium.Map.HYBRID_TYPE);
});

// button to zoom-in
var zoomin = Titanium.UI.createButton({
	title:'+',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
zoomin.addEventListener('click',function()
{
	mapview.zoom(1);
});

// button to zoom-out
var zoomout = Titanium.UI.createButton({
	title:'-',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});
zoomout.addEventListener('click',function()
{
	mapview.zoom(-1);
});

//add the buttons to the tool bar at the bottom.
win.setToolbar([flexSpace,std,flexSpace,hyb,flexSpace,sat,flexSpace,zoomin,flexSpace,zoomout,flexSpace]);


// EVENT LISTENERS
// region chnage event listener
mapview.addEventListener('regionChanged',function(evt)
{
	Titanium.API.info('maps region has updated to '+evt.longitude+','+evt.latitude);
});

var annotationAdded = false;

// map view click event listener
mapview.addEventListener('click',function(evt)
{
	// map event properties 
	var annotation = evt.annotation;
	var title = evt.title;
	var clickSource = evt.clicksource;
	
	// custom annotation attribute
	var myid = evt.annotation.myid;
	
	Titanium.API.info('MAPVIEW EVENT - you clicked on '+title+' with click source = '+clickSource);
	
	// use custom event attribute to determine if atlanta annotation was clicked
	if (myid == 3 && evt.clicksource == 'rightButton')
	{
		//  change the annotation on the fly
		evt.annotation.rightView = Titanium.UI.createView({width:20,height:20,backgroundColor:'red'});
		evt.annotation.leftView = Titanium.UI.createView({width:20,height:20,backgroundColor:'#336699'});
		evt.annotation.title = "Atlanta?";
		evt.annotation.pincolor = Titanium.Map.ANNOTATION_GREEN;
		evt.annotation.subtitle = 'Appcelerator used to be near here';
		evt.annotation.leftButton = 'images/appcelerator_small.png';		
	}//end if
	if (myid == 2 && annotationAdded==false)
	{
		Ti.API.info('adding myLocation');
		mapview.addAnnotation(myLocation);
		annotationAdded=true;
	}//end if
	else
	{
		Ti.API.info('removing myLocation');
		mapview.removeAnnotation(myLocation);
		annotationAdded=false;
	}//end else
});

//Refresh on RT NAV (iPhone ONLY)
var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
refresh.addEventListener('click', function()
{
	//tableview.setData([]);
	//startAutoUpdate();
	setTimeout(function()
	{
		setData();
	},1000);
});

Ti.UI.currentWindow.rightNavButton = refresh;

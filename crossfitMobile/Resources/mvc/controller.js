
/*
Titanium.App.addEventListener('eventDataDone', function()
{
	//Pretent we received the data and throw it back
	Titanium.API.info('controler.js eventDataDone recieved' );
	Ti.API.info( "services_myAthlete.DataEventData :" + services_myAthlete.DataEventData );
});
*/

Titanium.App.addEventListener('getProData', function()
{
	//Pretent we received the data and throw it back
	Titanium.API.info('app.js getProData recieved' );
	Titanium.App.fireEvent('getProDataComplete',modelPro.getItems() );
});

Titanium.App.addEventListener('getFriendData', function()
{
	//Pretent we received the data and throw it back
	Titanium.API.info('app.js getFriendData recieved' );
	Ti.App.fireEvent('getFriendDataComplete', modelFriend.getItems() );
	//Titanium.App.fireEvent('getFriendDataComplete',{data:['1','2','3']});
});

Titanium.App.addEventListener('getProDataComplete', function(e)
{
	Ti.API.info('app.js getFriendDataComplete ....  yack ' + e );
});

//Show and Hide the loading Indicator
Titanium.App.addEventListener('show_indicator', function(e){
	if (e.title == null) {e.title = 'loading';}
	if (indicatorShowing == true) { hideIndicator();}
	showIndicator(e.title);	
});

Titanium.App.addEventListener('hide_indicator', function(e){
	hideIndicator();
});

//Show Connection Required
Titanium.App.addEventListener('connection_required', function(e){
	var conWin = Titanium.UI.createWindow({
		//backgroundImage:'images/con_req.png'
	});
	conWin.open({fullscreen:true});
});

//Show Location Required
Titanium.App.addEventListener('location_required', function(e){
	var locWin = Titanium.UI.createWindow({
		//backgroundImage:'images/loc_req.png'
	});
	locWin.open({fullscreen:true});
});

//Handle Friend Data Events , ADD, REMOVE.
//Handle navigation events
Titanium.App.addEventListener("addFriend", function(e) {	
	//Titanium.App.fireEvent("addFriend",{data:['name':'matt','email':'matt@matt.com','myAthleteDeviceID':'006325']});		
  	Ti.API.log("RECIEVED addFriend: " + e.data.email  );
	services_myAthlete.Athlete( e.data.email );
	//model_friendData.create(e.data);
});

Titanium.App.addEventListener("serviceAthleteResponse", function(e) {	
	//hr.onload -->{"locates":[{"locate":{"athleteID":"myathlete@trackmyathlete.com","firstName":"My","lastName":"Athlete","sex":"T","birthDate":"2005-11-12","devID":"001234","athleteDeviceStartDate":"2005-11-12 00:00:00","athleteDeviceEndDate":"2020-12-31 00:00:00"}}]}
	Ti.API.log("RECIEVED serviceAthleteResponse " );
	//Ti.API.log( e.locates );
	model_friendData.create(e.locates[0]);
});

Titanium.App.addEventListener("removeFriend", function(e) {
  	Ti.API.log("RECIEVED removeFriend" );
	//Ti.API.log("RECIEVED removeFriend" + e.data.name + ' ' + e.data.email + ' ' + e.data.myAthleteDeviceID  );
});

//DEVICE info
Titanium.App.addEventListener("serviceDevResponse", function(e) {
	//Ti.API.log("RECIEVED serviceDevResponse " + e );
});

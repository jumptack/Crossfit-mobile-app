Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');

var win = Ti.UI.currentWindow;
win.backgroundImage='../images/backgrounds/gradientbackground.png';

var customTableData =[];

function customTableBuild()
{
	for ( i=0; i < woddata.length; i ++)
	{
		var _wod = woddata[i];
		
		var row1 = Ti.UI.createTableViewRow({
			hasChild:true,
			test:_wod.test,
			wodName:_wod.title,
			totaltimemin:_wod.totaltimemin,
			timerType:_wod.timerType,
			youtubesearch:_wod.youtubesearch,
			youtubesearchchannel:_wod.youtubesearchchannel,
			descript:_wod.descript,
			instructions:_wod.instructions
		});
		row1.className = 'wodDataRow';
		
		row1.backgroundColor = skin_backgroundcolor;
		row1.selectedBackgroundColor = skin_backgroundcolor;
		row1.height = 60;
		var WodName = Ti.UI.createLabel({
			color:skin_mainTextColor,
			text:_wod.title,
			font:{fontSize:20, fontWeight:'bold'},
			top:3,
			left:10,
			height:30,
			width:100
		});
		row1.add(WodName);
		
		var exerciesList = Ti.UI.createLabel({
			color:skin_mainTextColor,
			text:_wod.exercises,
			font:{fontSize:14},
			top:26,
			left:15,
			height:25,
			width:350
		});
		row1.add(exerciesList);
		customTableData.push( row1 );
	}//end for
	
}//end setData

customTableBuild();
// create table view
var tableview = Titanium.UI.createTableView({
	//data:woddata
	backgroundColor:skin_backgroundcolor,
	data:customTableData
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.wodName,
			backgroundImage:'images/backgrounds/gradientbackground.png',
			wodIndex:e.index,
			wodName:e.row.wodName,
			wodTotalTimeMin:e.row.totaltimemin,
			wodTimerType:e.row.timerType,
			YoutubeSearch:e.row.youtubesearch,
			YoutubeSearchChannel:e.row.youtubesearchchannel,
			wodDescription:e.row.descript,
			wodInstructions:e.row.instructions
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}//end if
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);



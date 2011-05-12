Titanium.include('../mvc/model.js' );
Titanium.includ('../skin.js');

var win = Ti.UI.currentWindow;
win.backgroundImage='../images/backgrounds/gradientbackground.png';

// create table view data object
var data = [
	{title:'YouTube Movie1', hasChild:true, youtubeGUID: 1, test:'../components/youTubeMovieViewer.js'},
	{title:'YouTube Movie2', hasChild:true, youtubeGUID: 1, test:'../components/youTubeMovieViewer.js'},
	{title:'YouTube Movie3', hasChild:true, youtubeGUID: 1, test:'../components/youTubeMovieViewer.js'},
	{title:'Local Movie1', hasChild:true, fileRef: "yack", test:'../components/movieViewer.js'},
	{title:'Local Movie2', hasChild:true, fileRef: "yack", test:'../components/movieViewer.js'},
	{title:'Local Movie3', hasChild:true, fileRef: "yack", test:'../components/movieViewer.js'}
];

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}//end if
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);



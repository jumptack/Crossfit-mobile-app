Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');

var win = Ti.UI.currentWindow;
win.backgroundImage='../images/backgrounds/gradientbackground.png';
win.backgroundColor=skin_backgroundcolor;

var column1 = Ti.UI.createPickerColumn({opacity:0});
for ( i=0; i < woddata.length; i ++)
{
	var _wod = woddata[i];
	column1.addRow(Ti.UI.createPickerRow({title:_wod.title,wodIndex:i}));
}//end for
/* 
var column2 = Ti.UI.createPickerColumn({opacity:0});
column2.addRow(Ti.UI.createPickerRow({title:'Peter B',bId:0}));
column2.addRow(Ti.UI.createPickerRow({title:'Mary B',bId:1}));
column2.addRow(Ti.UI.createPickerRow({title:'John 2',bId:2}));
*/
var pickerFilter = Ti.UI.createPicker({top:0});

// turn on the selection indicator (off by default)
pickerFilter.selectionIndicator = true;

pickerFilter.setSelectedRow(0,2, true);

//pickerFilter.add([column1, column2]);
pickerFilter.add(column1);
win.add(pickerFilter);
 
pickerFilter.addEventListener('change',function(e){
    Ti.App.Properties.setInt("filterA", e.columnIndex[0].aId);
     // Ti.App.Properties.setInt("filterB", e.columnIndex[1].bId);
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var randomButton = Ti.UI.createButton({
	title:'Random WOD',
	width:210,
	bottom:80,
	height:60,
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});
randomButton.addEventListener('click',function(e){
	/*
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:win.wodIndex,
		wodScript:woddata[win.wodIndex].script,
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	
	*/
	var rand_no = Math.ceil((woddata.length -1)*Math.random());
	rand_no = rand_no -1;
	pickerFilter.setSelectedRow(0,rand_no,true);
});
win.add(randomButton);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var startWorkoutButton = Ti.UI.createButton({
	title:'Start Work Out',
	width:210,
	bottom:10,
	height:60,
	font:{
		fontSize:20,
		fontWeight:'bold'
	},
	textAlign:'center'
});
startWorkoutButton.addEventListener('click',function(e){
	windex = e.columnIndex[0].wodIndex;
	
	var newWin = Titanium.UI.createWindow({
		url:"trainerWindow.js",
		wodIndex:e.columnIndex[0].wodIndex,
		wodScript:woddata[e.columnIndex[0].wodIndex].scriptList.Easy,
		//wodScript:woddata[win.wodIndex].script,
		//wodScript:woddata[win.wodIndex].scriptList['Easy'],
		title:"Trainer Window"
	});
	
	Titanium.UI.currentTab.open(newWin,{animated:true });	

});
win.add(startWorkoutButton);




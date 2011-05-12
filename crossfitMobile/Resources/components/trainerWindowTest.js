
//this would be windows.js
 
/*
var chapterOne = function( slideNum ){
	
	var currentSlideNum = slideNum;
	
    var chapterOneWindow = Ti.UI.createWindow();
	
	var instructionLabel = Ti.UI.createLabel({
	  text: "yack",
	  textAlign:'center',
	  font:{ fontSize:24, fontWeight:'bold'},
	  height:'auto',
	  width:'auto',
	  top:5
	});
	
  var big_btn = Ti.UI.createButton({
		title:'NEXT',
		width:100,
		height:30,
		top:5,
		font:{
			fontSize:20,
			fontWeight:'bold'
		},
		textAlign:'center'
	});
	
	big_btn.addEventListener('click',function(){
		sw.stop();
		=Ti.App.fireEvent('nextSlide', {csn:currentSlideNum + 1})
		//use Ti.App.fireEvent('show_indicator', {title:'YACK ...'});
	});
	
})
    //The rest of the window content, this is just an example
    
    chapterOneWindow.add(instructionLabel);
	chapterOneWindow.add( big_btn);
    return chapterOneWindow;

	////Ti.App.fireEvent('nextSlide', {currentSlideName:'pushups'})
};

//Ti.include('windows.js');

Titanium.App.addEventListener('whatever',function(){
    var windowToOpen = chapterOne(e.csn);
    windowToOpen.open({}); //and try to add an animation, I have not tried, but it might work
 	
    //what to do when the window is close?
    windowToOpen.addEventListener('close',function(){
    //some code here if you need it
    });
});

*/

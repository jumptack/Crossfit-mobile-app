Titanium.include('../mvc/model.js' );

var win = Ti.UI.currentWindow;

var images = [];
for (var c=0;c<20;c++)
{
	images[c]='../images/imageview/'+c+'.jpg';
}

if (Titanium.Platform.name == 'android') 
{
	var imageView = Titanium.UI.createImageView({
		url:images[0],
		width:261,
		height:178,
		top:20
	});

	win.add(imageView);

	var l = Titanium.UI.createLabel({
		text:'Click Image',
		bottom:30,
		color:'#999',
		height:'auto',
		width:300,
		textAlign:'center'
	});
	win.add(l);
	/*
	function clicker()
	{
		Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked me!'}).show();
		l.text = "Try again. You shouldn't get alert and the image should be different";
		imageView.url = 'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png';
		imageView.removeEventListener('click',clicker);
	}
	
	imageView.addEventListener('click', clicker);
	*/
}//end if
else  //IPHONE 
{
	// create coverflow view with images
	var view = Titanium.UI.createCoverFlowView({
		images:images,
		backgroundColor:'#000'
	});

	// click listener - when image is clicked
	view.addEventListener('click',function(e)
	{
		Titanium.API.info("image clicked: "+e.index+', selected is '+view.selected);	
	});

	// change listener when active image changes
	view.addEventListener('change',function(e)
	{
		Titanium.API.info("image changed: "+e.index+', selected is '+view.selected);	
	});
	win.add(view);
	
	// move scroll view left
	var left = Titanium.UI.createButton({
		image:'../images/icons/icon_arrow_left.png'
	});
	left.addEventListener('click', function(e)
	{
		var i = view.selected - 1;
		if (i < 0) 
		{
			i = 0;
		}
		view.selected = i;
	});
	
	// move scroll view right
	var right = Titanium.UI.createButton({
		image:'../images/icons/icon_arrow_right.png'
	});
	right.addEventListener('click', function(e)
	{
		var i = view.selected + 1;
		if (i > images.length)
		{
			i = images.length - 1; 
		}
		view.selected = i;
	});
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	win.setToolbar([flexSpace,left,right,flexSpace]);	
}//end else iphone






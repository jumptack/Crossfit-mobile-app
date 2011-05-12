var win = Titanium.UI.currentWindow;

var activeMovie = Titanium.Media.createVideoPlayer({
	contentURL:'../video/movie.mp4',
	backgroundColor:'#111',
	movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
	scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
});

/*
activeMovie.addEventListener('load',function()
{
	// animate label
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(3);
	movieLabel.animate({transform:t, duration:500, color:'red'},function()
	{
		var t = Titanium.UI.create2DMatrix();
		movieLabel.animate({transform:t, duration:500, color:'white'});
	});
});

activeMovie.addEventListener('complete',function()
{
	Titanium.UI.createAlertDialog({title:'Movie', message:'Completed!'}).show();
	win.close();
});
*/
activeMovie.play();

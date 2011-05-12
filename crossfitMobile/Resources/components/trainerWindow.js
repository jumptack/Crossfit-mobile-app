Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');
Titanium.include('stopwatchup.js');
Titanium.include('stopwatchdown.js');

var win = Ti.UI.currentWindow;

/* 

//JSON FILE
{
	"en_us":
	{
		"hello": "Hello World!",
		"goodbye" : "GOOD BYE"
	},
	"es_es":
	{
		"hello": "Hola Mundo!",
		"goodbye" : "Hasta Luego!"
	}
}


{
  "Water": {
    "description": "Sounds simple but always check to make sure you have the expected water supply",
    "hint": "See you later!"
  },
  "es_es": {
    "hello": "¡Hola Mundo!",
    "goodbye": "¡Hasta luego!"
  }
}

*/

var currentScript = win.wodScript;

var scriptStepIndex = 0;
var currentSlideView = null;

/*
var audioCount5 = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var audioCount4 = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var audioCount3 = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var audioCount1 = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var audioCount1 = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var wodIntroAudio = Titanium.Media.createSound({url:'../audio/cricket.wav'});
var wodInstructionsAudio = Titanium.Media.createSound({url:'../audio/cricket.wav'});
*/

//pb.max = sound.duration;

function pad (x)
{
	if (x < 10)
	{
		return '0' + x;
	}//end if
	return x;
}//end pad


function getSlideIndexFromName( sname )
{
	Ti.API.info( "getSlideIndexFromName " + sname );	
	
	for (var i=0; i<slides.length; i++)
	{
		if ( slides[i].slideName == sname )
		{
			return i;
		}//end if
	}//end for
	
	Ti.API.info('error getSlideFromName!');
}//end getSlideIndexFromName

function nextSlide( slideName, currentWindow )
{	
	if (currentSlideView != null )
	{
		//remove the slide from the view.
		currentWindow.remove( currentSlideView );
	}//end if
	
	var slideIndex = getSlideIndexFromName ( slideName );
	
	var currentSlide;
	currentSlideView = Titanium.UI.createView({
		top:0,
	  	backgroundColor:skin_backgroundcolor,
	  	opacity:1,
	  	width:320,
	  	height:420
	});
	
	var slideAudio;
	Ti.API.info( "building Slide Type" + slides[slideIndex].slideType );		
	
	// if this is a training slide do this!
	if ( slides[slideIndex].slideType == 'training')
	{
		//load and play the audio
		slideAudio = Titanium.Media.createSound({url:slides[slideIndex].audio});
		slideAudio.play();
		
		var instructionLabel = Ti.UI.createLabel({
		  text: slides[slideIndex].instructions,
		  textAlign:'center',
		  font:{ fontSize:24, fontWeight:'bold'},
		  height:'auto',
		  color:skin_mainTextColor,
		  width:'auto',
		  top:14
		});
		currentSlideView.add(instructionLabel);	
		
		var timerView;
		if (Titanium.Platform.name == 'android') 
		{
			timerView = Ti.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:200
				});
		}
		else
		{
			timerView = Ti.UI.createView({
				height:'auto', 
				layout:'vertical'
				});		
		}

		var display_lbl =  Titanium.UI.createLabel({
			text: pad(slides[slideIndex].durationMin) + ":"+pad(slides[slideIndex].durationSec),
			height:40,
			width:220,
			//top:100,
			//left:0,
			color:skin_mainTextColor,
			borderRadius:10,
			backgroundColor:'black',
			font:{
				fontSize:30,
				fontWeight:'bold'
			},
			textAlign:'center'
		});
		timerView.add(display_lbl);
		
		var timerControlsView = Ti.UI.createView( {height:'auto', layout:'vertical'});
		var sw; //stopwatch
		
		if ( slides[slideIndex].timerType == 'down')
		{
			var totalSecondsA = parseInt(slides[slideIndex].durationMin,10)*60;
			totalSecondsA += parseInt(slides[slideIndex].durationSec,10);
			sw = new stopwatchdown( 0, totalSecondsA,
				function() {
					display_lbl.text =  sw.time.m +":"+ sw.time.s ;
					if (swCountDownStart.time.m == 0 )
					{
						if ( swCountDownStart.time.s == 3) { slideAudio = Titanium.Media.createSound({url:'../audio/three.wav'}); slideAudio.play(); }//end if
						if ( swCountDownStart.time.s == 2) { slideAudio = Titanium.Media.createSound({url:'../audio/two.wav'}); slideAudio.play(); }//end if
						if ( swCountDownStart.time.s == 1) { slideAudio = Titanium.Media.createSound({url:'../audio/one.wav'}); slideAudio.play(); }//end if
						if ( swCountDownStart.time.s == 0) { slideAudio = Titanium.Media.createSound({url:'../audio/go.wav'}); slideAudio.play(); }//end if
					}//end if
				},//end function
				function() {
					if (currentScript.length -1 <= scriptStepIndex  )
					{
						Ti.API.info('close');
						win.close();
						//return;
					}//end if
					else
					{
						scriptStepIndex ++;
						nextSlide( currentScript[scriptStepIndex], win );
					}//end else
				}//end function
			);

			sw.start(); //start the timer
		}//end if count down timer
		else // this is a count up timer
		{
			sw = new stopwatchup(0,0,
				function() {
					display_lbl.text = pad(sw.time.m)+" : "+pad(sw.time.s);
				}//end function
			);

			var stop_btn = Titanium.UI.createButton({
				title:'FINISHED',
				width:150,
				height:50,
				top:20,
				//left:5,
				font:{
					fontSize:20,
					fontWeight:'bold'
				},
				textAlign:'center'
			});
			stop_btn.addEventListener('click',function(){
				sw.stop();
				if (currentScript.length -1 <= scriptStepIndex  )
				{
					Ti.API.info('close');
					win.close();
					//return;
				}//end if
				else
				{	
					scriptStepIndex ++;
					nextSlide( currentScript[scriptStepIndex], win );
				}//end else
			});
			timerControlsView.add(stop_btn);
			sw.start(); //start the timer
		}//end else count up timer
		timerView.add( timerControlsView );
		currentSlideView.add(timerView);
		currentWindow.add( currentSlideView );
		
	}//end else if training
	else if ( slides[slideIndex].slideType == 'start')
	{		
		//load and play the audio
		slideAudio = Titanium.Media.createSound({url:slides[slideIndex].audio});
		slideAudio.play();		
		
		var startLabel = Ti.UI.createLabel({
		  text: slides[slideIndex].instructions,
		  textAlign:'center',
		  font:{ fontSize:24, fontWeight:'bold'},
		  height:'auto',
		  color:skin_mainTextColor,
		  width:'auto',
		  top:14
		});
		currentSlideView.add(startLabel);
		
		var startDescriptionLabel = Ti.UI.createLabel({
		  text: woddata[win.wodIndex].descript,
		  textAlign:'center',
		  font:{ fontSize:16, fontWeight:'normal'},
		  height:'auto',
		  color:skin_mainTextColor,
		  width:'auto',
		  top:52
		});
		currentSlideView.add(startDescriptionLabel);
		
		var timerViewStart;
		if (Titanium.Platform.name == 'android') 
		{
			timerViewStart = Ti.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:200
				});
		}//end if
		else
		{
			timerViewStart = Ti.UI.createView({
				height:'auto',
				layout:'vertical'
				});		
		}//end else
		
		var displayStart_lbl =  Titanium.UI.createLabel({
			text: pad(slides[slideIndex].durationMin) + ":"+pad(slides[slideIndex].durationSec),
			height:40,
			width:220,
			//top:100,
			//left:0,
			color:skin_mainTextColor,
			borderRadius:10,
			backgroundColor:'black',
			font:{
				fontSize:30,
				fontWeight:'bold'
			},
			textAlign:'center'
		});
		timerViewStart.add(displayStart_lbl);
		
		var timerCountdownControlsView = Ti.UI.createView( {height:'auto', layout:'vertical'});
		var swCountDownStart; //stopwatch
		
		var totalSeconds = parseInt(slides[slideIndex].durationMin,10)*60;
		totalSeconds += parseInt(slides[slideIndex].durationSec,10);	
		
		swCountDownStart = new stopwatchdown( 0, totalSeconds,
			function() {
				displayStart_lbl.text = pad(swCountDownStart.time.m)+":"+pad(swCountDownStart.time.s);
				if (swCountDownStart.time.m == 0 )
				{
					if ( swCountDownStart.time.s == 3) { slideAudio = Titanium.Media.createSound({url:'../audio/three.wav'}); slideAudio.play(); }//end if
					if ( swCountDownStart.time.s == 2) { slideAudio = Titanium.Media.createSound({url:'../audio/two.wav'}); slideAudio.play(); }//end if
					if ( swCountDownStart.time.s == 1) { slideAudio = Titanium.Media.createSound({url:'../audio/one.wav'}); slideAudio.play(); }//end if
					if ( swCountDownStart.time.s == 0) { slideAudio = Titanium.Media.createSound({url:'../audio/go.wav'}); slideAudio.play(); }//end if
				}//end if 
				},//end function
			function() {
				if (currentScript.length -1 <= scriptStepIndex  )
				{
					Ti.API.info('close');
					win.close();
					//return;
					}//end if
					else
					{
						scriptStepIndex ++;
						nextSlide( currentScript[scriptStepIndex], win );
					}//end else
				}//end function
			);
		swCountDownStart.start(); //start the timer
		timerViewStart.add( timerCountdownControlsView );
		currentSlideView.add(timerViewStart);
		
		currentWindow.add( currentSlideView );
		
	}//end else if start
	else if (slides[slideIndex].slideType == 'results')
	{
		//load and play the audio
		slideAudio = Titanium.Media.createSound({url:slides[slideIndex].audio});
		slideAudio.play();		
		
		//Ti.API.info( "building Slide Type" + slides[slideIndex].slideType );	
		var congratsLabel = Ti.UI.createLabel({
		  text: "Congradulations you just finsihed!",
		  textAlign:'center',
		  font:{ fontSize:24, fontWeight:'bold'},
		  height:'auto',
		  color:skin_mainTextColor,
		  width:'auto',
		  top:14
		});
		currentSlideView.add(congratsLabel);	
		
		// FOOTER VIEW
		var footer = Ti.UI.createView({height:'auto', layout:'vertical' });
		
		var emailButtonText = 'Email';
		var emailButton;
		
		if (Titanium.Platform.name == 'android') 
		{
			emailButton = Ti.UI.createButton({
				title:'Tell A Friend',
				width:220,
				top:100,
				height:45,
				font:{
					fontSize:18,
					fontWeight:'bold'
				},
				textAlign:'center'
			});

			emailButton.addEventListener('click',function(){
				var newWin = Titanium.UI.createWindow({
					url:"emailFriend.js",
					wodIndex:win.wodIndex,
					wodScript:woddata[win.wodIndex].scriptList.Medium,
					titel:'Email Dialog'
				});
			
				Titanium.UI.currentTab.open(newWin,{animated:true });
			});
			footer.add( emailButton );
		}//end if android
		else //else iphone
		{
			emailButton = Ti.UI.createButton({
				title:'Email',
				width:220,
				top:0,
				height:45,
				font:{
					fontSize:18,
					fontWeight:'bold'
				},
				textAlign:'center'
			});

			emailButton.addEventListener('click',function(){
				var newWin = Titanium.UI.createWindow({
					url:"emailFriend.js",
					wodIndex:win.wodIndex,
					wodScript:woddata[win.wodIndex].scriptList.Medium,
					titel:'Email Dialog'
				});
			
				Titanium.UI.currentTab.open(newWin,{animated:true });
			});			
			footer.add( emailButton );
		}
		
	
		
		var spacer = Ti.UI.createView({height:'10', layout:'vertical'});
		footer.add( spacer );
		var endButton;
		
		if (Titanium.Platform.name == 'android') 
		{		
			endButton = Ti.UI.createButton({
				title:'End',
				width:220,
				top:200,
				height:45,
				font:{
					fontSize:18,
					fontWeight:'bold'
				},
				textAlign:'center'
			});
		
			endButton.addEventListener('click',function(){
					Ti.API.info('close on Results slide');
					win.close();
			});
		}//if android
		else//iphone
		{
			endButton = Ti.UI.createButton({
				title:'End',
				width:220,
				//top:10,
				height:45,
				font:{
					fontSize:18,
					fontWeight:'bold'
				},
				textAlign:'center'
			});
		
			endButton.addEventListener('click',function(){
					Ti.API.info('close on Results slide');
					win.close();
			});
			
		}//end else
		footer.add( endButton );
		currentSlideView.add( footer );
		
		currentWindow.add( currentSlideView );
		
	}//end else if results
	else
	{
		//unkown slide type exit
		Ti.API.info('unknown slideType'  + slides[slideIndex].slideType );
		win.close();
	}//end else
	
	Ti.API.info('** end function buildSlide');
}//end function buildSlide
 


nextSlide( currentScript[scriptStepIndex], win );


Titanium.App.addEventListener('nextSlide', function(e){
	nextSlide( e.nextSlide, win);
});



Titanium.include('../mvc/model.js' );
Titanium.include('../skin.js');

var win = Ti.UI.currentWindow;
win.backgroundColor = skin_backgroundcolor;

Titanium.API.info('emailFriend.js success' );

var emailDialog = Titanium.UI.createEmailDialog({window:win});
emailDialog.setSubject(' I just completed the '+ woddata[win.wodIndex].title +' workout using crossfit trainer for '+ Titanium.Platform.name + '! ');
//emailDialog.setToRecipients(['foo@yahoo.com']);
//emailDialog.setCcRecipients(['bar@yahoo.com']);
//emailDialog.setBccRecipients(['blah@yahoo.com']);
var MessageBody ='';

var AndroidMarketRef = 'http://market.android.com/search?q=pname:com.jumptack.crossfit';
var itunesRef = 'http://itunes.apple.com/us/app/pocket-yoga/id347400507?mt=8';

if (Titanium.Platform.name == 'android') 
{
	MessageBody += 'I just completed the '+ woddata[win.wodIndex].title +' workout using crossfit trainer for '+ Titanium.Platform.name + '! ';
	MessageBody += '  Give it a try it out and see if you can! \n' ;
	
	//MessageBody += ' check it out iphone itunes:</b></p>';// http://itunes.apple.com/us/app/pocket-yoga/id347400507?mt=8
	
	MessageBody += ' check it out on the android market: \n';
	MessageBody += AndroidMarketRef;
	
	MessageBody += '\n';
	MessageBody += '\n';
}//end if
else //else iphone
{
	MessageBody = '<p> I just completed the <b>'+ woddata[win.wodIndex].title +'</b> a workout using crossfit trainer for '+ Titanium.Platform.name + '! ';
	MessageBody += '  Check it out and see if you can complete it! </p>';
	
	MessageBody += '<p><b> check it out iphone itunes:</b></p>';// http://itunes.apple.com/us/app/pocket-yoga/id347400507?mt=8
	
	MessageBody += '<p><b>check it out on the android market:</b></p>';
	//MessageBody += AndroidMarketRef;
	MessageBody += '<p><a href="'+AndroidMarketRef+'" target="_blank">Crossfit</a></p>';
	
	MessageBody += '<b> </b>';
	MessageBody += '<b> </b>';
	
}//end iphone

emailDialog.setMessageBody(MessageBody);
emailDialog.setHtml(true);
emailDialog.setBarColor('#336699');

// attach a blob
//emailDialog.addAttachment(event.media);

// attach a file
//var f = Ti.Filesystem.getFile('cricket.wav');
//emailDialog.addAttachment(f);

emailDialog.addEventListener('complete',function(e)
{
	if (e.result == emailDialog.SENT)
	{
		//alert("message was sent");
		win.close();
	}//end if
	else
	{
		alert("message was not sent. please check your connection and try again ");//result = "+e.result);
		win.close();
	}//end else
});
emailDialog.open();
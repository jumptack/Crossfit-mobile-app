
function pad (x)
{
	if (x < 10)
	{
		return '0' + x;
	}//end if
	return x;
}//end pad

//var currentDate = '2010-05-15';
function formatDate()
{
	var date = new Date();
	//var h = date.getHours();
	//var m = date.getMinutes();
	//var s = date.getSeconds();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	//return pad(h) + ':' + pad(m) + ':' + pad(s);
	return year + "-" + pad(month) + "-" + pad(day);
}//end formatDate

//Constants
var ENDPOINT = 'http://www.yackEndPoint.com/api/yack.php?';

function initServices()
{
	
}//end initDatabase

	

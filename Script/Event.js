

//resig helper function to add event
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else
    obj.addEventListener( type, fn, false );
}


//get new date
var d= new Date();
document.getElementById("date").innerHTML = 23;


//on win load event set timer for webpage 
window.addEventListener("load", Timer, false);

var second=0;

Function Timer()
{
 window.setInterval("updateTime()", 1000);

}

//try to change the element in html to the date format
function updateTime()
{
	second= new Date();
	//couldn't  access the document 
	document.getElementById("date").innerHTML =second;
}

var song= document.getElementByTag("audio");
addEvent(song, 'mouseout', pause_music);

function pause_music(){


	song.pause();
}

//try to change the color of the cells. 

var table_cells= document.getElementByTagName('tr');
 addEvent(table_cells,'mouseover',highlight_cell);

 function hightlight_cell()
 {
      table_cells.style.backgroundColor="yellow";
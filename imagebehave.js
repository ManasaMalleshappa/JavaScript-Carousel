var indexArray = [0,1,2];
var gallery=[{src:"Desert.jpg",desc:"Friend1"},{src:"jellyfish.jpg",desc:"Friend2"},{src:"Chrysanthemum.jpg",desc:"Friend3"},{src:"Hydrangeas.jpg",desc:"Friend4"}];

function lastthree()
{
	indexArray = [1,2,3];
	var x=document.getElementsByClassName("potrait");
	var paratag=document.getElementsByTagName("p");
	var input=document.getElementsByTagName("input");
	for(var k=0;k<3;k++)
	{
		x[k].childNodes[0].setAttribute("src",gallery[indexArray[k]].src);
		paratag[k].innerHTML=gallery[indexArray[k]].desc;
		input[k].style.visibility="hidden";
	}
}

function firstthree()
{
	
	indexArray = [0,1,2];
	var x=document.getElementsByClassName("potrait");
	var paratag=document.getElementsByTagName("p");
	var input=document.getElementsByTagName("input");
	for(var j=0;j<3;j++)
	{
		x[j].childNodes[0].setAttribute("src",gallery[indexArray[j]].src);
		paratag[j].innerHTML=gallery[indexArray[j]].desc;
		input[j].style.visibility="hidden";
	}
}


function hover( item )
{
    item.style.border = "2px dashed black";
}
		
function hover1( item )
{
    item.style.border = "2px solid black";
}

function drag(event,eventchild)
{
	
	event.style.visibility="hidden";
	eventchild.style.visibility="visible";
	eventchild.setAttribute("size","28");
	eventchild.value = event.childNodes[0].nodeValue;  //eventchild - input and event.childNode-text
	
}

function update()
{
	var inp=document.getElementsByTagName("input");
	var paraelement=document.getElementsByTagName("p");
	for(i=0;i<3;i++)
	{
		if(inp[i].style.visibility == "visible")
		{
			gallery[indexArray[i]].desc=inp[i].value;
			paraelement[i].style.visibility="visible";
			paraelement[i].innerHTML=gallery[indexArray[i]].desc;
		}
	}
	for(i=0;i<3;i++)
	{
			paraelement[i].style.visibility="visible";
			paraelement[i].innerHTML=gallery[indexArray[i]].desc;
	}
}


document.addEventListener("click", update);


function changetext()
{
	update();
	var inp=document.getElementsByTagName("input");
	for(i=0;i<3;i++)
	{
		inp[i].style.visibility = "hidden";
		
	}
}



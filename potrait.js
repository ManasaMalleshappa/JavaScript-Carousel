window.onload = test;
var indexArray = [0,1,2];
var gallery=[{src:"Desert.jpg",desc:"Friend1"},{src:"jellyfish.jpg",desc:"Friend2"},{src:"Chrysanthemum.jpg",desc:"Friend3"},{src:"Hydrangeas.jpg",desc:"Friend4"}];

function test()
{
var images=document.getElementsByClassName("potrait");
var scrolls=document.getElementsByClassName("scroll");
var paratag=document.getElementsByTagName("p");
var inputtag=document.getElementsByTagName("input");

scrolls[0].addEventListener("click",function(){firstthree();});
scrolls[1].addEventListener("click",function(){lastthree();});

for(var i = 0; i < 3; i++)
{
	var a=images[i].childNodes[0];
	a.setAttribute("src",gallery[i].src);
	a.setAttribute("width", "160");
	a.setAttribute("height","140");
	a.setAttribute("display","inline-block");
	paratag[i].innerHTML=gallery[i].desc;
	images[i].addEventListener("mouseover",function(){hover(this);});
	images[i].addEventListener("mouseout",function(){hover1(this);});
	paratag[i].addEventListener("click",function(){drag(this,this.nextSibling);});
	inputtag[i].addEventListener("change",function(){changetext();});
	
}
}


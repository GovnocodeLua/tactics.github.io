function openIcon() {
    var obj = window.event.target||window.event.srcElement; 
    //alert(obj.id);
	document.getElementById("pos-img").src = "./images/"+obj.id+".png";
	document.getElementById("fullImg").hidden=false;
}
function closeImage() {
	document.getElementById("fullImg").hidden=true;
}


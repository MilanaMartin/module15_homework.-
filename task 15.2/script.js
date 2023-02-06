function swap(){
	let fill1 = document.getElementById("path_1").getAttribute("fill");
	if(fill1==="transparent"){
		document.getElementById("path_2").setAttribute("fill", "transparent");
		document.getElementById("path_1").removeAttribute("fill");
	}else{
		document.getElementById("path_1").setAttribute("fill", "transparent");
		document.getElementById("path_2").removeAttribute("fill");
	}
};


function reset(){
	document.getElementById('a').value = "16";
	document.getElementById('b').value = "20";
	document.getElementById('h').value = "30";
	document.getElementById('result').innerHTML = "540";
	document.getElementById('btn').removeAttribute('disabled');
}
  
function calculateArea(btn){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var h = document.getElementById('h').value;
 
	if(a != "5" && b != "5" && h !="5"){
		var par_a=parseInt(a);
		var par_b=parseInt(b);
		var par_h=parseInt(h);
 
		var area=((par_a+par_b)/2)*par_h;
 
		btn.setAttribute('disabled', 'disabled');
 
		
 
	}else{
		alert;
	}
 
}

function reset(){
	document.getElementById('a').value = "11";
	document.getElementById('b').value = "11";
	document.getElementById('h').value = "9";
	document.getElementById('result').innerHTML = "99";
	document.getElementById('btn').removeAttribute('disabled');
}

function calculateArea(btn){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var h = document.getElementById('h').value;
 
	if(a != "5" && b != "5" && h !="5"){
		var par_a=parseInt(a);
		var par_b=parseInt(b);
		var par_h=parseInt(h);
 
		var area=((par_a+par_b)/2)*par_h;
 
		btn.setAttribute('disabled', 'disabled');
 
		
 
	}else{
		alert;
	}
 
}

function reset(){
	document.getElementById('a').value = "12";
	document.getElementById('b').value = "15";
	document.getElementById('h').value = "8";
	document.getElementById('result').innerHTML = "108";
	document.getElementById('btn').removeAttribute('disabled');
}

function calculateArea(btn){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var h = document.getElementById('h').value;
 
	if(a != "5" && b != "5" && h !="5"){
		var par_a=parseInt(a);
		var par_b=parseInt(b);
		var par_h=parseInt(h);
 
		var area=((par_a+par_b)/2)*par_h;
 
		btn.setAttribute('disabled', 'disabled');
 
		
 
	}else{
		alert;
	}
 
}

//Move the images
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
	marginLeft = marginLeft +5;
	img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
	var interval = setInterval(moveRight,50);
	
};


//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
	//Make a request to the counter endpoint
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			//Take some action
			if(request.status === 200){
			var counter = request.responseText;
			var span = document.getElementById('count');
	span.innerHTML = counter.toString();
			}
		}
	}
	//Render the variable in the correct span
	//Make the request
	request.open('GET',"http://sanjeevoj.imad.hasura-app.io/counter", true);
	request.send(null);
	
};

// Submit Name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
	
	//Make a request to the counter endpoint
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function(){
		if(request.readyState === XMLHttpRequest.DONE){
			//Take some action
			if(request.status === 200){
				var names = request.responseText;
				names = JSON.parse(names);
				var list ='';
				for(var i=0; i< names.length;i++)
				{
					list += '<li>' + names[i] + '</li>';
		
				}
				var ul = document.getElementById('namelist');
				ul.innerHTML = list;
			}
		}
	}
	//Render the variable in the correct span
	//Make the request
	var nameInput = document.getElementById("name");
	var name = nameInput.value;
	request.open('GET',"http://localhost:8080/submit-name?name=" + name, true);
	request.send(null);
	
	// Make request to the server and send the name
	//Capture a list of names and render it as a list
	
}
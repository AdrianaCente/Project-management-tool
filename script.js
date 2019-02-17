document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function User(options={}) {
 	this.id=ID();
 	this.name=options.name;
};

var ID = function () {
  return Math.floor(new Date().valueOf() * Math.random());
};
var user1=new User({name:"Mihai"});
var user2=new User({name:"Ana"});
var user3=new User({name:"Calin"});
var user4=new User({name:"Bob"});
var userList=[];
var userName;
var bool;
var id;
	
function onHtmlLoaded() { 
	userList.push(user1, user2, user3, user4);
	console.log(userList);

	document.querySelector("button").addEventListener("click", checkName);
	function checkName() {
		userName=document.getElementById("userName").value;
		for (var i=0; i<userList.length; i++) {
			if (userName===userList[i].name) {
				bool=true;
				id=userList[i].id;
			} 
		}
		if  (bool===true) {
			window.open("projectInfo.html","_self");
			localStorage.setItem("userId", id);
			} 
			else {
				alert("Please enter a valid username");
				document.getElementById("userName").value="";
				}
	};
};


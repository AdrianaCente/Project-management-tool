document.addEventListener("DOMContentLoaded", onHtmlLoaded);

var ID = function () {
  return Math.floor(new Date().valueOf() * Math.random());
};

//status-localStorage
function Status(options={}) {
 	this.id=ID();
 	this.name=options.name;
};
var status1=new Status({name:"New"});
var status2=new Status({name:"In progress"});
var status3=new Status({name:"Feedback"});
var status4=new Status({name:"Rework"});
var status5=new Status({name:"Resolved"});
var status6=new Status({name:"Ready for Testing"});
var statusArray=[status1, status2, status3, status4, status5, status6];
localStorage.projectStatus=JSON.stringify(statusArray);

function onHtmlLoaded() {
	var sprints=[];
	var sprint=document.getElementById("sprints");
	sprint.innerHTML="<label>Add sprints: </label><input type='text' id='sprintName' name='name' style='margin-right:10px'><button id='addSprint'>Add sprint</button>"
	var comment=[];
	var com=document.getElementById("comments");
	com.innerHTML="<h3>Add comment: </h3><textarea id='commName'></textarea><button id='addCom'>Add comment</button>"
	displayProject();
	displaySprint();
	displayIssues();
	checkStatus("New");
	checkStatus("In progress");
	checkStatus("Feedback");
	checkStatus("Rework");
	checkStatus("Resolved");
	checkStatus("Ready for Testing");
	checkIssues("Features");
	checkIssues("Bugs");
	checkIssues("Tasks");
	
	
	document.getElementById("newIssue").addEventListener("click", function() {
		window.open("addIssue.html","_self");
	});
	
	document.getElementById("updateIssue").addEventListener("click", function() {
		window.open("updateIssue.html","_self");
	});
	
	//add sprint
	document.getElementById("addSprint").addEventListener("click", function() {
		var nameSprint=document.getElementById("sprintName").value;
		var sprint1={
			id: ID(),
			name: nameSprint
		}
		console.log(sprint1);
		sprints.push(sprint1);
		localStorage.sprintList=JSON.stringify(sprints);
		document.getElementById("sprintName").value="";
		//location.reload(true); la reload se suprascrie localStorage
	});
	
	//add comment
	document.getElementById("addCom").addEventListener("click", function() {
		var nameCom=document.getElementById("commName").value;
		var comment1={
			id: ID(),
			name: nameCom
		}
		console.log(comment1);
		comment.push(comment1);
		localStorage.commentList=JSON.stringify(comment);
		document.getElementById("commName").value="";
	});
	
	
	function displayProject() {
		var sprintArr=[];
		var arr=[];
		var project={};
		var localProject;
		if (localStorage.sprintList) {
			sprintArr=JSON.parse(localStorage.sprintList);
			for (var i=0; i<sprintArr.length;i++)	{ 
				arr.push(sprintArr[i].id);
			}
		} 
		
		project={idProject: 180113557927, sprints: arr};
		localStorage.projectLocal=JSON.stringify(project);
		if (localStorage.projectLocal) {
			localProject=JSON.parse(localStorage.projectLocal);
			var proj=document.getElementById("project");
			proj.innerHTML="<h3>First project</h3><p>Id: "+localProject.idProject+"<br />Sprints: "+localProject.sprints+"</p>"+
			"<ul id='list'><strong>Sprints</strong></ul><ul id='listIssue'><strong>Total Issues</strong><button id='newIssue'>New Issue</button><button id='updateIssue'>Update Issue</button></ul>";
		} 
	}
	
	//display issues in each sprint
	function displaySprint() {
		var sprintArray=[];
		var issueArray=[];
		var listSprint=document.getElementById("list");
		if (localStorage.sprintList) {
			sprintArray=JSON.parse(localStorage.sprintList);
				if (localStorage.issueList) {
				issueArray=JSON.parse(localStorage.issueList);
					for (var i=0; i<sprintArray.length; i++) {
						listSprint.innerHTML+="<li><span>Id: </span>"+sprintArray[i].id+","+"<span> Name: </span>"+sprintArray[i].name+"</li>";
						for (var j=0; j<issueArray.length; j++) {
							if (issueArray[j].sprint==sprintArray[i].id) {
								var htm=document.createElement("ul");
								var txt=document.createTextNode("Issue ID: "+issueArray[j].id);
								htm.appendChild(txt);
								document.getElementById("list").appendChild(htm);
							}
						}
					}
				} else localStorage.issueList=JSON.stringify("");
		}
	}
	
	//total issues
	function displayIssues() {
		var issueArray=[];
		var listIssue=document.getElementById("listIssue");
		if (localStorage.issueList) {
			issueArray=JSON.parse(localStorage.issueList);
			for (var i=0; i<issueArray.length; i++) {
				listIssue.innerHTML+="<li><span>Id: </span>"+issueArray[i].id+","+"<span> Type: </span>"+issueArray[i].type+","+"<span> Sprint: </span>"+issueArray[i].sprint+","+"<span> Tasks Id: "+issueArray[i].tasks+"</span></li>";
			}
		} else localStorage.issueList=JSON.stringify("");
	}
	
	//display issues in each status
		function checkStatus(val) {
			var issueArray=[];
			var htm=document.createElement("ul");
			var txt=document.createTextNode(val);
			htm.appendChild(txt);
			document.getElementById("stat").appendChild(htm);
			if (localStorage.issueList) {
			issueArray=JSON.parse(localStorage.issueList);
			for (var i=0; i<issueArray.length; i++) {
				if (issueArray[i].statusI===val) {
					htm.innerHTML+="<li>Issue"+" with ID "+issueArray[i].id+"</li>";
				}
			}
			} else localStorage.issueList=JSON.stringify("");
		}
		
		//display issues  type
		function checkIssues(value) {
			var issueArray=[];
			var htm=document.createElement("ul");
			var txt=document.createTextNode(value);
			htm.appendChild(txt);
			document.getElementById("type").appendChild(htm);
			if (localStorage.issueList) {
			issueArray=JSON.parse(localStorage.issueList);
			for (var i=0; i<issueArray.length; i++) {
				if (issueArray[i].type===value) {
					htm.innerHTML+="<li>Issue"+" with ID "+issueArray[i].id+"</li>";
				}
			}
			} else localStorage.issueList=JSON.stringify("");
		
		}
}
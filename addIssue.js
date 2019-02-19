document.addEventListener("DOMContentLoaded", onHtmlLoaded);

var ID = function () {
  return Math.floor(new Date().valueOf() * Math.random());
};


function onHtmlLoaded() {
	var issue=[];
	if (localStorage.sprintList) {
	var sprintList=JSON.parse(localStorage.sprintList);
	var sel=document.getElementById("sprintIssue");
	for (var i=0; i<sprintList.length; i++) {
		sel.innerHTML+="<option value='"+sprintList[i].id+"'>"+sprintList[i].id+"</option>";
	}
	}
	
	var taskList=JSON.parse(localStorage.issueList);
	var task=document.getElementById("taskIssue");
	for (var i=0; i<taskList.length; i++) {
		task.innerHTML+="<option value='"+taskList[i].id+"'>"+taskList[i].id+"</option>";
	}
	if (localStorage.commentList) {
	var commList=JSON.parse(localStorage.commentList);
	var comm=document.getElementById("commIssue");
	for (var i=0; i<commList.length; i++) {
		comm.innerHTML+="<option value='"+commList[i].id+"'>"+commList[i].id+"</option>";
	}
	}
	
	var assignList=JSON.parse(localStorage.userStorage);
	var assig=document.getElementById("assigIssue");
	for (var i=0; i<assignList.length; i++) {
		assig.innerHTML+="<option value='"+assignList[i].id+"'>"+assignList[i].id+"</option>";
	}
	
	var userId=localStorage.getItem("userId");
	document.getElementById("userIssue").value=userId;
	document.querySelector("button").addEventListener("click", function() {
		var typeI=document.getElementById("typeIssue").value;
		var nameI=document.getElementById("nameIssue").value;
		var sprintI=document.getElementById("sprintIssue").value;
		var createdByI=document.getElementById("userIssue").value;
		var assigneeI=document.getElementById("assigIssue").value;
		var descriptionI=document.getElementById("textIssue").value;
		var statusI=document.getElementById("statusIssue").value;
		var tasksI=document.getElementById("taskIssue").value;
		var commentsI=document.getElementById("commIssue").value;
		var updatedAtI=document.getElementById("updateIssue").value;
		var createdAtI=document.getElementById("createIssue").value;
		
		//document.getElementById("typeIssue").addEventListener("click", function() {
		//if (typeI=="Tasks") {
		//	var tt=document.getElementById("taskIssue");
		//	tt.setAttribute("disabled", "disabled");
		//}
		//})
				
		var issue1={
			id: ID(),
			type: typeI,
			name: nameI,
			sprint: sprintI,
			createdBy: createdByI,
			assignee: assigneeI,
			description: descriptionI,
			statusI: statusI,
			tasks: tasksI,
			comments: commentsI,
			updatedAt: updatedAtI,
			createdAt: new Date()
		};
		console.log(issue1);
		issue.push(issue1);
		localStorage.issueList=JSON.stringify(issue);
		document.getElementById("nameIssue").value="";
		document.getElementById("sprintIssue").value="";
		document.getElementById("textIssue").value="";
		document.getElementById("taskIssue").value="";
		document.getElementById("commIssue").value="";
	});
}



		
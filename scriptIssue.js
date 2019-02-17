document.addEventListener("DOMContentLoaded", onHtmlLoaded);

var ID = function () {
  return Math.floor(new Date().valueOf() * Math.random());
};


function onHtmlLoaded() {
	var issue=[];
	var userId=localStorage.getItem("userId");
	document.getElementById("userIssue").value=userId;
	document.getElementById("assigIssue").value=userId;	
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



		
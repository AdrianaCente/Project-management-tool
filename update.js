document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
	var arr=[];
	var arr1=[];
	var list=JSON.parse(localStorage.issueList);
	var issue=document.getElementById("listIssues");
	for (var i=0; i<list.length; i++) {
		issue.innerHTML+="<option value="+list[i].id+">"+list[i].id+"</option>"
	}
	issue.addEventListener("change", function() {
		var id = document.getElementById("listIssues").value;
		for (var i=0; i<list.length; i++) {
			if (id==list[i].id) {
				document.getElementById("idIssue").value=list[i].id;
				document.getElementById("typeIssue").value=list[i].type;
				document.getElementById("nameIssue").value=list[i].name;
				document.getElementById("sprintIssue").value=list[i].sprint;
				document.getElementById("userIssue").value=list[i].createdBy;
				document.getElementById("assigIssue").value=list[i].assignee;
				document.getElementById("textIssue").value=list[i].description;
				document.getElementById("statusIssue").value=list[i].statusI;
				document.getElementById("taskIssue").value=list[i].tasks;
				document.getElementById("commIssue").value=list[i].comments;
				document.getElementById("createIssue").value=list[i].createdAt;
				document.querySelector("button").addEventListener("click", saveChanges)
			}
		}
	});
		
		
	function saveChanges() {
		var userId=document.getElementById("idIssue").value;
		var typeI=document.getElementById("typeIssue").value;
		var nameI=document.getElementById("nameIssue").value;
		var sprintI=document.getElementById("sprintIssue").value;
		var createdByI=document.getElementById("userIssue").value;
		var assigneeI=document.getElementById("assigIssue").value;
		var descriptionI=document.getElementById("textIssue").value;
		var statusI=document.getElementById("statusIssue").value;
		var tasksI=document.getElementById("taskIssue").value;
		var commentsI=document.getElementById("commIssue").value;
		var createdAtI=document.getElementById("createIssue").value;
		var issue1={
			id: userId,
			type: typeI,
			name: nameI,
			sprint: sprintI,
			createdBy: createdByI,
			assignee: assigneeI,
			description: descriptionI,
			statusI: statusI,
			tasks: tasksI,
			comments: commentsI,
			updatedAt: new Date(),
			createdAt: createdAtI
		};
			console.log(issue1);
						
			
			var sprintCheck=issue1.tasks.split(","); 
			for (var i=0; i<sprintCheck.length; i++) {
				for (var j=0; j<list.length; j++) {
					if (sprintCheck[i]==list[j].id) {
						list[j].sprint=issue1.sprint;
						console.log(list[j].sprint);
					}
				}
			}
			
			for (var i=0; i<sprintCheck.length; i++) {
				for (var j=0; j<list.length; j++) {
					if (sprintCheck[i]==list[j].id) {
						if ((issue1.statusI!=="New") || (issue1.statusI!=="Ready for Testing")) {
							console.log(issue1.statusI);
							list[j].statusI=issue1.statusI;
							console.log(list[j].statusI);
						}
					}
				}
			}
			
		
			/*for (var i=0; i<sprintCheck.length; i++) {
				for (var j=0; j<list.length; j++) {
					if (sprintCheck[i]==list[j].id) {
						console.log(list[j].statusI);
						if (list[j].statusI=="New") {
							console.log(list[j].statusI);
							issue1.statusI="Ready for Testing";
							console.log(issue1.statusI);
						}
					}
				}
			}*/
			
			
			arr.push(issue1);
			var res = list.map(obj => arr.find(o => o.id == obj.id) || obj);
			console.log(res);
			localStorage.issueList=JSON.stringify(res);
			document.getElementById("nameIssue").value="";
			document.getElementById("sprintIssue").value="";
			document.getElementById("textIssue").value="";
			document.getElementById("taskIssue").value="";
			document.getElementById("commIssue").value="";
			
	}
}

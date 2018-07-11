setTimeout(function(){
$("#home_link").removeClass("active");
$("#emp_link").addClass("active");
}, 5)




function enumerate(response) {
  console.log(response.employees);
  for (i=0; i<response.employees.length;i++){
    var row = $("<tr></tr>");
    var name = $("<td></td>").html(response.employees[i].name);
    var title = $("<td></td>").html(response.employees[i].title);
    var salary = $("<td></td>").html(response.employees[i].salary);
    var attendance = $("<td></td>").text(response.employees[i].attendance);
    row.append(name,title,salary,attendance);
    $("#emp_table").append(row);
  }
}

$.get("../assets/employees.json",enumerate);
// loading too fast so need to timeout

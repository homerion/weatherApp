setTimeout(function(){
$("#home_link").removeClass("active");
$("#emp_link").addClass("active");
}, 5)

// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
//
// function inArray() {
//
// }

function enumerate(response) {

// working to have all unique keys for each employee:
// var titles=["Number"];
// console.log(Object.keys(response.employees[0]));
// var new_titles = Object.keys(response.employees[0]);
// console.log(new_titles);
// var newest_titles = titles.concat(new_titles);
// console.log(newest_titles);

  var row = $("<tr></tr>");
  for (titles in response.employees[0]){
    var col = $("<th scope='col'></th>").html(titles);
    row.append(col);

  }
  $("#table-head").append(row);
  for (i=0; i<response.employees.length;i++){
    var row = $("<tr></tr>");
    for (val in response.employees[i]){
      var col = $("<td></td>").text(response.employees[i][val]);
      row.append(col);
  }
    $("#table-body").append(row);
  }
}

$.get("../assets/employees.json",enumerate);
// loading too fast so need to timeout

setTimeout(function(){
$("#home_link").removeClass("active");
$("#emp_link").addClass("active");
}, 5)



function enumerate(response) {
// console.log(response);
console.log(response.length);

  var row = $("<tr></tr>");
  for (titles in response[0]){
    var col = $("<th scope='col'></th>").html(titles);
    row.append(col);
  }
  $("thead:first").append(row);

  for (i=0; i<response.length;i++){
    // for (var variable in response[i]['foods']['likes']) {
    // console.log(response[i]['foods']['likes'][variable]);
    // }

    var row = $("<tr></tr>");
    for (val in response[i]){
      var col = $("<td></td>");
      if (typeof(response[i][val])=='object') {

        for (pref in response[i][val]) {
          var next_col = $("<p></p>").html(pref+": ");
          for (likes in response[i][val][pref]) {
            next_col.append(response[i][val][pref][likes]+", ");
          }

        col.append(next_col);
        row.append(col);
        }


      } else {
        var col = $("<td></td>").text(response[i][val]);
        row.append(col);
      }


    }
    $("tbody:first").append(row);
  }
}

$.get("https://learnwebcode.github.io/json-example/animals-1.json",enumerate);
// loading too fast so need to timeout

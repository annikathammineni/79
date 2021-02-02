var students = [];
function submit() {
  var n1 = document.getElementById("name1").value;
  var n2 = document.getElementById("name2").value;
  var n3 = document.getElementById("name3").value;
  var n4 = document.getElementById("name4").value;
  students.push(n1);
  students.push(n2);
  students.push(n3);
  students.push(n4);
  document.getElementById("result").innerHTML = students;
  document.getElementById("submit").style.display = "none";
  document.getElementById("sort").style.display = "inline-block";
}
function sorting() {
  students.sort();
  document.getElementById("result").innerHTML = students;
}

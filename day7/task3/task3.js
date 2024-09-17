function setCookie(name, value) {
  var     expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+3);
var x=  document.cookie = name + "=" + value + ";expires=" + expiryDate;
  console.log(x);
}

function register() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var color = document.getElementById("color").value;
console.log(name +" "+age,gender,color)
    setCookie("name", name);
    setCookie("age", age);
    setCookie("gender", gender);
    setCookie("color", color);
// var x = "task3_2.html?name=" + encodeURIComponent(name) + "&age=" + encodeURIComponent(age) + "&gender=" + encodeURIComponent(gender) + "&color=" + encodeURIComponent(color);
   window.location.href = "task3_2.html";
}

var p = document.getElementById("btn");
p.onclick = register;





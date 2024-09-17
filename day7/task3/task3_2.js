function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    cookie = cookie.trim();

    if (cookie.startsWith(nameEQ)) {
      return cookie.slice(nameEQ.length);
    }
    return null;
  }
}

function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
      
// function showProfileData2() {
//   var name = getQueryParam("name");
//   var age = getQueryParam("age");
//   var gender = getQueryParam("gender");
//   var color = getQueryParam("color");


//   var maleImage = "https://ts1.mm.bing.net/th?id=OIP.QGyOycR0GI6n-AEd0h0DhwHaHa&pid=15.1"; 
//   var femaleImage = "https://ts1.mm.bing.net/th?id=OIP.QGyOycR0GI6n-AEd0h0DhwHaHa&pid=15.1"; 


//   var genderImage = "";
//   if (gender === "male") {
//     genderImage = `<img src="${maleImage}" alt="Male" style="width: 100px; height: 100px; margin-left: 10px;">`;
//   } else if (gender === "female") {
//     genderImage = `<img src="${femaleImage}" alt="Female" style="width: 100px; height: 100px; margin-left: 10px;">`;
//   }
//   if (name && age && gender && color) {
//     document.getElementById("profileData").innerHTML = `<br>
//      <strong style="color: ${color}; margin-left: 20px;">Name: ${name}</strong><br><br>
//       <strong style="color: ${color}; margin-left: 20px;">Age: ${age}</strong><br><br>
//       <strong style="color: ${color}; margin-left: 20px;">Gender: ${gender}</strong><br><br>
//         ${genderImage}
//       `;
    
//   } else {
//     document.getElementById("profileData").innerHTML = "No profile data found.";
//   }
// }

//showProfileData2();

function showProfileData() {
            var name = getCookie("name");
            var age = getCookie("age");
            var gender = getCookie("gender");
            var color = getCookie("color");
console.log(name +" "+age,gender,color)
            if (name && age && gender && color) {
                document.getElementById("profileData").innerHTML = `
                    <strong style="color: ${color};">Name:</strong> ${name}<br>
                    <strong style="color: ${color};">Email:</strong> ${age}<br>
                    <strong style="color: ${color};">Gender:</strong> ${gender}<br>
                `;
            } else {
                document.getElementById("profileData").innerHTML = "No profile data found.";
            }
        }

  showProfileData();
      
 

function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);  
    return urlParams.get(name);
}

var id = getQueryParam("id");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + id);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var user = JSON.parse(xhr.response);

        
        document.getElementById("userId").textContent = user.id;
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userUsername").textContent = user.username;
        document.getElementById("userEmail").textContent = user.email;
      document.getElementById("userPhone").textContent = user.phone;
      
        document.getElementById("website").textContent = user.website;
    }
};

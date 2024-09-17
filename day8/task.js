var getUsers = document.getElementById("btn");
var tbody = document.getElementById("users");

getUsers.addEventListener('click', function() {
    tbody.innerHTML = "";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var users = JSON.parse(xhr.response);
            console.log(users);
            for (var i = 0; i < users.length; i++) {
                var id = document.createElement("td");
                id.textContent = users[i].id;

                var name = document.createElement("td");
                name.textContent = users[i].name;

                var username = document.createElement("td");
                username.textContent = users[i].username;

                var email = document.createElement("td");
                email.textContent = users[i].email;

                var phone = document.createElement("td");
                phone.textContent = users[i].phone;

                var website = document.createElement("td");
                website.textContent = users[i].website;

                var action = document.createElement("button");
                action.innerText = "More Details";
                action.id = "myButton"; 
                action.onclick = (function(userId) {
                    return function() {
                        window.location.href = `task2.html?id=${userId}`;
                    };
                })(users[i].id);

                var row = document.createElement("tr");
                row.append(id, name, username, email, phone, website, action);

                tbody.append(row);
            }
        }
    };
});

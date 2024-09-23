async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();

    const userTableBody = document.getElementById('userTableBody');

    usersData.forEach(element => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
             <td>${element.email}</td>
              <td>${element.phone}</td>
          <td>${element.company.name}</td>
            <td><button onclick="deleteUser(this)">Delete</button></td>
        `;

        userTableBody.appendChild(row);
    });
}

function deleteUser(button) {
    const row = button.parentElement.parentElement; 
    row.remove();
}


fetchUsers();
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const table = document.querySelector('table');

// Load dark mode state from local storage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  table.style.border = "2px solid white";
}

btn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
    table.style.border = "2px solid white";
  } else {
    localStorage.setItem('darkMode', 'disabled');
    table.style.border = "1px solid #ddd";
  }
});

const URL = "http://localhost:3000/users";

// Function to fetch and display data
function fetchData() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const tableBody = document.querySelector("#tableBody");
      tableBody.innerHTML =
      `
      <tr>
        <th>ID</th>
        <th>USER</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
      </tr>
    `;
      data.forEach((element) => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
      `;
        tableBody.append(rowElement);
      });
    });
}

// Fetch data initially
fetchData();

const addSaveButton = document.getElementById("add-save");
const inputFields = document.querySelector(".input-fields");

addSaveButton.addEventListener("click", () => {
  if (addSaveButton.textContent === "Add") {
    // Show input fields and change button text to "Save"
    inputFields.style.display = "block";
    addSaveButton.textContent = "Save";
  } else if (addSaveButton.textContent === "Save") {
    // Validate input fields
    const id = document.getElementById("idd").value;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (!id || !name || !username || !email) {
      alert("All fields are required.");
      return;
    }

    const newUser = {
      id: id,
      name: name,
      username: username,
      email: email,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => console.log(res.json()))
      .then((data) => {
        console.log("User added:", data);
        fetchData(); // Refresh the table

        // Clear and hide input fields, change button text to "Add"
        document.getElementById("idd").value = "";
        document.getElementById("name").value = "";
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        inputFields.style.display = "none";
        addSaveButton.textContent = "Add";
        
      });
  }
});

// Delete user
document.getElementById("delete").addEventListener("click", () => {
  const userIdToDelete = prompt("Enter the ID of the user to delete:");

  fetch(`${URL}/${userIdToDelete}`, {
    method: "DELETE",
  }).then((res) => {
    // console.log(res)
    if (res.ok) {
      console.log(`User with ID ${userIdToDelete} deleted`);
      fetchData(); // Refresh the table
    } else {
      console.error("Failed to delete user");
    }
  });
});

// Update user
// fetch(URL).then(res=>res.json()).then((data)=>{console.log(data)

// for(let i=0;i<=data.length;i++){
//   if (data[i].id==1){
//     alert('id found')
//   }
// }
// })

document.getElementById("update").addEventListener("click", () => {
  const userIdToUpdate = prompt("Enter the ID of the user to update:");
  
  fetch(URL).then(res=>res.json()).then((data)=>{console.log(data)

    let check=false;
    for(let i=0;i<data.length;i++){
      if (data[i].id===userIdToUpdate){
        console.log(data[i].id)
        check=true;
        break;
      }
    
    }


      if(check){
        const name = prompt("Enter new name:");
        const username = prompt("Enter new username:");
        const email = prompt("Enter new email:");
        
        const updatedUser = {
          name: name,
          username: username,
          email: email,
        };
        
        fetch(`${URL}/${userIdToUpdate}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("User updated:", data);
          fetchData(); // Refresh the table
        });
        
      }
      else{
        alert("Please enter the Correct id");
      }
        
      })
      
      
    });
    
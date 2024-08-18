const apiUrl = 'http://localhost:3001/employees';

// Fetch and display all items
function fetchItems() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                li.id = item.id;

                const updateButton = document.createElement('button');
                updateButton.textContent = 'Update';
                updateButton.onclick = () => updateItem(item.id);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteItem(item.id);

                li.appendChild(updateButton);
                li.appendChild(deleteButton);

                itemsList.appendChild(li);
            });
        });
}

// Add a new item
function addItem() {
    const itemName = document.getElementById('itemName').value;
    const newId = Date.now();  // Use a simple way to generate a unique id
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: newId, name: itemName })
    })
    .then(response => response.json())
    .then(() => {
        document.getElementById('itemName').value = '';
        fetchItems();
    });
}

// Update an item
function updateItem(id) {
    const newName = prompt('Enter new name:');
    if (newName) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName })
        })
        .then(response => response.json())
        .then(() => fetchItems());
    }
}

// Delete an item
function deleteItem(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => fetchItems());
}

// Initial fetch
fetchItems();

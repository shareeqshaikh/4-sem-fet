 function editRole() {
        const roleElement = document.getElementById('Role');
        const currentRole = roleElement.textContent;
        const newRole = prompt('Enter new role:', currentRole);
        if (newRole !== null && newRole.trim() !== '') {
            roleElement.textContent = newRole.trim();
            alert("Role updatd suuccessfully!");
         
        }
    }

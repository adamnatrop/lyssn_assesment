const listContainer = document.getElementById('userList');

userData = [
    {"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true}, 
    {"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false}, 
    {"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false}, 
    {"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true}, 
    {"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}
]; 



function renderUserList() {

    let userList = document.createElement('div');
    userList.setAttribute("id", 'list')
    listContainer.appendChild(userList);

    userData.forEach(user => {
        let div = document.createElement('div');
        div.setAttribute("class", "user");
        div.textContent = user.lname.charAt(0).toUpperCase() + user.lname.slice(1) + ", " + user.fname.charAt(0).toUpperCase() + user.fname.slice(1);
        userList.appendChild(div);
        
    });
}

renderUserList();
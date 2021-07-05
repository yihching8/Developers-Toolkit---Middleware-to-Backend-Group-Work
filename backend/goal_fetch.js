// get user all 
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("localhost:3000/users/all", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// get user by ID 
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("localhost:3000/users/by-id", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//add user    
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
    
fetch("localhost:3000/users/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//update user
var requestOptions = {
  method: 'PUT',
  redirect: 'follow'
};

fetch("localhost:3000/users/update/by-id", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete user
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};
  
fetch("localhost:3000/users/delete/by-id", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
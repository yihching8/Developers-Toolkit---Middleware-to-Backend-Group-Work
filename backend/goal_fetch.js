//get goal all
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
  
fetch("localhost:3000/goals/all", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//get goal by ID
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
      
fetch("localhost:3000/goals/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//add goal    
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
    };
      
fetch("localhost:3000/goals/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//update goal
var requestOptions = {
    method: 'PUT',
    redirect: 'follow'
    };
      
fetch("localhost:3000/goals/update/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//delete goal
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
    };
      
fetch("localhost:3000/goals/delete/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));    
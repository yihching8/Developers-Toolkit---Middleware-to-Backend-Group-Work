//get transaction all
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
fetch("localhost:3000/transactions/all", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//get transaction by ID
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
      
fetch("localhost:3000/transactions/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//add transaction
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
fetch("localhost:3000/transactions/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


//update transaction
var requestOptions = {
    method: 'PUT',
    redirect: 'follow'
  };
  
fetch("localhost:3000/transactions/update/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//delete transaction
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
fetch("localhost:3000/transactions/delete/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
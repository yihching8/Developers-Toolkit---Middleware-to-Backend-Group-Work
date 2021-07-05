// (c) AzureKn1ght
const custname = document.getElementById("custname");
const password = document.getElementById("password");
const b1 = document.getElementById("b1");

//User: (1, 'Stillman', 'sspier0@go.com', '7483190162', 'Uui2gbKamvx');

//Login function
function login(e) {
  e.preventDefault(); //to prevent form from submitting and refreshing the page

  //to prevent empty input from submitting
  if (!custname.value || !password.value) {
    alert("Login Error: Please check your Username and Password.");
    return;
  }

  //Step 1: Get the input data from the form
  var u = custname.value;
  var p = password.value;

  //Step 2: Send the U/P to server to check login
  //alert("Submit: " + u + " " + p);
  //do the fetch here

  //Step 3a: If login ok then redirect to dashboard
  if (true) {
    sessionStorage.setItem("name", u); //to replace with actual name from Server
    sessionStorage.setItem("id", p); //to replace with user id from Server

    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("id"));
    window.location.href = "index_OLD.html";
  }
  //Step 3b: If failed then show alert error message
  else {
    alert("Login Error: Please check your Username and Password.");
  }
}

//Add event listener for login btn
b1.addEventListener("click", login);

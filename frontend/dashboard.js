// (c) AzureKn1ght
const balance = document.getElementById("balance");
const titleName = document.getElementById("titleName");
const b1 = document.getElementById("b1");

// const TransactionDataAll = [
//   { id: 1, customername: "Flora", bank: "DBS", deposit: 3000, loan: 2000 },
//   { id: 2, customername: "Flora", bank: "OCBC", deposit: 4000, loan: 2000 },
//   { id: 3, customername: "Mikhil", bank: "DBS", deposit: 3000, loan: 2000 },
//   { id: 4, customername: "Sashil", bank: "UOB", deposit: 6000, loan: 1000 },
//   { id: 5, customername: "Jack", bank: "UOB", deposit: 6000, loan: 8000 },
//   { id: 6, customername: "Jill", bank: "UOB", deposit: 7000, loan: 4000 },
// ];

var total_balance = 0;
var username = "";
var userID = null;

//Initialize the page on load
function init() {
  //Get user name and id
  username = sessionStorage.getItem("name");
  userID = sessionStorage.getItem("id");
  titleName.innerHTML = `Hello, ${username}`;

  //Get the user account balance by user ID
  total_balance = 9999;
  balance.innerText = `$${total_balance}`;

  //Get the list of goals from server
  //Calculate the percentage for each goal
}

function logout() {
  //Logout and redirect to login page
  sessionStorage.clear();
  window.location.href = "index.html";
}

init();
b1.addEventListener("click", filterTransaction);

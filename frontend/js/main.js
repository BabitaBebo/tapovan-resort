const tabItems = document.querySelectorAll(".tab-items"); //about us facilities rooms
const tabContentItems = document.querySelectorAll(".tab-content-item"); //para and image

async function getClientDetails({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchData);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await getClientDetails({ url, formData });

    console.log({ responseData });
  } catch (error) {
    console.error(error);
  }
}

const clientForm = document.getElementById("submit-details");
clientForm.addEventListener("submit", handleFormSubmit);

//select Tab content Item
function selectItem(e) {
  removeBorder();
  removeShow();

  //add border to current tab
  this.classList.add("tab-border");

  //Grab Items from the DOM
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
  //   //para Images
}
//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// const subButton = (document.getElementById("button").onclick = (e) => {
//   e.preventDefault();
//   onButtonClick();
// });

// function onButtonClick() {
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var mobile = document.getElementById("mobile").value;
//   var checkin = document.getElementById("checkin").value;
//   var checkout = document.getElementById("checkout").value;
//   var howManyPeopleTravel = document.getElementById("howManyPeopleTravel").value;

//   // console.log(username,email,mobile,checkIn,checkOut,numberOfPeople);
//   getUserDetails(username,
//     email,
//     mobile,
//     checkin,
//     checkout,
//     howManyPeopleTravel);
// }

// const api_url = "http://localhost:3000/users/user-enquiry";

// async function getUserDetails(data) {
//   await fetch(api_url, {
//     mode: "cors",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//       origin: "*",
//     },

//     // body: JSON.stringify(data),
//      body:JSON.stringify({

//       username:data.username,
//       email:data.email,
//       mobile:data.mobile,
//       checkin:data.checkin,
//       checkout:data.checkout,
//       howManyPeopleTravel:data.howManyPeopleTravel

//      })

//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("rejected", err));
// }

// var incButton=document.getElementsByClassName("inc");
// var decButton=document.getElementsByClassName("dec");
// // console.log(incButton,decButton);

// for(i=0;i<incButton.length;i++){
//   var buttonDI=incButton[i];
//   buttonDI.addEventListener('click',function(e){
//     e.preventDefault();
//     var buttonCliked=e.target;
//     // console.log(buttonCliked);
//     var input=buttonCliked.parentElement.children[1];
//     // console.log(input);
//     var inputValue=input.value;
//     // console.log(inputValue);
//     var newValue=parseInt(inputValue)+1;
//     input.value=newValue;

//   })
// }

// for(i=0;i<decButton.length;i++){
//   var buttonDI=decButton[i];
//   buttonDI.addEventListener('click',function(e){
//     e.preventDefault();
//     var buttonCliked=e.target;
//     // console.log(buttonCliked);
//     var input=buttonCliked.parentElement.children[1];
//     // console.log(input);
//     var inputValue=input.value;
//     // console.log(inputValue);
//     var newValue=parseInt(inputValue)-1;

//     if(newValue >=0)
//     input.value=newValue;

//   })
// }

// function validateForm() {
//   var name = document.forms["my-form"]["name"].value;
//   console.log(name);
// }

// fetch("input.txt").then((response)=>response.text())
// .then((data)=>console.log(data))
// .catch((err) => console.log("rejected", err));

// const data=await response.json()
// console.log(data);

// const form = document.getElementById("submit-details");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let username = document.getElementById("name").value;

//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("mobile").value;
//   const checkIn = document.getElementById("check-in").value;
//   const CheckOut = document.getElementById("check-out").value;

//   console.log(username, email, phone, checkIn, CheckOut);
// });

// var data = 0;
// document.getElementById("root").innerText = data;

// function decrement() {
//   if (data > 0) {
//     data = data - 1;
//     document.getElementById("root").innerText = data;
//   }
// }
// function increment() {
//   data = data + 1;
//   document.getElementById("root").innerText = data;

// }

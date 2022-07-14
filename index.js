// the first thing is to get the DOM element(s) that we want to trigger.
// start by declaring a variable that'll hold the value of this DOM element.
let featureNavItem = document.querySelector(".featuresDrop-down");
let featuresModal = document.querySelector(".feature-drop-answer");

// now that we have initialized the variables that holds the
// element we need in the DOM tree. Let's add an event listener that takes in a callback function.
// let's start with the callback function first, then we'll move down to event listener.

function displayFeaturesModal() {
  // 'featureModal' is a global variable,
  // so we can actually use it in this callback function.
  // but I need to check if the modal or dropdown itself contains
  // a specific class, by running through a conditional statement
  if (!featuresModal.classList.contains("show")) {
    console.log("'show' class added");
    featuresModal.classList.add("show");
  } else {
    console.log("'show' class removed");
    featuresModal.classList.remove("show");
  }
  console.log(featuresModal);
}

featureNavItem.addEventListener(
  "click",
  // remember how we talked about callback functions previously?
  // Now pass the callback function as an argument here
  displayFeaturesModal
);


// company section

let companyNavItem = document.querySelector(".comapanyDrop-down");
let companyModal = document.querySelector(".company-drop-answer");

function displayCompanyModal(){
  if(!companyModal.classList.contains("show")){
    console.log("'show' class added");
    companyModal.classList.add("show");
  } else {
    console.log("'show' class removed");
    companyModal.classList.remove("show");
    
  }
  console.log(companyModal);

}

companyNavItem.addEventListener(
  "click",
  displayCompanyModal
);





// media respnsiveness collapse section
let menuIcon = document.querySelector(".ham-menu");
let collapseMenu = document.querySelector(".mobile-nav");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");


menuIcon.addEventListener("click", e=>{
  collapseMenu.classList.add("show");
  overlay.classList.add("show");
  document.querySelector("body").classList.add("lock");
  console.log("add menu")
})

closeBtn.addEventListener("click", e=>{
  collapseMenu.classList.remove("show");
  overlay.classList.remove("show");
  document.querySelector("body").classList.remove("lock");
  console.log("remove menu")
})


// this is for the expanded collapseMenu

let modalDropDown = document.querySelector(".modal-dropdown");
let fixBtn = document.querySelector(".dropbtn");

function displayfeatures(){  
 
  if(!modalDropDown.classList.contains("show")){
    modalDropDown.classList.add("show")
     console.log("drop button")
    } else{
    modalDropDown.classList.remove("show")
 
     console.log("drop button removed")
 
   } 
}
 
fixBtn.addEventListener(
   "click",
   displayfeatures
 );


 let compBtn = document.querySelector(".comBtn");
 let compmodal = document.querySelector(".compModal")

 function displayCompany(){  
 
  if(!compmodal.classList.contains("show")){
    compmodal.classList.add("show")
     console.log("drop button")
    } else{
      compmodal.classList.remove("show")
 
     console.log("drop button removed")
 
   } 
}
 
 compBtn.addEventListener(
   "click",
   displayCompany
 );



 




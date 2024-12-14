
let mybutton = document.getElementById("myBtn");

function openSbPopUp(){


    let sbPopUp = document.getElementById("container-popUp")

    sbPopUp.classList.add("openPopUp")





}

function closePopUp(){

    let sbPopUp = document.getElementById("container-popUp")

    sbPopUp.classList.remove("openPopUp")





}

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.style.display = (dropdown.style.display === 'none') ? 'block' : 'none';
  }
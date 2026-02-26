//selecting popup box,popup overlay buttin
var popupoverylay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("pop-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverylay.style.display="block"
    popupbox.style.display="block"
})
//selecting the cancel button
var cancelpop = document.getElementById("cancel-popup")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popupoverylay.style.display="none"
    popupbox.style.display="none"
})//select container,addbook button,book title,book author input,book description
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookinputinput = document.getElementById("book-input-input")
var booktitleinput = document.getElementById("book-title-input")
var bookdescriptioninput = document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
            <h5>${bookinputinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick = "deletebook(event)">delete</button>`
    container.append(div)
})
function deletebook(event){
    event.target.parentElement.remove()
}
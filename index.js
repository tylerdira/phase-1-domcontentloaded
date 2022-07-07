// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
    coolMessage();
})

const coolMessage = function(e){
    const whateverText = document.getElementById("text") 
    whateverText.textContent = 'This is really cool!'
}

